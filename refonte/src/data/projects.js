// données reprises telles quelles de script.js (site actuel)
export const saeProjects = [
    {
        "title": "Installation de poste",
        "team": [
            "Rafaël Hocquel"
        ],
        "favorite": true,
        "description": "Configuration d'une machine virtuelle Lubuntu optimisée (8 Go) pour développer.",
        "analyse": {
            "cahier": "Créer un environnement de développement complet sur une machine virtuelle sous Lubuntu (LXQt) en respectant une contrainte stricte de 8 Go d'espace disque maximum.",
            "resultats": "Intégration d'un stack complet (Java, Git, VS Code) validée par la réussite du script de test bash. Consommation disque maîtrisée.",
            "competences": [
                "Administration Système",
                "Optimisation logicielle",
                "Analyse du besoin"
            ],
            "outils": [
                "Linux (Lubuntu)",
                "Bash",
                "Machine Virtuelle"
            ]
        },
        "image": "assets/img/vm-install.png",
        "gallery": [
            "assets/img/vm-install.png"
        ],
        "report": "#",
        "tags": [
            "Linux",
            "Bash",
            "Virtual Machine"
        ],
        "link": "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_butinformatique-administrationsystaeyme-clojure-ugcPost-7391106933803438081-mx4s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung",
        "linkLabel": "Voir le post LinkedIn"
    },
    {
        "title": "Pixel IUT War",
        "team": [],
        "favorite": true,
        "description": "Création du client web d'une application collaborative (guerre des pixels) avec synchronisation continue d'une grille de 10 000 pixels.",
        "analyse": {
            "cahier": "Développer le client JavaScript d'un jeu multijoueur. Gérer l'authentification par UID, le système de factions, la coloration de la grille et les restrictions temporelles (cooldown) en dialoguant avec une API REST.",
            "resultats": "Interface fluide sans reflow massif grâce à l'optimisation du DOM (DocumentFragment). Communications asynchrones non-bloquantes (Fetch API, async/await). Des évolutions vers les WebSockets et le LocalStorage ont été modélisées.",
            "competences": [
                "JavaScript Vanilla (ES6+)",
                "Programmation Asynchrone",
                "Optimisation du DOM",
                "Manipulation de structures de données"
            ],
            "outils": [
                "Fetch API",
                "DocumentFragment",
                "Méthodes Array (.flat, .filter)"
            ]
        },
        "image": "assets/img/js2.png",
        "gallery": [
            "assets/img/js1.png"
        ],
        "report": "#",
        "tags": [
            "JavaScript",
            "API REST",
            "Front-End"
        ],
        "link": "https://github.com/zakksbr/pixelWar",
        "linkLabel": "Code Source / GitHub"
    },
    {
        "title": "Installation de Services Réseaux",
        "team": [
            "Rafaël Hocquel"
        ],
        "favorite": true,
        "description": "Déploiement d'une infrastructure réseau virtuelle sécurisée et intégration de services collaboratifs (Nextcloud & OnlyOffice).",
        "analyse": {
            "cahier": "Simuler et configurer un environnement réseau professionnel avec deux sous-réseaux isolés (Client LAN et Server LAN) reliés par un routeur central. Déployer une suite collaborative auto-hébergée complète.",
            "resultats": "Routage inter-réseaux (IP forwarding) et persistance des configurations IP assurés. Sécurisation totale des flux via la génération de certificats TLS (HTTPS) et la mise en place d'une authentification double facteur (TOTP).",
            "competences": [
                "Administration Système (Linux)",
                "Routage Réseau",
                "Sécurité (TLS/HTTPS, 2FA)",
                "Déploiement de Services (Snap)"
            ],
            "outils": [
                "NEmu",
                "Nextcloud",
                "OnlyOffice",
                "Bash/Shell"
            ]
        },
        "image": "assets/img/res1.png",
        "gallery": [
            "assets/img/res2.png",
            "assets/img/res3.png"
        ],
        "report": "#",
        "tags": [
            "SysAdmin",
            "Réseau",
            "DevOps"
        ],
        "link": "https://github.com/zakksbr/installation-services-reseau/wiki/2.3NetworkInstallation",
        "linkLabel": "Voir le wiki"
    },
    {
        "title": "Coloration de graphes",
        "team": [
            "Thomas Lableigne"
        ],
        "favorite": true,
        "description": "Développement de trois algorithmes de coloration (Welsh & Powell, 5-coloration, 6-coloration).",
        "analyse": {
            "cahier": "Implémenter l'interface IGraph et programmer trois algorithmes de coloration (Welsh et Powell, 6-coloration et 5-coloration récursive pour graphes planaires).",
            "resultats": "Création d'une structure optimisée par liste d'adjacence (HashMap) avec une complexité en O(N+M). Algorithmes validés par des tests unitaires sous JUnit.",
            "competences": [
                "Développement orienté Objet",
                "Théorie des Graphes",
                "Analyse de Complexité",
                "Tests Unitaires"
            ],
            "outils": [
                "Java",
                "JUnit",
                "NetBeans",
                "UML"
            ]
        },
        "image": "assets/img/sae-graphes1.png",
        "gallery": [
            "assets/img/sae-graphes2.png",
            "assets/img/sae-graphes3.png"
        ],
        "tags": [
            "Java",
            "Algorithmique",
            "Graphes"
        ],
        "link": "#",
        "linkLabel": "Code Source / GitHub"
    },
    {
        "title": "Labyrinthe",
        "team": [],
        "favorite": false,
        "wip": false,
        "description": "Jeu de labyrinthe multi-étages en Java/JavaFX, développé seul : héros piloté au clavier, monstres autonomes et déplacements fluides.",
        "analyse": {
            "cahier": "Concevoir seul, en deux semaines, un jeu de labyrinthe complet en Java/JavaFX pour remobiliser la programmation orientée objet. Contraintes : implémenter des interfaces imposées sans les modifier, valider les objectifs dans l'ordre et livrer un programme sans erreur ni avertissement sur les postes de l'IUT.",
            "resultats": "Labyrinthe sur plusieurs étages chargé depuis des fichiers texte, héros jouable au clavier et monstres autonomes grâce au polymorphisme. La logique du jeu est séparée du rendu, ce qui donne un déplacement fluide au pixel près. Plus de 50 commits sur GitLab, projet validé sur les postes de l'IUT.",
            "competences": [
                "Programmation orientée objet",
                "Interface graphique événementielle",
                "Débogage",
                "Versionnage Git"
            ],
            "outils": [
                "Java",
                "JavaFX",
                "Maven",
                "Git / GitLab"
            ]
        },
        "image": "assets/img/labyrinthe.jpg",
        "gallery": [
            "assets/img/labyrinthe-2.jpg"
        ],
        "report": "#",
        "tags": [
            "Java",
            "JavaFX",
            "POO"
        ],
        "link": "#",
        "linkLabel": "Code Source / GitHub"
    },
    {
        "title": "Capteurs : statistiques de température",
        "team": [
            "Rafaël Hocquel"
        ],
        "favorite": false,
        "wip": false,
        "description": "Outil en ligne de commande écrit en C qui analyse des relevés de capteurs de température (fichier JSON ou URL) et génère un rapport CSV.",
        "analyse": {
            "cahier": "Compléter en binôme un analyseur de capteurs en C : calcul des statistiques, série de mesures en mémoire dynamique, export CSV et programme principal. Contraintes : norme C11 compilée sans aucun warning (-Wall -Wextra -Wpedantic), modules réseau et JSON fournis à ne pas modifier, historique Git évalué.",
            "resultats": "Minimum, maximum, moyenne et écart intérieur/extérieur calculés, export CSV et gestion complète des options en ligne de commande. Tests unitaires et 12 scénarios en ligne de commande validés. Aucune fuite mémoire selon Valgrind (1 422 allocations, 1 422 libérations).",
            "competences": [
                "Gestion dynamique de la mémoire",
                "Pointeurs et structures",
                "Compilation séparée (Makefile)",
                "Arguments en ligne de commande",
                "Travail en binôme"
            ],
            "outils": [
                "C11 / gcc",
                "Make",
                "Valgrind",
                "cppcheck",
                "Git / GitLab"
            ]
        },
        "image": "assets/img/capteurs-terminal.jpg",
        "gallery": [],
        "report": "#",
        "tags": [
            "C",
            "Makefile",
            "Valgrind"
        ],
        "link": "#",
        "linkLabel": "Code Source / GitHub"
    },
    {
        "title": "Comparaisons d'algorithmes",
        "team": [
            "Valentin Gues"
        ],
        "description": "Programmation des fonctionnalités d'un jeu de plateau et conception de deux Intelligence Artificielle capable de jouer contre ou à la place de l'utilisateur",
        "analyse": {
            "cahier": "Coder les règles d'un jeu de plateau (plantation d'un arbre, coupes, vitalité) et développement de deux Intelligences Artificielles capable de jouer, la première avec un algorithme glouton et une deuxième visionnaire capable d'anticiper les conséquences de ses actions sur le long terme.",
            "resultats": "Tactique de clonage de plateau opérationnelle pour anticiper les scores réels. Zéro disqualification grâce à un algorithme contre les coups illégaux",
            "competences": [
                "Java",
                "Intelligence Artificielle",
                "Développement de tests",
                "Algorithmie"
            ],
            "outils": [
                "Tests unitaires",
                "Simulation algorithmique",
                "Java"
            ]
        },
        "image": "assets/img/biosphere.png",
        "gallery": [
            "assets/img/biosphere.png"
        ],
        "report": "#",
        "tags": [
            "Java",
            "Algorithmie et Comparaison"
        ],
        "link": "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_java-intelligenceartificielle-algorithmique-share-7423392852463906817-jtZ3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung",
        "linkLabel": "Voir le post LinkedIn"
    },
    {
        "title": "Création de Base de données",
        "team": [
            "Kenzo Palmade"
        ],
        "favorite": true,
        "description": "Conception d'une Base de données pour une agence d'événements culturels fictive. Traduction du cahier des charges en contraintes.",
        "analyse": {
            "cahier": "Créer une base de données pour une agence événementielle fictive en traduisant des règles textuelles complexes (horaires, formats) pour éviter les incohérences de planning.",
            "resultats": "Scripts SQL robustes implémentés avec une gestion fine des contraintes. Insertion réussie d'un jeu de données réaliste.",
            "competences": [
                "Modélisation relationnelle",
                "SQL"
            ],
            "outils": [
                "SQL",
                "Win'Design",
                "Contraintes CHECK/UNIQUE",
                "Schéma entités associations (MCD)"
            ]
        },
        "image": "assets/img/bdd.png",
        "gallery": [
            "assets/img/bdd.png"
        ],
        "report": "#",
        "tags": [
            "SQL",
            "Base de données"
        ],
        "link": "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_sqlserver-database-iutinformatique-ugcPost-7420940639481118720-z0sp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung",
        "linkLabel": "Voir le post LinkedIn"
    },
    {
        "title": "Recueil de besoin",
        "team": [],
        "favorite": true,
        "description": "Refactoring d'un site web legacy. Passage de tableaux à un CSS Grid (avec un Thème Windows XP).",
        "analyse": {
            "cahier": "Moderniser le code source du site web d'une entreprise fictive de PC Rétro, en abandonnant l'ancienne mise en page en tableaux.",
            "resultats": "Refonte validée en HTML5 sémantique. Amélioration de l'accessibilité et réduction de la taille du code source, avec une petite touche Windows XP.",
            "competences": [
                "Intégration web",
                "Refactoring",
                "Écoute du client"
            ],
            "outils": [
                "HTML5",
                "CSS Grid",
                "Design System"
            ]
        },
        "image": "assets/img/retro-pc.png",
        "gallery": [
            "assets/img/retro-pc.png",
            "assets/img/retro-pc1.png"
        ],
        "report": "#",
        "tags": [
            "HTML/CSS",
            "Web"
        ],
        "link": "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_webdevelopment-html5-css3-ugcPost-7417162829536890880-ARre?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung",
        "linkLabel": "Voir le post LinkedIn"
    },
    {
        "title": "Développement d'une application",
        "team": [
            "Walid Atro",
            "Mahdiullah Zahed"
        ],
        "description": "Application C# de gestion de personnages et simulateur de jeu de rôles avec architecture Orientée Objet intégrale.",
        "analyse": {
            "cahier": "Concevoir en équipe de 3 une application WinForms robuste traduisant des règles d'un jeu fictif.",
            "resultats": "Livrable, avec séparation Logique/IHM. Moteur de résolution des épreuves fictives validé par tests unitaires et interface ergonomique.",
            "competences": [
                "Programmation C#",
                "Conception UML",
                "Développement IHM",
                "Tests"
            ],
            "outils": [
                "Visual Studio / .NET",
                "WinForms",
                "Git"
            ]
        },
        "image": "assets/img/butopia.png",
        "gallery": [
            "assets/img/butopia.png"
        ],
        "report": "#",
        "tags": [
            "C#",
            ".NET",
            "Développement",
            "Git"
        ],
        "link": "#"
    },
    {
        "title": "Implémentation",
        "team": [],
        "description": "Programmation d'une station domotique en Java. Gestion de l'historique et des données.",
        "analyse": {
            "cahier": "Intégrer l'entièreté des fonctionnalités de gestion, de mise à jour des données météorologiques et de programmation du chauffage d'une station météo à partir d'un code incomplet.",
            "resultats": "Algorithme de décalage de tableaux implémenté. Intégrité des données garantie et saisie utilisateur sécurisée par boucle de contrôle.",
            "competences": [
                "Java",
                "Algorithmique",
                "Intégration des données"
            ],
            "outils": [
                "Boucle do...while",
                "Tableaux",
                "Conditions"
            ]
        },
        "image": "assets/img/odomo.png",
        "gallery": [
            "assets/img/odomo.png"
        ],
        "report": "#",
        "tags": [
            "Java",
            "Algorithmie"
        ],
        "link": "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_java-projet-domotique-ugcPost-7395203244312043521-TFbM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung",
        "linkLabel": "Voir le post LinkedIn"
    },
    {
        "title": "Environnement économique et écologique",
        "team": [
            "Thomas Lableigne",
            "Lucas Le Guennec",
            "Jeremy Cardoso",
            "Quentin Nguyen Pham"
        ],
        "description": "Analyse fonctionnelle et environnementale d'une entreprise locale face à une crise de crédibilité majeure (PESTEL & Porter).",
        "analyse": {
            "cahier": "En tant que Chef de Projet, coordonner une équipe de 5 personnes pour réaliser le diagnostic complet de l'entreprise Baillardran.",
            "resultats": "Cartographie des 6 fonctions de l'entreprise et réalisation des matrices PESTEL et Porter. Formulation d'une stratégie de reconstruction éthique axée sur la transparence pour contrer la chute de rentabilité.",
            "competences": [
                "Gestion de Projet",
                "Analyse Stratégique",
                "Management d'équipe"
            ],
            "outils": [
                "Outil PESTEL",
                "5 Forces de Porter",
                "Base de données Diane+"
            ]
        },
        "image": "assets/img/baillardran.png",
        "gallery": [
            "assets/img/baillardran.png"
        ],
        "report": "#",
        "tags": [
            "Gestion",
            "Analyse"
        ],
        "link": "#"
    },
    {
        "title": "Réalisation d'une mission confié par une organisation",
        "team": [
            "Rafael Peeters",
            "Antonin Carpentier",
            "Thomas Lableigne",
            "Ihor Tykhoniuk"
        ],
        "description": "Conception de la campagne de communication visuelle pour la Journée Portes Ouvertes du département informatique, puis organisation de celle-ci avec les autres étudiants bénévoles.",
        "analyse": {
            "cahier": "Élaborer une identité visuelle complète (affiches A1/A2, programmes, signalétique) respectant la charte graphique de l'Université.",
            "resultats": "Production de 3 versions d'affiches et d'un plan de signalétique complet pour les deux étages du bâtiment.",
            "competences": [
                "Communication Visuelle",
                "Gestion de Projet",
                "Travail d'équipe"
            ],
            "outils": [
                "Canva",
                "Appareil Photo",
                "Adobe Lightroom"
            ]
        },
        "image": "assets/img/mission.png",
        "gallery": [
            "assets/img/jpo1.png",
            "assets/img/jpo2.png",
            "assets/img/jpo3.png",
            "assets/img/jpo4.png",
            "assets/img/jpo5.png"
        ],
        "report": "#",
        "tags": [
            "Communication",
            "Organisation"
        ],
        "link": "#"
    }
];

