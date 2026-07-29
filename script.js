// ici je stocke toutes les données des projets.
// les projets que j'ai fait à l'iut, puis les perso
const saeProjects = [
    
    {
        title: "Installation de poste",
        favorite: true,
        description: "Configuration d'une machine virtuelle Lubuntu optimisée (8 Go) pour développer.",
        analyse: {
            cahier: "Créer un environnement de développement complet sur une machine virtuelle sous Lubuntu (LXQt) en respectant une contrainte stricte de 8 Go d'espace disque maximum.",
            resultats: "Intégration d'un stack complet (Java, Git, VS Code) validée par la réussite du script de test bash. Consommation disque maîtrisée.",
            competences: ["Administration Système", "Optimisation logicielle", "Analyse du besoin"],
            outils: ["Linux (Lubuntu)", "Bash", "Machine Virtuelle"]
        },
        image: "assets/img/vm-install.png",
        gallery: ["assets/img/vm-install.png"],
        report: "#",
        tags: ["Linux", "Bash", "Virtual Machine"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_butinformatique-administrationsystaeyme-clojure-ugcPost-7391106933803438081-mx4s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
        linkLabel: "Voir le post LinkedIn"
    },


    {
        title: "Pixel IUT War",
        favorite: true,
        description: "Création du client web d'une application collaborative (guerre des pixels) avec synchronisation continue d'une grille de 10 000 pixels.",
        analyse: {
            cahier: "Développer le client JavaScript d'un jeu multijoueur. Gérer l'authentification par UID, le système de factions, la coloration de la grille et les restrictions temporelles (cooldown) en dialoguant avec une API REST.",
            resultats: "Interface fluide sans reflow massif grâce à l'optimisation du DOM (DocumentFragment). Communications asynchrones non-bloquantes (Fetch API, async/await). Des évolutions vers les WebSockets et le LocalStorage ont été modélisées.",
            competences: ["JavaScript Vanilla (ES6+)", "Programmation Asynchrone", "Optimisation du DOM", "Manipulation de structures de données"],
            outils: ["Fetch API", "DocumentFragment", "Méthodes Array (.flat, .filter)"]
        },
        image: "assets/img/js2.png",
        gallery: [
            "assets/img/js1.png"
        ],
        report: "#",
        tags: ["JavaScript", "API REST", "Front-End"],
        link: "https://github.com/zakksbr/pixelWar",
        linkLabel: "Code Source / GitHub"
    },


    {
        title: "Installation de Services Réseaux",
        favorite: true,
        description: "Déploiement d'une infrastructure réseau virtuelle sécurisée et intégration de services collaboratifs (Nextcloud & OnlyOffice).",
        analyse: {
            cahier: "Simuler et configurer un environnement réseau professionnel avec deux sous-réseaux isolés (Client LAN et Server LAN) reliés par un routeur central. Déployer une suite collaborative auto-hébergée complète.",
            resultats: "Routage inter-réseaux (IP forwarding) et persistance des configurations IP assurés. Sécurisation totale des flux via la génération de certificats TLS (HTTPS) et la mise en place d'une authentification double facteur (TOTP).",
            competences: ["Administration Système (Linux)", "Routage Réseau", "Sécurité (TLS/HTTPS, 2FA)", "Déploiement de Services (Snap)"],
            outils: ["NEmu", "Nextcloud", "OnlyOffice", "Bash/Shell"]
        },
        image: "assets/img/res1.png",
        gallery: [
            "assets/img/res2.png",
            "assets/img/res3.png"
        ],
        report: "#",
        tags: ["SysAdmin", "Réseau", "DevOps"],
        link: "https://github.com/zakksbr/installation-services-reseau/wiki/2.3NetworkInstallation",
        linkLabel: "Voir le wiki"
    },

    {
        title: "Coloration de graphes",
        favorite: true,
        description: "Développement de trois algorithmes de coloration (Welsh & Powell, 5-coloration, 6-coloration).",
        analyse: {
            cahier: "Implémenter l'interface IGraph et programmer trois algorithmes de coloration (Welsh et Powell, 6-coloration et 5-coloration récursive pour graphes planaires).",
            resultats: "Création d'une structure optimisée par liste d'adjacence (HashMap) avec une complexité en O(N+M). Algorithmes validés par des tests unitaires sous JUnit.",
            competences: ["Développement orienté Objet", "Théorie des Graphes", "Analyse de Complexité", "Tests Unitaires"],
            outils: ["Java", "JUnit", "NetBeans", "UML"]
        },
        image: "assets/img/sae-graphes1.png",
        gallery: [
            
            "assets/img/sae-graphes2.png",
            "assets/img/sae-graphes3.png"
        ],
        
        tags: ["Java", "Algorithmique", "Graphes"],
        link: "#",
        linkLabel: "Code Source / GitHub"
    },
    
    {
        title: "Comparaisons d'algorithmes",
        description: "Programmation des fonctionnalités d'un jeu de plateau et conception de deux Intelligence Artificielle capable de jouer contre ou à la place de l'utilisateur",
        analyse: {
            cahier: "Coder les règles d'un jeu de plateau (plantation d'un arbre, coupes, vitalité) et développement de deux Intelligences Artificielles capable de jouer, la première avec un algorithme glouton et une deuxième visionnaire capable d'anticiper les conséquences de ses actions sur le long terme.",
            resultats: "Tactique de clonage de plateau opérationnelle pour anticiper les scores réels. Zéro disqualification grâce à un algorithme contre les coups illégaux",
            competences: ["Java", "Intelligence Artificielle", "Développement de tests", "Algorithmie"],
            outils: ["Tests unitaires", "Simulation algorithmique", "Java"]
        },
        image: "assets/img/biosphere.png",
        gallery: ["assets/img/biosphere.png"],
        report: "#",
        tags: ["Java", "Algorithmie et Comparaison"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_java-intelligenceartificielle-algorithmique-share-7423392852463906817-jtZ3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
        linkLabel: "Voir le post LinkedIn"
    },
    
    {
        title: "Création de Base de données",
        favorite: true,
        description: "Conception d'une Base de données pour une agence d'événements culturels fictive. Traduction du cahier des charges en contraintes.",
        analyse: {
            cahier: "Créer une base de données pour une agence événementielle fictive en traduisant des règles textuelles complexes (horaires, formats) pour éviter les incohérences de planning.",
            resultats: "Scripts SQL robustes implémentés avec une gestion fine des contraintes. Insertion réussie d'un jeu de données réaliste.",
            competences: ["Modélisation relationnelle", "SQL"],
            outils: ["SQL", "Win'Design", "Contraintes CHECK/UNIQUE", "Schéma entités associations (MCD)"]
        },
        image: "assets/img/bdd.png",
        gallery: ["assets/img/bdd.png"],
        report: "#",
        tags: ["SQL", "Base de données"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_sqlserver-database-iutinformatique-ugcPost-7420940639481118720-z0sp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
        linkLabel: "Voir le post LinkedIn"
    },
    {
        title: "Recueil de besoin",
        favorite: true,
        description: "Refactoring d'un site web legacy. Passage de tableaux à un CSS Grid (avec un Thème Windows XP).",
        analyse: {
            cahier: "Moderniser le code source du site web d'une entreprise fictive de PC Rétro, en abandonnant l'ancienne mise en page en tableaux.",
            resultats: "Refonte validée en HTML5 sémantique. Amélioration de l'accessibilité et réduction de la taille du code source, avec une petite touche Windows XP.",
            competences: ["Intégration web", "Refactoring", "Écoute du client"],
            outils: ["HTML5", "CSS Grid", "Design System"]
        },
        image: "assets/img/retro-pc.png",
        gallery: [
            "assets/img/retro-pc.png",
            "assets/img/retro-pc1.png"
        ],
        report: "#",
        tags: ["HTML/CSS", "Web"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_webdevelopment-html5-css3-ugcPost-7417162829536890880-ARre?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
        linkLabel: "Voir le post LinkedIn"
    },


    {
        title: "Développement d'une application",
        description: "Application C# de gestion de personnages et simulateur de jeu de rôles avec architecture Orientée Objet intégrale.",
        analyse: {
            cahier: "Concevoir en équipe de 3 une application WinForms robuste traduisant des règles d'un jeu fictif.",
            resultats: "Livrable, avec séparation Logique/IHM. Moteur de résolution des épreuves fictives validé par tests unitaires et interface ergonomique.",
            competences: ["Programmation C#", "Conception UML", "Développement IHM", "Tests"],
            outils: ["Visual Studio / .NET", "WinForms", "Git"]
        },
        image: "assets/img/butopia.png",
        gallery: ["assets/img/butopia.png"],
        report: "#",
        tags: ["C#", ".NET", "Développement", "Git"],
        link: "#"
    },
    

    {
        title: "Implémentation",
        description: "Programmation d'une station domotique en Java. Gestion de l'historique et des données.",
        analyse: {
            cahier: "Intégrer l'entièreté des fonctionnalités de gestion, de mise à jour des données météorologiques et de programmation du chauffage d'une station météo à partir d'un code incomplet.",
            resultats: "Algorithme de décalage de tableaux implémenté. Intégrité des données garantie et saisie utilisateur sécurisée par boucle de contrôle.",
            competences: ["Java", "Algorithmique", "Intégration des données"],
            outils: ["Boucle do...while", "Tableaux", "Conditions"]
        },
        image: "assets/img/odomo.png",
        gallery: ["assets/img/odomo.png"], 
        report: "#",
        tags: ["Java", "Algorithmie"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_java-projet-domotique-ugcPost-7395203244312043521-TFbM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
        linkLabel: "Voir le post LinkedIn"
    },

    {
        title: "Environnement économique et écologique",
        description: "Analyse fonctionnelle et environnementale d'une entreprise locale face à une crise de crédibilité majeure (PESTEL & Porter).",
        analyse: {
            cahier: "En tant que Chef de Projet, coordonner une équipe de 5 personnes pour réaliser le diagnostic complet de l'entreprise Baillardran.",
            resultats: "Cartographie des 6 fonctions de l'entreprise et réalisation des matrices PESTEL et Porter. Formulation d'une stratégie de reconstruction éthique axée sur la transparence pour contrer la chute de rentabilité.",
            competences: ["Gestion de Projet", "Analyse Stratégique", "Management d'équipe"],
            outils: ["Outil PESTEL", "5 Forces de Porter", "Base de données Diane+"]
        },
        image: "assets/img/baillardran.png",
        gallery: ["assets/img/baillardran.png"],
        report: "#",
        tags: ["Gestion", "Analyse"],
        link: "#"
    },
    {
        title: "Réalisation d'une mission confié par une organisation",
        description: "Conception de la campagne de communication visuelle pour la Journée Portes Ouvertes du département informatique, puis organisation de celle-ci avec les autres étudiants bénévoles.",
        analyse: {
            cahier: "Élaborer une identité visuelle complète (affiches A1/A2, programmes, signalétique) respectant la charte graphique de l'Université.",
            resultats: "Production de 3 versions d'affiches et d'un plan de signalétique complet pour les deux étages du bâtiment.",
            competences: ["Communication Visuelle", "Gestion de Projet", "Travail d'équipe"],
            outils: ["Canva", "Appareil Photo", "Adobe Lightroom"]
        },
        image: "assets/img/mission.png",
        gallery: [
            "assets/img/jpo1.png",
            "assets/img/jpo2.png",
            "assets/img/jpo3.png",
            "assets/img/jpo4.png",
            "assets/img/jpo5.png"
        ],
        report: "#",
        tags: ["Communication", "Organisation"],
        link: "#"
    }
    

    

];

// et ici les projets perso pour montrer ce que je bidouille de mon côté
const persoProjects = [
    {
        title: "Réhabilitation d’un ordinateur obsolète",
        favorite: true,
        description: "Upgrade matériel et configuration d'un Triple Boot (Win 10/11, Ubuntu) sur un Alienware Area-51 R1 de 2010.",
        analyse: {
            cahier: "Rendre fonctionnelle une machine de 2010 pour du développement. Contraintes : Upgrade RAM/SSD, Triple Boot fonctionnel sur architecture Legacy/MBR, et boot rapide personnalisé via GRUB.",
            resultats: "Temps de démarrage divisé par 4. Environnement de test multi-OS 100% stable et opérationnel. Machine sauvée de l'obsolescence pour un investissement de moins de 80€.",
            competences: ["Maintenance Hardware", "Administration Système", "Gestion GRUB/MBR", "Troubleshooting"],
            outils: ["Rufus", "Terminal Linux (Nano)", "Composants (RAM/SSD)"]
        },
        image: "assets/img/alienware1.jpg", 
        gallery: [
            "assets/img/alienware2.jpg",
            "assets/img/alienware1.jpg",
            "assets/img/alienware.jpg"
        ],
        report: "#", 
        tags: ["Hardware", "SysAdmin", "Triple Boot"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_iutdebordeaux-greenit-linux-activity-7429419448949784577-m7ho?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung",
        linkLabel: "Voir le post LinkedIn" 
    },
    {
        title: "Assistant macOS (J.A.R.V.I.S.)" ,       
        wip: false,
        description: "Assistant vocal hybride pilotant l'environnement de travail macOS (via AppleScript) et intégré à l'IA Gemini.",
        analyse: {
            cahier: "Développer un assistant capable de piloter physiquement macOS (écrans, apps) et de converser naturellement. Contraintes : mode Push-to-Talk pour la confidentialité.",
            resultats: "Automatisation complète du déploiement du Workspace. Latence < 2s pour les requêtes Cloud et exécution système locale instantanée. Respect de la vie privée grâce à l'activation microphone à la demande.",
            competences: ["Développement Python", "Intégration API Gemini", "Scripting AppleScript", "Conception d'Architecture"],
            outils: ["Python 3", "API Google Gemini", "AppleScript", "Shell"]
        },
        image: "assets/img/jarvis2.png", 
        gallery: ["assets/img/jarvis1.png", "assets/img/jarvis2.png"],
        report: "#", 
        tags: ["Python", "IA", "macOS"],
        link: "#" 
    },
    {       
        title: "Déploiement de macOS via Hackintosh sur un PC",
        wip: true,
        description: "Installation native de macOS Bigsur sur une tour PC HP en contournant les sécurités matérielles et logicielles.",
        analyse: {
            cahier: "Déployer macOS sur un matériel non-Apple (HP, Intel). Contraintes : créer un environnement matériel virtuel sans modifier le système d'exploitation cible, grâce à une base GitHub.",
            resultats: "Création d'un Bootloader (OpenCore) sur-mesure. Stabilité garantie avec un minimum de kexts (4 pilotes, 2 patchs). Contournement des sécurités HP (Hard Freezes, erreurs ACPI) et amorçage réussi du noyau XNU.",
            competences: ["Administration Système", "Troubleshooting", "Architecture Hardware"], 
            outils: ["OpenCore Bootloader", "ProperTree", "Terminal", "Scripts Python"]
        },
        image: "assets/img/hackintoch.jpg", 
        gallery: ["assets/img/hackintoch.jpg"],
        report: "#", 
        tags: ["SysAdmin", "Hardware", "macOS"],
        link: "#" 
    },
    {
        title: "Portfolio Professionnel",
        description: "Conception et développement de mon portfolio pour valoriser mes projets et compétences.",
        analyse: {
            cahier: "Créer une plateforme fluide et performante avec le stack Vanilla (HTML5 CSS3 et JavaScript). Contraintes: présenter l'ensemble des projets avec un site responsive et une gestion dynamique.",
            resultats: "Projets clairs, et Navigation intuitive via des fenetres d'analyse. Maintenance simple grâce à une architecture de données centralisée en JavaScript.",
            competences: ["Développement Front-End", "UI/UX Design", "JavaScript", "Versionnage Git"],
            outils: ["VS Code", "CSS Grid/Flexbox", "JavaScript", "Git/GitHub"]
        },
        image: "assets/img/portfolio1.png",
        gallery: ["assets/img/portfolio.png", "assets/img/portfolio1.png"],
        report: "#", 
        tags: ["Web", "Design", "Vanilla JS"],
        link: "https://github.com/zakksbr/portfolio-zak.git",
        linkLabel: "Voir le code sur GitHub"
    }
];

// là je récupére les blocs de ma page html pour pouvoir injecter les projets dedans après
const saeContainer = document.getElementById('sae-container');
const persoContainer = document.getElementById('perso-container');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');



// cette fonction fabrique les petites cartes des projets et les affiche sur l'accueil
function createCards(projectsArray, container, typeStr) {
    if (!container) return; 
    container.innerHTML = "";
    
    projectsArray.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // on vérifie s'il y a des statuts particuliers pour afficher les bons petits badges
        let statusBadgesHTML = ""; 
        if (project.favorite) {
            statusBadgesHTML += `<span class="p-badge favorite">🧡 Coup de cœur</span>`;
        }
        if (project.wip) {
            statusBadgesHTML += `<span class="p-badge wip">⏳ En cours de finalisation</span>`;
        }
        if (statusBadgesHTML) {
            statusBadgesHTML = `<div class="project-badges">${statusBadgesHTML}</div>`;
        }

        // injection de tout le html de la carte
        card.innerHTML = `
            <div class="card-img-holder">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                ${statusBadgesHTML}
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <button class="btn btn-secondary btn-sm" onclick="openModal('${typeStr}', ${index})" style="margin-top:1rem; width:100%">Plus de détails</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// une fonction qui regroupe la création de toutes les cartes d'un coup
function loadProjects() {
    createCards(saeProjects, saeContainer, 'sae');
    createCards(persoProjects, persoContainer, 'perso');
}

// c'est ici que ça gère l'ouverture de la grande fenêtre quand on clique sur "plus de détails"
window.openModal = function(type, index) {
    // on check d'abord si c'est une saé ou perso pour piocher dans le bon tableau
    const project = (type === 'sae') ? saeProjects[index] : persoProjects[index];
    
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-image').src = project.image;
    
    // on injecte les textes dans les bonnes cases de la grille d'analyse
    document.getElementById('analysis-cahier-text').innerHTML = project.analyse.cahier;
    document.getElementById('analysis-resultats-text').innerHTML = project.analyse.resultats;
    document.getElementById('analysis-competences-list').innerHTML = project.analyse.competences.map(comp => `<li>${comp}</li>`).join('');
    document.getElementById('analysis-outils-list').innerHTML = project.analyse.outils.map(outil => `<li>${outil}</li>`).join('');
    
    // on gère l'affichage des boutons avec une sécurité (.trim()) pour ignorer les espaces invisibles
    const reportBtn = document.getElementById('modal-report');
    if (project.report && project.report.trim() !== "" && project.report.trim() !== "#") {
        reportBtn.href = project.report;
        reportBtn.style.display = "inline-block";
    } else {
        reportBtn.style.display = "none";
    }

    const repoBtn = document.getElementById('modal-repo');
    if (project.link && project.link.trim() !== "" && project.link.trim() !== "#") {
        repoBtn.href = project.link;
        repoBtn.innerText = project.linkLabel ? project.linkLabel : "Code Source / GitHub";
        repoBtn.style.display = "inline-block";
    } else {
        repoBtn.style.display = "none";
    }

    // on récupère et on affiche les petits tags sous le titre
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // gestion de la petite galerie d'images dans la modale
    const galleryContainer = document.getElementById('modal-gallery-grid');
    galleryContainer.innerHTML = ""; 
    
    // on regroupe l'image principale et celles de la galerie pour tout afficher ensemble en supprimant les doublons
    const allImages = [project.image, ...(project.gallery || [])];
    const uniqueImages = [...new Set(allImages)];

    if (uniqueImages.length > 0) {
        uniqueImages.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('gallery-img');
            // un clic sur une petite image la met en grand
            img.onclick = function() {
                document.getElementById('modal-image').src = this.src;
            };
            galleryContainer.appendChild(img);
        });
        document.querySelector('.modal-gallery').style.display = 'block'; 
    } else {
        document.querySelector('.modal-gallery').style.display = 'none'; 
    }

    // on affiche enfin la petite fenetre et on bloque le scroll en arrière-plan
    modal.classList.add('show'); 
    document.body.style.overflow = 'hidden'; 
}


// les déclencheurs

// pour fermer la petite fenetre avec la petite croix
closeBtn.onclick = function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; 
}

// ou pour la fermer en cliquant n'importe où dans le vide
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// très important, on attend que tout le html de la page soit bien chargé avant de lancer la création des projets
document.addEventListener('DOMContentLoaded', loadProjects);


// les animations
const observerOptions = {
    threshold: 0.1, // ça s'active quand 10% de l'élément apparaît à l'écran
    rootMargin: "0px 0px -50px 0px"
};

// on crée un observeur qui va surveiller l'apparition des éléments
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // on joue l'animation qu'une seule fois
        }
    });
}, observerOptions);

// on l'applique sur toutes nos sections et cartes
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.section-padding, .skill-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});


// gestion du switch entre les deux mondes (développeur et arbitre)

const switchBtn = document.getElementById('switch-world-btn')
const worldDev = document.getElementById('world-dev')
const worldReferee = document.getElementById('world-referee')
let isRefereeMode = false

if (switchBtn) {
    switchBtn.innerHTML = 'DÉCOUVRIR MON DEUXIÈME MÉTIER ⚽'
    switchBtn.addEventListener('click', () => {
        isRefereeMode = !isRefereeMode
        if (isRefereeMode) {
            document.body.classList.add('referee-mode')
            worldDev.style.display = 'none'
            worldReferee.style.display = 'block'
            switchBtn.innerHTML = 'RETOUR EN INFORMATIQUE 💻'
            document.body.style.backgroundColor = 'var(--bg-color)'
            
            document.querySelectorAll('#world-referee .reveal').forEach(el => {
                el.classList.add('active')
            })
            
            setTimeout(() => {
                worldReferee.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)

        } else {
            document.body.classList.remove('referee-mode')
            worldReferee.style.display = 'none'
            worldDev.style.display = 'block'
            switchBtn.innerHTML = 'DÉCOUVRIR MON DEUXIÈME MÉTIER ⚽'
            document.body.style.backgroundColor = 'var(--bg-color)'
            
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    })

}


// --- DONNÉES DES RETOURS D'ARBITRAGE ---
const feedbackData = [
    {
        // MATCH 1 (Bègles)
        team1: "BÈGLES",
        team2: "PAYS AUROSAIS",
        logo1: "assets/img/begles.png.webp",
        logo2: "assets/img/fcpa.png",
        date: "23/05/2026",
        category: "U17 D4",
        tutor: "GAGNAIRE Anthony",
        appreciation: "Très bon match dans l'ensemble. Condition physique + placement trop axiale et loin des fautes.",
        conseils: "Travail sur la condition physique et sur le placement.",
        evaluations: [
            {
                titre: "Condition Physique / Déplacements / Placements",
                criteres: [
                    { nom: "Échauffement", statut: "acquis" },
                    { nom: "Suivre l'évolution du jeu et capacité à reproduire les efforts", statut: "en-cours" },
                    { nom: "Utilisation des différentes courses", statut: "en-cours" },
                    { nom: "Occupation adaptée de l'aire de jeu", statut: "acquis" },
                    { nom: "Présence rapide sur faute importante ou conflit", statut: "acquis" },
                    { nom: "Placement sur coup d'envoi", statut: "acquis" },
                    { nom: "Placement coup de pied de but", statut: "acquis" },
                    { nom: "Placement sur pénalty", statut: "acquis" },
                    { nom: "Placement sur corner", statut: "en-cours" },
                    { nom: "Placement sur rentrée de touche", statut: "acquis" },
                    { nom: "Placement sur coups francs", statut: "acquis" }
                ]
            },
            {
                titre: "Compétences Techniques",
                criteres: [
                    { nom: "Application des lois du jeu", statut: "acquis" },
                    { nom: "Exécution des remises en jeu", statut: "acquis" },
                    { nom: "Détection des fautes", statut: "acquis" },
                    { nom: "Utilisation du sifflet", statut: "acquis" },
                    { nom: "Procédure des remplacements et blessés", statut: "acquis" },
                    { nom: "Notion de l'avantage", statut: "acquis" },
                    { nom: "Lisibilité des signalisations", statut: "acquis" },
                    { nom: "Procédure CF avec placement d'un mur", statut: "acquis" },
                    { nom: "Connaissance du hors-jeu", statut: "acquis" }
                ]
            },
            {
                titre: "Gestion Disciplinaire",
                criteres: [
                    { nom: "Gestion de la mise en garde (Forme/Méthode)", statut: "en-cours" },
                    { nom: "Gestion des sanctions disciplinaires", statut: "en-cours" },
                    { nom: "Autorité sur les acteurs du jeu", statut: "en-cours" }
                ]
            },
            {
                titre: "Attitude - Comportement",
                criteres: [
                    { nom: "Ponctualité (arrive à l'heure)", statut: "acquis" },
                    { nom: "Détenir tous les outils nécessaires", statut: "acquis" },
                    { nom: "Vérification du terrain", statut: "acquis" },
                    { nom: "Vérification des licences et équipements", statut: "acquis" },
                    { nom: "Consignes et collaboration avec AA", statut: "acquis" },
                    { nom: "Maîtrise de la feuille de match", statut: "acquis" },
                    { nom: "Relationnel avec les acteurs de la rencontre", statut: "acquis" },
                    { nom: "Relation Tuteur - Arbitre stagiaire", statut: "acquis" }
                ]
            }
        ]
    },
    {
        // MATCH 2 (St Loubès)
        team1: "ST LOUBÈS",
        team2: "ARSAC LE PIAN",
        logo1: "assets/img/loub.png", // À remplacer
        logo2: "assets/img/arsa.png", // À remplacer
        date: "15/03/2026",
        category: "U15 D3",
        tutor: "LAVOIE Gaëtan",
        appreciation: "+ Prépa d'avant match, Bon placement, Avantage, Parle aux joueurs.\n- Mise en garde 'Bien écarter le joueur', Pas accorder sifflet à la bouche.",
        conseils: "Aucun conseil prioritaire noté.",
        evaluations: [
            {
                titre: "Condition Physique / Déplacements / Placements",
                criteres: [
                    { nom: "Échauffement", statut: "en-cours" },
                    { nom: "Suivre l'évolution du jeu et capacité à reproduire les efforts", statut: "en-cours" },
                    { nom: "Utilisation des différentes courses", statut: "en-cours" },
                    { nom: "Occupation adaptée de l'aire de jeu", statut: "non-obs" },
                    { nom: "Présence rapide sur faute importante ou conflit", statut: "en-cours" },
                    { nom: "Placement sur coup d'envoi", statut: "acquis" },
                    { nom: "Placement coup de pied de but", statut: "acquis" },
                    { nom: "Placement sur pénalty", statut: "acquis" },
                    { nom: "Placement sur corner", statut: "en-cours" },
                    { nom: "Placement sur rentrée de touche", statut: "en-cours" },
                    { nom: "Placement sur coups francs", statut: "acquis" }
                ]
            },
            {
                titre: "Compétences Techniques",
                criteres: [
                    { nom: "Application des lois du jeu", statut: "en-cours" },
                    { nom: "Exécution des remises en jeu", statut: "acquis" },
                    { nom: "Détection des fautes", statut: "en-cours" },
                    { nom: "Utilisation du sifflet", statut: "en-cours" },
                    { nom: "Procédure des remplacements et blessés", statut: "en-cours" },
                    { nom: "Notion de l'avantage", statut: "acquis" },
                    { nom: "Lisibilité des signalisations", statut: "en-cours" },
                    { nom: "Procédure CF avec placement d'un mur", statut: "acquis" },
                    { nom: "Connaissance du hors-jeu", statut: "acquis" }
                ]
            },
            {
                titre: "Gestion Disciplinaire",
                criteres: [
                    { nom: "Gestion de la mise en garde (Forme/Méthode)", statut: "en-cours" },
                    { nom: "Gestion des sanctions disciplinaires", statut: "en-cours" },
                    { nom: "Autorité sur les acteurs du jeu", statut: "en-cours" }
                ]
            },
            {
                titre: "Attitude - Comportement",
                criteres: [
                    { nom: "Ponctualité (arrive à l'heure)", statut: "acquis" },
                    { nom: "Détenir tous les outils nécessaires", statut: "acquis" },
                    { nom: "Vérification du terrain", statut: "acquis" },
                    { nom: "Vérification des licences et équipements", statut: "acquis" },
                    { nom: "Consignes et collaboration avec AA", statut: "acquis" },
                    { nom: "Maîtrise de la feuille de match", statut: "en-cours" },
                    { nom: "Relationnel avec les acteurs de la rencontre", statut: "en-cours" },
                    { nom: "Relation Tuteur - Arbitre stagiaire", statut: "acquis" }
                ]
            }
        ]
    },
    {
        // MATCH 3 (Rive Droite)
        team1: "RIVE DROITE",
        team2: "CUBNEZAIS",
        logo1: "assets/img/rd.png", // À remplacer
        logo2: "assets/img/cubnezais.jpg", // À remplacer
        date: "25/04/2026",
        category: "U17 D4",
        tutor: "RAPET Jean Marie",
        appreciation: "Bon échauffement. Contrôle des joueurs et consignes aux capitaines / assistants sont corrects.",
        conseils: "Améillorer la condition physique. Se raprocher des actions",
        evaluations: [
            {
                titre: "Condition Physique / Déplacements / Placements",
                criteres: [
                    { nom: "Échauffement", statut: "acquis" },
                    { nom: "Suivre l'évolution du jeu et capacité à reproduire les efforts", statut: "en-cours" },
                    { nom: "Utilisation des différentes courses", statut: "en-cours" },
                    { nom: "Occupation adaptée de l'aire de jeu", statut: "en-cours" },
                    { nom: "Présence rapide sur faute importante ou conflit", statut: "en-cours" },
                    { nom: "Placement sur coup d'envoi", statut: "non-obs" },
                    { nom: "Placement coup de pied de but", statut: "en-cours" },
                    { nom: "Placement sur pénalty", statut: "acquis" },
                    { nom: "Placement sur corner", statut: "en-cours" },
                    { nom: "Placement sur rentrée de touche", statut: "en-cours" },
                    { nom: "Placement sur coups francs", statut: "en-cours" }
                ]
            },
            {
                titre: "Compétences Techniques",
                criteres: [
                    { nom: "Application des lois du jeu", statut: "en-cours" },
                    { nom: "Exécution des remises en jeu", statut: "acquis" },
                    { nom: "Détection des fautes", statut: "en-cours" },
                    { nom: "Utilisation du sifflet", statut: "acquis" },
                    { nom: "Procédure des remplacements et blessés", statut: "acquis" },
                    { nom: "Notion de l'avantage", statut: "en-cours" },
                    { nom: "Lisibilité des signalisations", statut: "non-obs" },
                    { nom: "Procédure CF avec placement d'un mur", statut: "non-obs" },
                    { nom: "Connaissance du hors-jeu", statut: "en-cours" }
                ]
            },
            {
                titre: "Gestion Disciplinaire",
                criteres: [
                    { nom: "Gestion de la mise en garde (Forme/Méthode)", statut: "acquis" },
                    { nom: "Gestion des sanctions disciplinaires", statut: "acquis" },
                    { nom: "Autorité sur les acteurs du jeu", statut: "acquis" }
                ]
            },
            {
                titre: "Attitude - Comportement",
                criteres: [
                    { nom: "Ponctualité (arrive à l'heure)", statut: "acquis" },
                    { nom: "Détenir tous les outils nécessaires", statut: "acquis" },
                    { nom: "Vérification du terrain", statut: "acquis" },
                    { nom: "Vérification des licences et équipements", statut: "acquis" },
                    { nom: "Consignes et collaboration avec AA", statut: "acquis" },
                    { nom: "Maîtrise de la feuille de match", statut: "acquis" },
                    { nom: "Relationnel avec les acteurs de la rencontre", statut: "en-cours" },
                    { nom: "Relation Tuteur - Arbitre stagiaire", statut: "en-cours" }
                ]
            }
        ]
    }
];

const feedbackContainer = document.getElementById('feedback-container');

// Injection dynamique des cartes sur la page d'accueil
if (feedbackContainer) {
    feedbackContainer.innerHTML = ""; // On s'assure que c'est vide avant d'injecter
    feedbackData.forEach((fb, index) => {
        const card = document.createElement('div');
        card.classList.add('feedback-card');
        card.innerHTML = `
            <div class="feedback-card-header">
                <img src="${fb.logo1}" alt="Logo ${fb.team1}" class="match-logo">
                <div class="feedback-match-info">
                    <h4>${fb.team1} - ${fb.team2}</h4>
                    <p>Le ${fb.date}</p>
                </div>
                <img src="${fb.logo2}" alt="Logo ${fb.team2}" class="match-logo">
            </div>
            <div class="feedback-card-body">
                <h5>Appréciation générale :</h5>
                <p>"${fb.appreciation}"</p>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="openFeedbackModal(${index})">Voir le rapport complet</button>
        `;
        feedbackContainer.appendChild(card);
    });
}
const fbModal = document.getElementById('feedback-modal');
const fbCloseBtn = document.querySelector('.close-feedback-btn');
window.openFeedbackModal = function(index) {
    const data = feedbackData[index];
    
    // Remplissage des logos
    document.getElementById('modal-logo1').src = data.logo1;
    document.getElementById('modal-logo2').src = data.logo2;

    // Remplissage de l'en-tête
    document.getElementById('modal-match-title').innerText = `${data.team1} - ${data.team2}`;
    document.getElementById('modal-match-date').innerText = data.date;
    document.getElementById('modal-match-cat').innerText = data.category;
    document.getElementById('modal-match-tutor').innerText = `Tuteur : ${data.tutor}`;
    
    // Remplissage des textes généraux
    document.getElementById('modal-appreciation').innerText = data.appreciation;
    document.getElementById('modal-conseils').innerText = data.conseils;
    
    // Construction dynamique de la matrice d'évaluation
    const matricesContainer = document.getElementById('modal-matrices-container');
    matricesContainer.innerHTML = ""; // On vide avant de remplir
    
    data.evaluations.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.classList.add('eval-category');
        
        let criteresHTML = cat.criteres.map(crit => {
            let badgeClass = 'badge-nonobs';
            let badgeText = 'Non obs.';
            
            if (crit.statut === 'acquis') {
                badgeClass = 'badge-acquis';
                badgeText = 'Acquis';
            } else if (crit.statut === 'en-cours') {
                badgeClass = 'badge-encours';
                badgeText = 'En cours';
            }
            
            return `
                <div class="eval-item">
                    <span class="eval-item-name">${crit.nom}</span>
                    <span class="eval-badge ${badgeClass}">${badgeText}</span>
                </div>
            `;
        }).join('');
        
        catDiv.innerHTML = `
            <h5>${cat.titre}</h5>
            ${criteresHTML}
        `;
        matricesContainer.appendChild(catDiv);
    });
    
    // Affichage de la modale
    fbModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

if (fbCloseBtn) {
    fbCloseBtn.onclick = function() {
        fbModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Fermeture au clic à l'extérieur de la modale
window.addEventListener('click', function(event) {
    if (event.target == fbModal) {
        fbModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});