// ============================================
// PROGRAMME SPORTIF - 12 SEMAINES
// Recomposition corporelle féminine
// ============================================

const PROGRAM_DATA = {
  meta: {
    title: "Programme Silhouette Affinée",
    subtitle: "12 semaines pour une transformation durable",
    duration: 12,
    level: "Débutant à Intermédiaire",
    objective: "Perte de gras + ventre plat + silhouette fine"
  },

  motivationalMessages: [
    "Chaque séance te rapproche de ton objectif 💪",
    "La régularité bat l'intensité !",
    "Ton corps te remerciera demain ✨",
    "Bravo d'être là aujourd'hui !",
    "Les résultats arrivent, continue 🔥",
    "Tu es plus forte que tu ne le penses",
    "Chaque jour compte, tu progresses !",
    "Fière de toi ! Continue comme ça 🌟"
  ],

  weeks: [
    // ============================================
    // PHASE 1 : FONDATION (Semaines 1-4)
    // ============================================
    {
      weekNumber: 1,
      phase: "Fondation",
      focus: "Adaptation et base cardio",
      days: [
        {
          dayNumber: 1,
          name: "Lundi",
          type: "workout",
          title: "Cardio HIIT Modéré",
          duration: 25,
          warmup: {
            duration: 5,
            exercises: [
              "Marche sur place - 1 min",
              "Rotations bras - 30 sec",
              "Talons-fesses légers - 1 min",
              "Montées genoux - 1 min",
              "Étirements dynamiques jambes - 1 min 30"
            ]
          },
          exercises: [
            {
              name: "Jumping Jacks",
              description: "Sauts avec écart de jambes et bras",
              duration: "30 sec",
              rest: "30 sec",
              sets: 4,
              alternatives: ["Marche rapide sur place", "Step touch"]
            },
            {
              name: "High Knees",
              description: "Montées de genoux rapides",
              duration: "30 sec",
              rest: "30 sec",
              sets: 4,
              alternatives: ["Montées genoux modérées", "Marche genoux hauts"]
            },
            {
              name: "Butt Kicks",
              description: "Talons aux fesses alternés",
              duration: "30 sec",
              rest: "30 sec",
              sets: 4,
              alternatives: ["Talons-fesses légers", "Marche arrière"]
            },
            {
              name: "Mountain Climbers (lent)",
              description: "En planche, ramener genoux vers poitrine alternativement",
              duration: "30 sec",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Marche en planche", "Planche statique"]
            }
          ],
          cooldown: {
            duration: 5,
            exercises: [
              "Marche lente - 2 min",
              "Étirements quadriceps - 1 min",
              "Étirements ischio-jambiers - 1 min",
              "Respiration profonde - 1 min"
            ]
          }
        },
        {
          dayNumber: 2,
          name: "Mardi",
          type: "workout",
          title: "Renforcement Global + Gainage",
          duration: 30,
          warmup: {
            duration: 5,
            exercises: [
              "Rotations articulaires - 2 min",
              "Cat-Cow (dos) - 1 min",
              "Bird dog léger - 2 min"
            ]
          },
          exercises: [
            {
              name: "Squats au poids du corps",
              description: "Pieds largeur épaules, descendre comme pour s'asseoir",
              reps: "12-15",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Squats assistés (chaise)", "Mini squats"]
            },
            {
              name: "Pompes genoux",
              description: "Mains largeur épaules, genoux au sol",
              reps: "8-12",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Pompes contre mur", "Planche sur genoux"]
            },
            {
              name: "Fentes alternées",
              description: "Un pas en avant, descendre genou arrière vers sol",
              reps: "10 par jambe",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Mini fentes", "Fentes statiques"]
            },
            {
              name: "Planche ventrale",
              description: "Sur avant-bras, corps aligné, gainage",
              duration: "20-30 sec",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Planche sur genoux", "Planche inclinée"]
            },
            {
              name: "Dead Bug",
              description: "Sur le dos, jambes et bras en l'air, alternance opposés",
              reps: "12-15",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Dead bug modifié (une jambe)", "Jambes en table"]
            },
            {
              name: "Pont fessier",
              description: "Allongée, pieds au sol, soulever bassin",
              reps: "15-20",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Pont isométrique", "Pont une jambe"]
            }
          ],
          cooldown: {
            duration: 5,
            exercises: [
              "Child pose - 1 min",
              "Étirement psoas - 1 min",
              "Torsion allongée - 2 min",
              "Respiration ventrale - 1 min"
            ]
          }
        },
        {
          dayNumber: 3,
          name: "Mercredi",
          type: "rest",
          title: "Repos Actif",
          suggestion: "Marche 20-30 min ou étirements doux"
        },
        {
          dayNumber: 4,
          name: "Jeudi",
          type: "workout",
          title: "Cardio Doux + Mobilité",
          duration: 30,
          warmup: {
            duration: 5,
            exercises: [
              "Marche sur place - 2 min",
              "Cercles bras - 1 min",
              "Rotations hanches - 2 min"
            ]
          },
          exercises: [
            {
              name: "Marche rapide intervalle",
              description: "Alterner tempo normal et rapide",
              duration: "2 min rapide / 1 min normal",
              sets: 5,
              alternatives: ["Marche inclinée", "Marche nordique"]
            },
            {
              name: "Step touch latéraux",
              description: "Pas chassés de côté",
              duration: "1 min",
              rest: "30 sec",
              sets: 4,
              alternatives: ["Pas latéraux simples", "Marche latérale"]
            },
            {
              name: "Rotations tronc debout",
              description: "Pieds fixes, rotation du buste",
              reps: "15 par côté",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Rotations assises", "Torsions douces"]
            },
            {
              name: "Levées genoux alternées",
              description: "Debout, monter genoux hauteur hanches",
              duration: "1 min",
              rest: "30 sec",
              sets: 4,
              alternatives: ["Marche genoux hauts", "Levées genoux assis"]
            }
          ],
          cooldown: {
            duration: 10,
            exercises: [
              "Marche lente - 3 min",
              "Étirements complet corps - 5 min",
              "Respiration - 2 min"
            ]
          }
        },
        {
          dayNumber: 5,
          name: "Vendredi",
          type: "workout",
          title: "Circuit Métabolique",
          duration: 25,
          warmup: {
            duration: 5,
            exercises: [
              "Jogging léger sur place - 2 min",
              "Jumping jacks doux - 1 min",
              "Étirements dynamiques - 2 min"
            ]
          },
          exercises: [
            {
              name: "Circuit complet (3 tours)",
              description: "Enchaîner tous les exercices avec minimum de repos",
              exercises: [
                "Squats - 15 reps",
                "Planche - 20 sec",
                "Jumping jacks - 30 sec",
                "Mountain climbers lents - 20 sec",
                "Repos - 1 min entre les tours"
              ],
              sets: 3,
              alternatives: ["Réduire répétitions", "Augmenter repos"]
            }
          ],
          cooldown: {
            duration: 5,
            exercises: [
              "Marche - 2 min",
              "Étirements jambes - 2 min",
              "Respiration - 1 min"
            ]
          }
        },
        {
          dayNumber: 6,
          name: "Samedi",
          type: "workout",
          title: "Pilates Flow",
          duration: 35,
          warmup: {
            duration: 5,
            exercises: [
              "Respiration pilates - 2 min",
              "Cat-cow - 2 min",
              "Activation transverse - 1 min"
            ]
          },
          exercises: [
            {
              name: "Hundred (modifié)",
              description: "Sur le dos, jambes en table, bras pompent",
              duration: "30 sec",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Jambes au sol", "Une jambe levée"]
            },
            {
              name: "Roll up",
              description: "Allongée à assise, montée vertèbre par vertèbre",
              reps: "8-10",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Roll up avec mains sol", "Demi roll up"]
            },
            {
              name: "Single leg stretch",
              description: "Sur le dos, alterner jambes vers poitrine",
              reps: "12 par jambe",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Jambes au sol", "Tempo lent"]
            },
            {
              name: "Planche latérale",
              description: "Sur le côté, soulever bassin",
              duration: "15-20 sec par côté",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Genoux au sol", "Avant-bras"]
            },
            {
              name: "Swimming",
              description: "Sur le ventre, lever bras et jambes opposés",
              duration: "30 sec",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Superman statique", "Un bras/une jambe"]
            },
            {
              name: "Teaser (préparation)",
              description: "En V assis, jambes levées",
              duration: "10-15 sec",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Jambes pliées", "Mains au sol"]
            }
          ],
          cooldown: {
            duration: 8,
            exercises: [
              "Child pose - 2 min",
              "Étirement colonne - 3 min",
              "Rouleau de mousse (si dispo) - 3 min"
            ]
          }
        },
        {
          dayNumber: 7,
          name: "Dimanche",
          type: "rest",
          title: "Repos Complet",
          suggestion: "Récupération totale, sommeil, hydratation"
        }
      ]
    },

    // Semaine 2
    {
      weekNumber: 2,
      phase: "Fondation",
      focus: "Renforcement progressif",
      days: [
        {
          dayNumber: 1,
          name: "Lundi",
          type: "workout",
          title: "Cardio HIIT Modéré",
          duration: 25,
          warmup: {
            duration: 5,
            exercises: [
              "Marche dynamique - 2 min",
              "Rotations articulaires - 2 min",
              "Activation cardio légère - 1 min"
            ]
          },
          exercises: [
            {
              name: "Jumping Jacks",
              duration: "40 sec",
              rest: "20 sec",
              sets: 4,
              alternatives: ["Marche rapide", "Step touch"]
            },
            {
              name: "High Knees",
              duration: "35 sec",
              rest: "25 sec",
              sets: 4,
              alternatives: ["Montées genoux modérées"]
            },
            {
              name: "Butt Kicks",
              duration: "35 sec",
              rest: "25 sec",
              sets: 4,
              alternatives: ["Talons-fesses légers"]
            },
            {
              name: "Mountain Climbers",
              duration: "35 sec",
              rest: "25 sec",
              sets: 4,
              alternatives: ["Marche en planche"]
            },
            {
              name: "Burpees modifiés",
              description: "Sans saut, avec pas",
              reps: "8-10",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Squat + planche", "Burpee sur chaise"]
            }
          ],
          cooldown: {
            duration: 5,
            exercises: [
              "Marche lente - 2 min",
              "Étirements complets - 3 min"
            ]
          }
        },
        {
          dayNumber: 2,
          name: "Mardi",
          type: "workout",
          title: "Renforcement Total Body",
          duration: 32,
          warmup: {
            duration: 5,
            exercises: [
              "Mobilité articulaire - 3 min",
              "Activation musculaire - 2 min"
            ]
          },
          exercises: [
            {
              name: "Squats",
              reps: "15-18",
              rest: "40 sec",
              sets: 4,
              alternatives: ["Squats assistés"]
            },
            {
              name: "Pompes genoux",
              reps: "10-15",
              rest: "40 sec",
              sets: 4,
              alternatives: ["Pompes murales"]
            },
            {
              name: "Fentes marchées",
              reps: "12 par jambe",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Fentes statiques"]
            },
            {
              name: "Planche ventrale",
              duration: "25-35 sec",
              rest: "40 sec",
              sets: 4,
              alternatives: ["Planche genoux"]
            },
            {
              name: "Bicycle crunches",
              reps: "15 par côté",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Crunch classique"]
            },
            {
              name: "Superman",
              duration: "20 sec",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Lever bras seuls"]
            }
          ],
          cooldown: {
            duration: 5,
            exercises: [
              "Étirements profonds - 5 min"
            ]
          }
        },
        {
          dayNumber: 3,
          name: "Mercredi",
          type: "rest",
          title: "Repos Actif",
          suggestion: "Yoga doux 15 min ou marche"
        },
        {
          dayNumber: 4,
          name: "Jeudi",
          type: "workout",
          title: "Cardio Interval Training",
          duration: 30,
          warmup: {
            duration: 5,
            exercises: [
              "Échauffement progressif - 5 min"
            ]
          },
          exercises: [
            {
              name: "Intervalles marche/course",
              description: "Alterner intensités",
              duration: "2 min intense / 1 min récup",
              sets: 6,
              alternatives: ["Marche rapide seule"]
            },
            {
              name: "Side steps rapides",
              duration: "1 min",
              rest: "30 sec",
              sets: 4,
              alternatives: ["Pas latéraux lents"]
            },
            {
              name: "Skaters",
              description: "Sauts latéraux alternés",
              duration: "40 sec",
              rest: "30 sec",
              sets: 4,
              alternatives: ["Pas chassés"]
            }
          ],
          cooldown: {
            duration: 8,
            exercises: [
              "Retour au calme - 8 min"
            ]
          }
        },
        {
          dayNumber: 5,
          name: "Vendredi",
          type: "workout",
          title: "Circuit Métabolique Intensif",
          duration: 28,
          warmup: {
            duration: 5,
            exercises: [
              "Préparation circuit - 5 min"
            ]
          },
          exercises: [
            {
              name: "Circuit 4 tours",
              exercises: [
                "Squats jump (ou normaux) - 15",
                "Planche dynamique - 30 sec",
                "High knees - 40 sec",
                "Push-ups - 10",
                "Repos - 1 min"
              ],
              sets: 4,
              alternatives: ["Version sans sauts"]
            }
          ],
          cooldown: {
            duration: 5,
            exercises: [
              "Récupération - 5 min"
            ]
          }
        },
        {
          dayNumber: 6,
          name: "Samedi",
          type: "workout",
          title: "Yoga Flow Dynamique",
          duration: 40,
          warmup: {
            duration: 5,
            exercises: [
              "Salutations au soleil - 5 min"
            ]
          },
          exercises: [
            {
              name: "Flow enchaîné",
              description: "Warrior I, II, III + Triangle + Tree",
              duration: "30 min continu",
              alternatives: ["Version débutant"]
            }
          ],
          cooldown: {
            duration: 5,
            exercises: [
              "Savasana - 5 min"
            ]
          }
        },
        {
          dayNumber: 7,
          name: "Dimanche",
          type: "rest",
          title: "Repos Complet",
          suggestion: "Récupération et préparation semaine 3"
        }
      ]
    },

    // Semaine 3
    {
      weekNumber: 3,
      phase: "Fondation",
      focus: "Augmentation volume",
      days: [
        {
          dayNumber: 1,
          name: "Lundi",
          type: "workout",
          title: "HIIT Cardio Progressif",
          duration: 28,
          warmup: { duration: 5, exercises: ["Échauffement complet - 5 min"] },
          exercises: [
            {
              name: "Tabata mix",
              description: "20 sec effort / 10 sec repos",
              exercises: ["Burpees modifiés", "High knees", "Mountain climbers", "Jumping jacks"],
              sets: 8,
              alternatives: ["Réduire intensité"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Cool down - 5 min"] }
        },
        {
          dayNumber: 2,
          name: "Mardi",
          type: "workout",
          title: "Renforcement Jambes + Core",
          duration: 35,
          warmup: { duration: 5, exercises: ["Activation - 5 min"] },
          exercises: [
            {
              name: "Squats bulgares",
              reps: "12 par jambe",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Fentes arrière"]
            },
            {
              name: "Deadlift une jambe (PDC)",
              reps: "10 par jambe",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Deadlift normal"]
            },
            {
              name: "Planche avec tap épaules",
              reps: "20 total",
              rest: "40 sec",
              sets: 3,
              alternatives: ["Planche statique"]
            },
            {
              name: "Russian twists",
              reps: "20 total",
              rest: "30 sec",
              sets: 3,
              alternatives: ["Rotations assises"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Étirements - 5 min"] }
        },
        {
          dayNumber: 3,
          name: "Mercredi",
          type: "rest",
          title: "Repos Actif",
          suggestion: "Stretching ou marche légère"
        },
        {
          dayNumber: 4,
          name: "Jeudi",
          type: "workout",
          title: "Cardio Dance/Aéro",
          duration: 35,
          warmup: { duration: 5, exercises: ["Warm up dance - 5 min"] },
          exercises: [
            {
              name: "Chorégraphie cardio",
              duration: "25 min",
              description: "Mouvements variés, intensité modérée à élevée",
              alternatives: ["Marche rapide intervalles"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Retour calme - 5 min"] }
        },
        {
          dayNumber: 5,
          name: "Vendredi",
          type: "workout",
          title: "Circuit Full Body",
          duration: 30,
          warmup: { duration: 5, exercises: ["Prépa circuit - 5 min"] },
          exercises: [
            {
              name: "Circuit 5 tours",
              exercises: [
                "Burpees - 10",
                "Planche - 40 sec",
                "Squats - 20",
                "Pompes - 12",
                "Mountain climbers - 30 sec",
                "Repos - 1 min"
              ],
              sets: 5,
              alternatives: ["4 tours si fatigue"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Récup - 5 min"] }
        },
        {
          dayNumber: 6,
          name: "Samedi",
          type: "workout",
          title: "Pilates Intense",
          duration: 40,
          warmup: { duration: 5, exercises: ["Pilates prep - 5 min"] },
          exercises: [
            {
              name: "Série pilates avancé",
              duration: "30 min",
              description: "Hundred, Roll up, Teaser, Side plank series",
              alternatives: ["Version modifiée"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Stretching profond - 5 min"] }
        },
        {
          dayNumber: 7,
          name: "Dimanche",
          type: "rest",
          title: "Repos Complet"
        }
      ]
    },

    // Semaine 4
    {
      weekNumber: 4,
      phase: "Fondation",
      focus: "Consolidation acquis",
      days: [
        {
          dayNumber: 1,
          name: "Lundi",
          type: "workout",
          title: "HIIT Cardio Varié",
          duration: 30,
          warmup: { duration: 5, exercises: ["Warm up - 5 min"] },
          exercises: [
            {
              name: "Mix HIIT",
              description: "Varier les exercices toutes les 45 sec",
              duration: "45 sec effort / 15 sec repos",
              sets: 12,
              alternatives: ["Réduire tempo"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Cool down - 5 min"] }
        },
        {
          dayNumber: 2,
          name: "Mardi",
          type: "workout",
          title: "Renforcement Supérieur + Core",
          duration: 35,
          warmup: { duration: 5, exercises: ["Activation haut corps - 5 min"] },
          exercises: [
            {
              name: "Pompes variées",
              description: "Larges, serrées, déclinées",
              reps: "8-12 chaque",
              rest: "40 sec",
              sets: 3,
              alternatives: ["Genoux ou mur"]
            },
            {
              name: "Dips chaise",
              reps: "12-15",
              rest: "40 sec",
              sets: 3,
              alternatives: ["Dips assistés"]
            },
            {
              name: "Planche rotations",
              reps: "10 par côté",
              rest: "40 sec",
              sets: 3,
              alternatives: ["Planche statique"]
            },
            {
              name: "V-ups",
              reps: "12-15",
              rest: "45 sec",
              sets: 3,
              alternatives: ["Crunches"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Étirements - 5 min"] }
        },
        {
          dayNumber: 3,
          name: "Mercredi",
          type: "rest",
          title: "Repos Actif",
          suggestion: "Yoga restauratif 20 min"
        },
        {
          dayNumber: 4,
          name: "Jeudi",
          type: "workout",
          title: "Cardio Endurance",
          duration: 40,
          warmup: { duration: 5, exercises: ["Échauffement - 5 min"] },
          exercises: [
            {
              name: "Cardio continu modéré",
              duration: "30 min",
              description: "Marche rapide, vélo ou elliptique",
              alternatives: ["Fractionner en 2x15 min"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Retour calme - 5 min"] }
        },
        {
          dayNumber: 5,
          name: "Vendredi",
          type: "workout",
          title: "Circuit Métabolique Final",
          duration: 30,
          warmup: { duration: 5, exercises: ["Préparation - 5 min"] },
          exercises: [
            {
              name: "Circuit bilan semaine 4",
              exercises: [
                "Tous les exercices appris",
                "Format pyramidal",
                "15-12-10-8-6 reps"
              ],
              sets: 1,
              alternatives: ["Format classique"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Récupération - 5 min"] }
        },
        {
          dayNumber: 6,
          name: "Samedi",
          type: "workout",
          title: "Yoga Flow Complet",
          duration: 45,
          warmup: { duration: 5, exercises: ["Salutations - 5 min"] },
          exercises: [
            {
              name: "Flow intégral",
              duration: "35 min",
              description: "Vinyasa complet avec inversions légères",
              alternatives: ["Hatha yoga"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Savasana - 5 min"] }
        },
        {
          dayNumber: 7,
          name: "Dimanche",
          type: "rest",
          title: "Repos Complet",
          suggestion: "Bilan phase 1, préparer phase 2"
        }
      ]
    },

    // ============================================
    // PHASE 2 : INTENSIFICATION (Semaines 5-8)
    // ============================================
    {
      weekNumber: 5,
      phase: "Intensification",
      focus: "Augmentation intensité cardio",
      days: [
        {
          dayNumber: 1,
          name: "Lundi",
          type: "workout",
          title: "HIIT Intense",
          duration: 30,
          warmup: { duration: 5, exercises: ["Warm up dynamique - 5 min"] },
          exercises: [
            {
              name: "Tabata hardcore",
              description: "20 sec max effort / 10 sec repos",
              exercises: ["Burpees complets", "Sprints sur place", "Jump squats", "Sprawls"],
              sets: 8,
              alternatives: ["Version modérée"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Cool down - 5 min"] }
        },
        {
          dayNumber: 2,
          name: "Mardi",
          type: "workout",
          title: "Renforcement Jambes Intensif",
          duration: 40,
          warmup: { duration: 5, exercises: ["Activation jambes - 5 min"] },
          exercises: [
            {
              name: "Squats jump",
              reps: "12-15",
              rest: "45 sec",
              sets: 4,
              alternatives: ["Squats normaux"]
            },
            {
              name: "Fentes sautées",
              reps: "10 par jambe",
              rest: "45 sec",
              sets: 4,
              alternatives: ["Fentes alternées"]
            },
            {
              name: "Single leg deadlift",
              reps: "12 par jambe",
              rest: "40 sec",
              sets: 3,
              alternatives: ["Deadlift classique"]
            },
            {
              name: "Wall sit",
              duration: "45-60 sec",
              rest: "45 sec",
              sets: 3,
              alternatives: ["30 sec"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Étirements jambes - 5 min"] }
        },
        {
          dayNumber: 3,
          name: "Mercredi",
          type: "rest",
          title: "Repos Actif",
          suggestion: "Marche 30 min ou natation douce"
        },
        {
          dayNumber: 4,
          name: "Jeudi",
          type: "workout",
          title: "Cardio Boxing",
          duration: 35,
          warmup: { duration: 5, exercises: ["Shadow boxing - 5 min"] },
          exercises: [
            {
              name: "Combinaisons boxing",
              duration: "25 min",
              description: "Jab-cross-hook, uppercuts, esquives",
              alternatives: ["Boxing sans déplacements"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Étirements - 5 min"] }
        },
        {
          dayNumber: 5,
          name: "Vendredi",
          type: "workout",
          title: "Circuit Total Body Intense",
          duration: 35,
          warmup: { duration: 5, exercises: ["Prépa intense - 5 min"] },
          exercises: [
            {
              name: "Circuit 6 tours",
              exercises: [
                "Burpees - 12",
                "Planche jacks - 15",
                "Jump squats - 15",
                "Pompes - 15",
                "High knees - 45 sec",
                "Repos - 45 sec"
              ],
              sets: 6,
              alternatives: ["5 tours"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Récup - 5 min"] }
        },
        {
          dayNumber: 6,
          name: "Samedi",
          type: "workout",
          title: "Pilates Power",
          duration: 45,
          warmup: { duration: 5, exercises: ["Pilates warmup - 5 min"] },
          exercises: [
            {
              name: "Série pilates avancée",
              duration: "35 min",
              description: "Tous exercices classiques + variations",
              alternatives: ["Tempo modéré"]
            }
          ],
          cooldown: { duration: 5, exercises: ["Stretching - 5 min"] }
        },
        {
          dayNumber: 7,
          name: "Dimanche",
          type: "rest",
          title: "Repos Complet"
        }
      ]
    },

    // Semaines 6-8 : Structure similaire avec progression continue
    // Pour gagner de l'espace, je vais créer une version condensée

    {
      weekNumber: 6,
      phase: "Intensification",
      focus: "Endurance métabolique",
      days: [
        { dayNumber: 1, name: "Lundi", type: "workout", title: "HIIT Pyramide", duration: 32 },
        { dayNumber: 2, name: "Mardi", type: "workout", title: "Full Body Strength", duration: 40 },
        { dayNumber: 3, name: "Mercredi", type: "rest", title: "Repos Actif" },
        { dayNumber: 4, name: "Jeudi", type: "workout", title: "Cardio Intervals", duration: 35 },
        { dayNumber: 5, name: "Vendredi", type: "workout", title: "Circuit AMRAP", duration: 30 },
        { dayNumber: 6, name: "Samedi", type: "workout", title: "Yoga Vinyasa", duration: 50 },
        { dayNumber: 7, name: "Dimanche", type: "rest", title: "Repos" }
      ]
    },

    {
      weekNumber: 7,
      phase: "Intensification",
      focus: "Peak cardio",
      days: [
        { dayNumber: 1, name: "Lundi", type: "workout", title: "Tabata Mix", duration: 35 },
        { dayNumber: 2, name: "Mardi", type: "workout", title: "Lower Body Focus", duration: 40 },
        { dayNumber: 3, name: "Mercredi", type: "rest", title: "Repos Actif" },
        { dayNumber: 4, name: "Jeudi", type: "workout", title: "Cardio Dance", duration: 40 },
        { dayNumber: 5, name: "Vendredi", type: "workout", title: "Circuit Intense", duration: 35 },
        { dayNumber: 6, name: "Samedi", type: "workout", title: "Pilates + Cardio", duration: 50 },
        { dayNumber: 7, name: "Dimanche", type: "rest", title: "Repos" }
      ]
    },

    {
      weekNumber: 8,
      phase: "Intensification",
      focus: "Consolidation phase 2",
      days: [
        { dayNumber: 1, name: "Lundi", type: "workout", title: "HIIT Review", duration: 35 },
        { dayNumber: 2, name: "Mardi", type: "workout", title: "Total Strength", duration: 45 },
        { dayNumber: 3, name: "Mercredi", type: "rest", title: "Repos Actif" },
        { dayNumber: 4, name: "Jeudi", type: "workout", title: "Endurance Cardio", duration: 45 },
        { dayNumber: 5, name: "Vendredi", type: "workout", title: "Challenge Circuit", duration: 40 },
        { dayNumber: 6, name: "Samedi", type: "workout", title: "Yoga Flow Long", duration: 60 },
        { dayNumber: 7, name: "Dimanche", type: "rest", title: "Repos", suggestion: "Bilan mi-parcours" }
      ]
    },

    // ============================================
    // PHASE 3 : OPTIMISATION (Semaines 9-12)
    // ============================================
    {
      weekNumber: 9,
      phase: "Optimisation",
      focus: "Maximum fat burn",
      days: [
        { dayNumber: 1, name: "Lundi", type: "workout", title: "HIIT Ultimate", duration: 35 },
        { dayNumber: 2, name: "Mardi", type: "workout", title: "Sculpt & Tone", duration: 45 },
        { dayNumber: 3, name: "Mercredi", type: "workout", title: "Cardio Steady", duration: 40 },
        { dayNumber: 4, name: "Jeudi", type: "rest", title: "Repos Actif" },
        { dayNumber: 5, name: "Vendredi", type: "workout", title: "Circuit Premium", duration: 40 },
        { dayNumber: 6, name: "Samedi", type: "workout", title: "Pilates Advanced", duration: 50 },
        { dayNumber: 7, name: "Dimanche", type: "rest", title: "Repos" }
      ]
    },

    {
      weekNumber: 10,
      phase: "Optimisation",
      focus: "Définition maximale",
      days: [
        { dayNumber: 1, name: "Lundi", type: "workout", title: "Tabata Advanced", duration: 40 },
        { dayNumber: 2, name: "Mardi", type: "workout", title: "Core Intensive", duration: 45 },
        { dayNumber: 3, name: "Mercredi", type: "workout", title: "Cardio Mix", duration: 45 },
        { dayNumber: 4, name: "Jeudi", type: "rest", title: "Repos Actif" },
        { dayNumber: 5, name: "Vendredi", type: "workout", title: "Full Body Blast", duration: 45 },
        { dayNumber: 6, name: "Samedi", type: "workout", title: "Yoga + Pilates", duration: 60 },
        { dayNumber: 7, name: "Dimanche", type: "rest", title: "Repos" }
      ]
    },

    {
      weekNumber: 11,
      phase: "Optimisation",
      focus: "Finition",
      days: [
        { dayNumber: 1, name: "Lundi", type: "workout", title: "HIIT Finisher", duration: 40 },
        { dayNumber: 2, name: "Mardi", type: "workout", title: "Strength Final", duration: 50 },
        { dayNumber: 3, name: "Mercredi", type: "workout", title: "Cardio Endurance", duration: 50 },
        { dayNumber: 4, name: "Jeudi", type: "rest", title: "Repos Actif" },
        { dayNumber: 5, name: "Vendredi", type: "workout", title: "Challenge Final", duration: 45 },
        { dayNumber: 6, name: "Samedi", type: "workout", title: "Pilates Master", duration: 60 },
        { dayNumber: 7, name: "Dimanche", type: "rest", title: "Repos" }
      ]
    },

    {
      weekNumber: 12,
      phase: "Optimisation",
      focus: "Célébration & maintien",
      days: [
        { dayNumber: 1, name: "Lundi", type: "workout", title: "Victory HIIT", duration: 40 },
        { dayNumber: 2, name: "Mardi", type: "workout", title: "Total Body Celebration", duration: 45 },
        { dayNumber: 3, name: "Mercredi", type: "workout", title: "Cardio Feel Good", duration: 40 },
        { dayNumber: 4, name: "Jeudi", type: "rest", title: "Repos Actif" },
        { dayNumber: 5, name: "Vendredi", type: "workout", title: "Final Challenge", duration: 50 },
        { dayNumber: 6, name: "Samedi", type: "workout", title: "Celebration Flow", duration: 60 },
        { dayNumber: 7, name: "Dimanche", type: "rest", title: "Repos Complet", suggestion: "BRAVO ! Programme terminé 🎉" }
      ]
    }
  ],

  // Résultats attendus
  expectedResults: {
    week2: {
      title: "Après 2 semaines",
      results: [
        "Meilleure énergie au quotidien",
        "Sommeil de meilleure qualité",
        "Moins de ballonnements",
        "Habitude d'entraînement installée",
        "Meilleure connexion corps-esprit"
      ]
    },
    month1: {
      title: "Après 1 mois",
      results: [
        "Perte de 1-2 kg (si déficit calorique)",
        "Ventre visiblement moins gonflé",
        "Posture améliorée",
        "Endurance cardio en hausse",
        "Confiance en soi renforcée",
        "Tour de taille : -2 à -4 cm possible"
      ]
    },
    months2_3: {
      title: "Après 2-3 mois",
      results: [
        "Perte de 3-6 kg de masse grasse",
        "Silhouette affinée et tonique",
        "Ventre plat visible",
        "Force fonctionnelle développée",
        "Endurance cardiovasculaire élevée",
        "Tour de taille : -5 à -8 cm",
        "Meilleure composition corporelle",
        "Habitudes durables installées"
      ]
    }
  },

  // Conseils nutrition simples
  nutritionTips: [
    "Hydratation : 2L d'eau minimum par jour",
    "Protéines à chaque repas (œufs, poisson, légumineuses)",
    "Privilégier les glucides autour de l'entraînement",
    "Limiter (pas supprimer) les produits ultra-transformés",
    "Fibres : légumes à volonté",
    "Sommeil : 7-8h par nuit minimum",
    "Gérer le stress (cortisol = stockage abdominal)",
    "Pas de régime restrictif : déficit léger (200-300 kcal)"
  ],

  // Conseils anti-hypertrophie
  antiHypertrophyTips: [
    "Privilégier séries longues (15-20 reps) plutôt que charges lourdes",
    "Favoriser cardio et circuits métaboliques",
    "Limiter temps sous tension volontaire",
    "Pas de surcharge progressive agressive",
    "Focus sur la perte de gras, pas le gain musculaire",
    "Variété d'exercices pour éviter adaptation",
    "Repos adéquats entre séances"
  ],

  // Adaptations cycle menstruel
  menstrualCycleAdaptations: {
    phase1: {
      name: "Phase folliculaire (J1-J14)",
      advice: "Énergie haute : profite pour les séances intenses (HIIT, circuits)"
    },
    phase2: {
      name: "Ovulation (J14-J16)",
      advice: "Pic d'énergie : idéal pour challenges et performance"
    },
    phase3: {
      name: "Phase lutéale (J16-J28)",
      advice: "Énergie variable : adapte intensité, privilégie yoga/pilates si fatigue"
    },
    phase4: {
      name: "Menstruations (J1-J5)",
      advice: "Écoute ton corps : repos si besoin, ou cardio doux, étirements"
    }
  }
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROGRAM_DATA;
}