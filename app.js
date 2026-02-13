// ============================================
// APP STATE & CONFIGURATION
// ============================================

const APP_STATE = {
    currentView: 'dashboard',
    currentWeek: 1,
    currentDay: 1,
    currentPhase: 1,
    completedWorkouts: [],
    currentStreak: 0,
    userProgress: {
        weeksCompleted: 0,
        workoutsCompleted: 0
    }
};

// ============================================
// LOCAL STORAGE
// ============================================

function loadUserProgress() {
    const saved = localStorage.getItem('workout_progress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            APP_STATE.completedWorkouts = data.completedWorkouts || [];
            APP_STATE.currentWeek = data.currentWeek || 1;
            APP_STATE.currentDay = data.currentDay || 1;
            APP_STATE.currentStreak = data.currentStreak || 0;
            APP_STATE.userProgress = data.userProgress || {
                weeksCompleted: 0,
                workoutsCompleted: 0
            };
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

function saveUserProgress() {
    const data = {
        completedWorkouts: APP_STATE.completedWorkouts,
        currentWeek: APP_STATE.currentWeek,
        currentDay: APP_STATE.currentDay,
        currentStreak: APP_STATE.currentStreak,
        userProgress: APP_STATE.userProgress
    };
    localStorage.setItem('workout_progress', JSON.stringify(data));
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadUserProgress();
    
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
        initializeApp();
    }, 2000);
});

function initializeApp() {
    setupNavigation();
    setupMenu();
    renderDashboard();
    renderProgram();
    renderProgress();
    renderTips();
    updateCurrentDayIndicator();
}

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    // Bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.nav;
            navigateToView(view);
            
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.view;
            navigateToView(view);
            closeMenu();
        });
    });

    // Quick actions
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            navigateToView(action);
        });
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        navigateToView('dashboard');
    });
}

function navigateToView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`${viewName}-view`).classList.add('active');
    
    APP_STATE.currentView = viewName;
    
    // Update header
    const headerTitle = document.getElementById('header-title');
    const backBtn = document.getElementById('back-btn');
    
    const titles = {
        'dashboard': 'Mon Programme',
        'program': 'Programme',
        'progress': 'Mes Progrès',
        'tips': 'Conseils',
        'week-detail': `Semaine ${APP_STATE.currentWeek}`,
        'workout': 'Séance'
    };
    
    headerTitle.textContent = titles[viewName] || 'Mon Programme';
    
    if (viewName === 'dashboard') {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'flex';
    }

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.nav === viewName) {
            item.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// ============================================
// MENU
// ============================================

function setupMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = sideMenu.querySelector('.menu-overlay');

    menuBtn.addEventListener('click', openMenu);
    menuOverlay.addEventListener('click', closeMenu);
}

function openMenu() {
    document.getElementById('side-menu').classList.add('open');
}

function closeMenu() {
    document.getElementById('side-menu').classList.remove('open');
}

// ============================================
// DASHBOARD
// ============================================

function renderDashboard() {
    // Motivational message
    const messages = PROGRAM_DATA.motivationalMessages;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('motivational-message').textContent = randomMessage;

    // Progress
    const totalWeeks = PROGRAM_DATA.weeks.length;
    const progressPercentage = Math.round((APP_STATE.userProgress.weeksCompleted / totalWeeks) * 100);
    
    document.getElementById('progress-badge').textContent = `${progressPercentage}%`;
    document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    document.getElementById('weeks-completed').textContent = APP_STATE.userProgress.weeksCompleted;
    document.getElementById('workouts-completed').textContent = APP_STATE.userProgress.workoutsCompleted;
    document.getElementById('current-streak').textContent = APP_STATE.currentStreak;

    // Today's workout
    renderTodayWorkout();
}

function renderTodayWorkout() {
    const week = PROGRAM_DATA.weeks.find(w => w.weekNumber === APP_STATE.currentWeek);
    if (!week) return;

    const day = week.days.find(d => d.dayNumber === APP_STATE.currentDay);
    if (!day) return;

    const container = document.getElementById('today-workout-content');
    document.getElementById('today-badge').textContent = `Semaine ${week.weekNumber}`;

    if (day.type === 'rest') {
        container.innerHTML = `
            <div class="rest-day">
                <div class="rest-day-icon">😴</div>
                <h4>${day.title}</h4>
                <p>${day.suggestion || 'Profite de cette journée pour récupérer'}</p>
            </div>
        `;
    } else {
        const isCompleted = isWorkoutCompleted(week.weekNumber, day.dayNumber);
        const buttonText = isCompleted ? 'Séance terminée ✓' : 'Commencer la séance';
        const buttonClass = isCompleted ? 'btn-success' : 'btn-primary';

        container.innerHTML = `
            <div class="today-workout">
                <div class="workout-info">
                    <div class="workout-icon">💪</div>
                    <div class="workout-details">
                        <h4>${day.title}</h4>
                        <p>${day.name}</p>
                    </div>
                </div>
                <div class="workout-meta">
                    <div class="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>${day.duration} min</span>
                    </div>
                    ${day.exercises ? `
                        <div class="meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            <span>${day.exercises.length} exercices</span>
                        </div>
                    ` : ''}
                </div>
                <button class="btn ${buttonClass}" onclick="viewWorkoutDetail(${week.weekNumber}, ${day.dayNumber})" ${isCompleted ? 'disabled' : ''}>
                    ${buttonText}
                </button>
            </div>
        `;
    }
}