export const persoProjects = [
    {
        "title": "Tableau de bord personnel",
        "description": "Projet en cours de conception : une page web affichée en continu sur un écran, qui montrera d'un coup d'œil la météo, les trains, les bus et tram, mes cours du jour, mes matchs et une fiche d'arbitrage.",
        "analyse": {
            "cahier": [
                { "label": "Contexte", "text": "Chaque matin je consulte une demi-douzaine de sources (appli SNCF, appli TBM, météo, ENT, site des officiels FFF, mes notes d'arbitrage). L'idée : tout réunir sur une seule page, lisible sans aucun clic sur un écran fixe de 16 pouces." },
                { "label": "Blocs prévus (V1)", "text": "météo de Lormont et Gradignan, 5 prochains trains depuis la gare de Bassens avec les retards, prochains passages du bus 60 et du tram A, cours du jour depuis l'export iCal de l'ENT, mes prochains matchs et une fiche d'arbitrage différente chaque heure parmi 30 rédigées par moi." },
                { "label": "Exigences", "text": "rafraîchissement automatique sans recharger la page, une source en panne ne bloque que son propre bloc, clés d'API et lien iCal jamais dans le code ni dans Git, réponses gardées en mémoire pour respecter les quotas des API, tests JUnit sur la logique métier." },
                { "label": "Stack", "text": "back en Java 21 / Spring Boot 3.3 (Maven), front en Angular 19, API Open-Meteo, SNCF (Navitia) et données temps réel TBM." },
                { "label": "Et ensuite", "text": "V1.1 : déploiement sur un mini PC transformé en serveur (Debian, Docker, Chromium en mode kiosque, réseau local uniquement). V2 : consommation électrique de ma chambre et une interface de saisie pour les fiches, matchs et tâches." },
                { "label": "Où j'en suis", "text": "cahier des charges V1 rédigé, diagrammes UML en cours." }
            ],
            "competences": [
                "Développement back-end Java",
                "Développement front-end Angular",
                "Consommation d'API REST",
                "Architecture par fonctionnalité",
                "Gestion de cache",
                "Tests unitaires"
            ],
            "outils": [
                "Java 21",
                "Spring Boot 3.3.5",
                "Maven",
                "Angular 19",
                "API SNCF (Navitia)",
                "Open-Meteo",
                "iCal (RFC 5545)",
                "JUnit"
            ]
        },
        "image": "assets/img/tableau-de-bord.png",
        "gallery": [],
        "report": "#",
        "tags": [
            "Java",
            "Spring Boot",
            "Angular",
            "API REST"
        ],
        "link": "#",
        "wip": true,
        "wipLabel": "En cours de développement"
    },
    {
        "title": "Réhabilitation d’un ordinateur obsolète",
        "favorite": true,
        "description": "Upgrade matériel et configuration d'un Triple Boot (Win 10/11, Ubuntu) sur un Alienware Area-51 R1 de 2010.",
        "analyse": {
            "cahier": "Rendre fonctionnelle une machine de 2010 pour du développement. Contraintes : Upgrade RAM/SSD, Triple Boot fonctionnel sur architecture Legacy/MBR, et boot rapide personnalisé via GRUB.",
            "resultats": "Temps de démarrage divisé par 4. Environnement de test multi-OS 100% stable et opérationnel. Machine sauvée de l'obsolescence pour un investissement de moins de 80€.",
            "competences": [
                "Maintenance Hardware",
                "Administration Système",
                "Gestion GRUB/MBR",
                "Troubleshooting"
            ],
            "outils": [
                "Rufus",
                "Terminal Linux (Nano)",
                "Composants (RAM/SSD)"
            ]
        },
        "image": "assets/img/alienware1.jpg",
        "gallery": [
            "assets/img/alienware2.jpg",
            "assets/img/alienware1.jpg",
            "assets/img/alienware.jpg"
        ],
        "report": "#",
        "tags": [
            "Hardware",
            "SysAdmin",
            "Triple Boot"
        ],
        "link": "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_iutdebordeaux-greenit-linux-activity-7429419448949784577-m7ho?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung",
        "linkLabel": "Voir le post LinkedIn"
    },
    {
        "title": "Assistant macOS (J.A.R.V.I.S.)",
        "wip": false,
        "description": "Assistant vocal hybride pilotant l'environnement de travail macOS (via AppleScript) et intégré à l'IA Gemini.",
        "analyse": {
            "cahier": "Développer un assistant capable de piloter physiquement macOS (écrans, apps) et de converser naturellement. Contraintes : mode Push-to-Talk pour la confidentialité.",
            "resultats": "Automatisation complète du déploiement du Workspace. Latence < 2s pour les requêtes Cloud et exécution système locale instantanée. Respect de la vie privée grâce à l'activation microphone à la demande.",
            "competences": [
                "Développement Python",
                "Intégration API Gemini",
                "Scripting AppleScript",
                "Conception d'Architecture"
            ],
            "outils": [
                "Python 3",
                "API Google Gemini",
                "AppleScript",
                "Shell"
            ]
        },
        "image": "assets/img/jarvis2.png",
        "gallery": [
            "assets/img/jarvis1.png",
            "assets/img/jarvis2.png"
        ],
        "report": "#",
        "tags": [
            "Python",
            "IA",
            "macOS"
        ],
        "link": "#"
    },
    {
        "title": "Déploiement de macOS via Hackintosh sur un PC",
        "wip": true,
        "description": "Installation native de macOS Bigsur sur une tour PC HP en contournant les sécurités matérielles et logicielles.",
        "analyse": {
            "cahier": "Déployer macOS sur un matériel non-Apple (HP, Intel). Contraintes : créer un environnement matériel virtuel sans modifier le système d'exploitation cible, grâce à une base GitHub.",
            "resultats": "Création d'un Bootloader (OpenCore) sur-mesure. Stabilité garantie avec un minimum de kexts (4 pilotes, 2 patchs). Contournement des sécurités HP (Hard Freezes, erreurs ACPI) et amorçage réussi du noyau XNU.",
            "competences": [
                "Administration Système",
                "Troubleshooting",
                "Architecture Hardware"
            ],
            "outils": [
                "OpenCore Bootloader",
                "ProperTree",
                "Terminal",
                "Scripts Python"
            ]
        },
        "image": "assets/img/hackintoch.jpg",
        "gallery": [
            "assets/img/hackintoch.jpg"
        ],
        "report": "#",
        "tags": [
            "SysAdmin",
            "Hardware",
            "macOS"
        ],
        "link": "#"
    },
    {
        "title": "Portfolio Professionnel",
        "description": "Conception et développement de mon portfolio pour valoriser mes projets et compétences.",
        "analyse": {
            "cahier": "Créer une plateforme fluide et performante avec le stack Vanilla (HTML5 CSS3 et JavaScript). Contraintes: présenter l'ensemble des projets avec un site responsive et une gestion dynamique.",
            "resultats": "Projets clairs, et Navigation intuitive via des fenetres d'analyse. Maintenance simple grâce à une architecture de données centralisée en JavaScript.",
            "competences": [
                "Développement Front-End",
                "UI/UX Design",
                "JavaScript",
                "Versionnage Git"
            ],
            "outils": [
                "VS Code",
                "CSS Grid/Flexbox",
                "JavaScript",
                "Git/GitHub",
                "Astro",
                "Tailwind CSS",
                "D3.js"
            ]
        },
        "image": "assets/img/portfolio1.png",
        "gallery": [
            "assets/img/portfolio.png",
            "assets/img/portfolio1.png"
        ],
        "report": "#",
        "tags": [
            "Web",
            "Design",
            "Vanilla JS",
            "Astro",
            "Tailwind CSS"
        ],
        "link": "https://github.com/zakksbr/portfolio-zak.git",
        "linkLabel": "Voir le code sur GitHub",
        "versions": [
            {
                "label": "Version 2",
                "current": true,
                "text": "Refonte complète dans le thème macOS (fenêtres, dock, barre de menus) en gardant mes couleurs.",
                "stack": [
                    "Astro",
                    "Tailwind CSS",
                    "JavaScript",
                    "D3.js"
                ]
            },
            {
                "label": "Version 1",
                "current": false,
                "text": "Première version du site, codée sans framework.",
                "stack": [
                    "HTML5",
                    "CSS3",
                    "JavaScript"
                ]
            }
        ],
        "archive": {
            "src": "/archive/v1/index.html",
            "title": "Explorer la version 1",
            "text": "La vraie page de l'ancien site, figée telle qu'elle était en ligne. Tu peux cliquer et naviguer dedans."
        }
    }
];