// ============================================
// PROGRAM VIEW
// ============================================

function renderProgram() {
    setupPhaseTabs();
    renderWeeksList(1);
}

function setupPhaseTabs() {
    document.querySelectorAll('.phase-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const phase = parseInt(tab.dataset.phase);
            APP_STATE.currentPhase = phase;
            renderWeeksList(phase);
        });
    });
}

function renderWeeksList(phase) {
    const container = document.getElementById('weeks-list');
    
    const phaseWeeks = {
        1: [1, 2, 3, 4],
        2: [5, 6, 7, 8],
        3: [9, 10, 11, 12]
    };

    const weeks = PROGRAM_DATA.weeks.filter(w => phaseWeeks[phase].includes(w.weekNumber));
    
    container.innerHTML = weeks.map(week => {
        const status = getWeekStatus(week.weekNumber);
        const statusClass = status === 'completed' ? 'completed' : status === 'current' ? 'current' : 'upcoming';
        const statusText = status === 'completed' ? 'Terminée' : status === 'current' ? 'En cours' : 'À venir';
        
        return `
            <div class="week-card" onclick="viewWeekDetail(${week.weekNumber})">
                <div class="week-card-header">
                    <span class="week-number">Semaine ${week.weekNumber}</span>
                    <span class="week-status ${statusClass}">${statusText}</span>
                </div>
                <div class="week-focus">${week.focus}</div>
                <div class="week-days">
                    ${week.days.map(day => {
                        const dayStatus = isWorkoutCompleted(week.weekNumber, day.dayNumber) ? 'completed' : day.type === 'rest' ? 'rest' : '';
                        return `<div class="day-indicator ${dayStatus}">${day.dayNumber}</div>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function getWeekStatus(weekNumber) {
    if (weekNumber < APP_STATE.currentWeek) return 'completed';
    if (weekNumber === APP_STATE.currentWeek) return 'current';
    return 'upcoming';
}

// ============================================
// WEEK DETAIL VIEW
// ============================================

function viewWeekDetail(weekNumber) {
    APP_STATE.currentWeek = weekNumber;
    const week = PROGRAM_DATA.weeks.find(w => w.weekNumber === weekNumber);
    if (!week) return;

    const container = document.getElementById('week-detail-content');
    
    container.innerHTML = `
        <div class="program-header">
            <h2 class="program-title">Semaine ${week.weekNumber}</h2>
            <p class="program-subtitle">${week.phase} - ${week.focus}</p>
        </div>
        <div style="padding: var(--spacing-lg) var(--spacing-md);">
            ${week.days.map(day => renderDayCard(week, day)).join('')}
        </div>
    `;

    navigateToView('week-detail');
}

function renderDayCard(week, day) {
    const isCompleted = isWorkoutCompleted(week.weekNumber, day.dayNumber);
    const isRest = day.type === 'rest';
    
    if (isRest) {
        return `
            <div class="card mb-2">
                <div class="rest-day">
                    <div class="rest-day-icon">😴</div>
                    <h4>${day.name} - ${day.title}</h4>
                    <p>${day.suggestion || 'Jour de repos'}</p>
                </div>
            </div>
        `;
    }

    return `
        <div class="card mb-2" onclick="viewWorkoutDetail(${week.weekNumber}, ${day.dayNumber})">
            <div class="workout-info">
                <div class="workout-icon">${isCompleted ? '✅' : '💪'}</div>
                <div class="workout-details">
                    <h4>${day.name} - ${day.title}</h4>
                    <p>${day.duration} min ${day.exercises ? `• ${day.exercises.length} exercices` : ''}</p>
                </div>
            </div>
            ${isCompleted ? '<div class="mt-1" style="color: var(--success); font-weight: 600;">✓ Terminée</div>' : ''}
        </div>
    `;
}

// ============================================
// WORKOUT DETAIL VIEW
// ============================================

function viewWorkoutDetail(weekNumber, dayNumber) {
    const week = PROGRAM_DATA.weeks.find(w => w.weekNumber === weekNumber);
    if (!week) return;

    const day = week.days.find(d => d.dayNumber === dayNumber);
    if (!day || day.type === 'rest') return;

    const container = document.getElementById('workout-content');
    const isCompleted = isWorkoutCompleted(weekNumber, dayNumber);

    container.innerHTML = `
        <div class="workout-header">
            <h2 class="workout-title">${day.title}</h2>
            <p class="workout-subtitle">${day.name} • Semaine ${weekNumber}</p>
            <div class="workout-duration">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                ${day.duration} minutes
            </div>
        </div>

        <div class="workout-body">
            ${day.warmup ? `
                <div class="workout-section">
                    <h3 class="section-title">
                        <span class="section-icon">🔥</span>
                        Échauffement (${day.warmup.duration} min)
                    </h3>
                    <div class="card">
                        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                            ${day.warmup.exercises.map(ex => `<li style="display: flex; gap: 0.5rem;"><span style="color: var(--primary);">→</span> ${ex}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            ` : ''}

            ${day.exercises ? `
                <div class="workout-section">
                    <h3 class="section-title">
                        <span class="section-icon">💪</span>
                        Exercices principaux
                    </h3>
                    ${renderExerciseCards(day.exercises)}
                </div>
            ` : ''}

            ${day.cooldown ? `
                <div class="workout-section">
                    <h3 class="section-title">
                        <span class="section-icon">🧘</span>
                        Retour au calme (${day.cooldown.duration} min)
                    </h3>
                    <div class="card">
                        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                            ${day.cooldown.exercises.map(ex => `<li style="display: flex; gap: 0.5rem;"><span style="color: var(--secondary);">→</span> ${ex}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            ` : ''}
        </div>

        <div class="workout-actions">
            <button class="btn ${isCompleted ? 'btn-success' : 'btn-primary'}" 
                    onclick="completeWorkout(${weekNumber}, ${dayNumber})"
                    ${isCompleted ? 'disabled' : ''}>
                ${isCompleted ? '✓ Séance terminée' : 'Terminer la séance'}
            </button>
        </div>
    `;

    navigateToView('workout');
}

function renderExerciseCards(exercises) {
    if (!exercises) return '';
    
    return exercises.map((exercise, index) => {
        if (exercise.exercises) {
            // Circuit
            return `
                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4 class="exercise-name">${exercise.name}</h4>
                        <span class="exercise-badge">Circuit</span>
                    </div>
                    <p class="exercise-description">${exercise.description || ''}</p>
                    <div style="background: var(--background); padding: var(--spacing-md); border-radius: var(--radius-md); margin-top: var(--spacing-md);">
                        ${exercise.exercises.map(ex => `<div style="margin-bottom: 0.5rem;">→ ${ex}</div>`).join('')}
                    </div>
                    ${exercise.alternatives ? `
                        <div class="exercise-alternatives">
                            <p class="alternatives-title">Alternatives :</p>
                            <div class="alternatives-list">
                                ${exercise.alternatives.map(alt => `<div class="alternative-item">${alt}</div>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        return `
            <div class="exercise-card">
                <div class="exercise-header">
                    <h4 class="exercise-name">${exercise.name}</h4>
                    <span class="exercise-badge">#${index + 1}</span>
                </div>
                ${exercise.description ? `<p class="exercise-description">${exercise.description}</p>` : ''}
                <div class="exercise-params">
                    ${exercise.duration ? `
                        <div class="param">
                            <svg class="param-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>${exercise.duration}</span>
                        </div>
                    ` : ''}
                    ${exercise.reps ? `
                        <div class="param">
                            <svg class="param-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            <span>${exercise.reps} répétitions</span>
                        </div>
                    ` : ''}
                    ${exercise.sets ? `
                        <div class="param">
                            <svg class="param-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 7h16M4 12h16M4 17h16"/>
                            </svg>
                            <span>${exercise.sets} séries</span>
                        </div>
                    ` : ''}
                    ${exercise.rest ? `
                        <div class="param">
                            <svg class="param-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                            <span>Repos: ${exercise.rest}</span>
                        </div>
                    ` : ''}
                </div>
                ${exercise.alternatives && exercise.alternatives.length > 0 ? `
                    <div class="exercise-alternatives">
                        <p class="alternatives-title">Alternatives :</p>
                        <div class="alternatives-list">
                            ${exercise.alternatives.map(alt => `<div class="alternative-item">${alt}</div>`).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// ============================================
// WORKOUT COMPLETION
// ============================================

function isWorkoutCompleted(weekNumber, dayNumber) {
    return APP_STATE.completedWorkouts.some(w => 
        w.week === weekNumber && w.day === dayNumber
    );
}

function completeWorkout(weekNumber, dayNumber) {
    if (isWorkoutCompleted(weekNumber, dayNumber)) return;

    // Add to completed
    APP_STATE.completedWorkouts.push({
        week: weekNumber,
        day: dayNumber,
        date: new Date().toISOString()
    });

    // Update stats
    APP_STATE.userProgress.workoutsCompleted++;
    APP_STATE.currentStreak++;

    // Update current week/day
    if (dayNumber === 7) {
        APP_STATE.currentWeek = Math.min(weekNumber + 1, 12);
        APP_STATE.currentDay = 1;
    } else {
        APP_STATE.currentDay = dayNumber + 1;
    }

    // Check if week completed
    const week = PROGRAM_DATA.weeks.find(w => w.weekNumber === weekNumber);
    if (week) {
        const workoutDays = week.days.filter(d => d.type === 'workout').length;
        const completedInWeek = APP_STATE.completedWorkouts.filter(w => w.week === weekNumber).length;
        
        if (completedInWeek === workoutDays) {
            APP_STATE.userProgress.weeksCompleted++;
        }
    }

    saveUserProgress();
    showCelebration();
    
    setTimeout(() => {
        renderDashboard();
        renderProgram();
        renderProgress();
        navigateToView('dashboard');
    }, 2000);
}

function showCelebration() {
    const modal = document.getElementById('celebration-modal');
    modal.classList.add('show');
    
    // Confetti animation
    createConfetti();
    
    // Vibration si supporté
    if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
    }

    document.getElementById('close-celebration').addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#95E1D3', '#FFA07A'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear`;
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Add confetti animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(400px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PROGRESS VIEW
// ============================================

function renderProgress() {
    renderWorkoutHistory();
    renderExpectedResults();
}

function renderWorkoutHistory() {
    const container = document.getElementById('workout-history');
    
    if (APP_STATE.completedWorkouts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: var(--spacing-xl);">Aucune séance terminée pour le moment. Commence dès aujourd\'hui ! 💪</p>';
        return;
    }

    const sortedWorkouts = [...APP_STATE.completedWorkouts].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    container.innerHTML = sortedWorkouts.slice(0, 10).map(workout => {
        const date = new Date(workout.date);
        const week = PROGRAM_DATA.weeks.find(w => w.weekNumber === workout.week);
        const day = week?.days.find(d => d.dayNumber === workout.day);
        
        return `
            <div class="history-item">
                <div class="history-date">
                    <div class="history-date-day">${date.getDate()}</div>
                    <div class="history-date-month">${date.toLocaleDateString('fr-FR', { month: 'short' })}</div>
                </div>
                <div class="history-content">
                    <div class="history-title">${day?.title || 'Séance'}</div>
                    <div class="history-details">Semaine ${workout.week} • ${day?.name || ''}</div>
                </div>
                <svg class="history-check" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
        `;
    }).join('');
}

function renderExpectedResults() {
    const results = PROGRAM_DATA.expectedResults;
    
    document.getElementById('results-week2').innerHTML = results.week2.results.map(r => `<li>${r}</li>`).join('');
    document.getElementById('results-month1').innerHTML = results.month1.results.map(r => `<li>${r}</li>`).join('');
    document.getElementById('results-months23').innerHTML = results.months2_3.results.map(r => `<li>${r}</li>`).join('');
}

// ============================================
// TIPS VIEW
// ============================================

function renderTips() {
    // Nutrition tips
    document.getElementById('nutrition-tips').innerHTML = PROGRAM_DATA.nutritionTips.map(tip => `<li>${tip}</li>`).join('');
    
    // Anti-hypertrophy tips
    document.getElementById('anti-hypertrophy-tips').innerHTML = PROGRAM_DATA.antiHypertrophyTips.map(tip => `<li>${tip}</li>`).join('');
    
    // Menstrual cycle tips
    const menstrualTips = PROGRAM_DATA.menstrualCycleAdaptations;
    const container = document.getElementById('menstrual-tips');
    
    container.innerHTML = Object.values(menstrualTips).map(phase => `
        <div class="cycle-phase">
            <div class="cycle-phase-name">${phase.name}</div>
            <div class="cycle-phase-advice">${phase.advice}</div>
        </div>
    `).join('');
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function updateCurrentDayIndicator() {
    // Update la journée actuelle en fonction de la date système
    // Cette fonction peut être améliorée pour synchroniser avec un calendrier réel
    const today = new Date().getDay(); // 0 = Dimanche, 1 = Lundi, etc.
    
    // Simple mapping (peut être personnalisé)
    if (today >= 1 && today <= 7) {
        // APP_STATE.currentDay = today; // Décommenter pour synchro auto
    }
}

// Make functions globally accessible
window.viewWeekDetail = viewWeekDetail;
window.viewWorkoutDetail = viewWorkoutDetail;
window.completeWorkout = completeWorkout;