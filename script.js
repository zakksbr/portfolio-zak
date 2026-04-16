// ici je stocke toutes les données des projets.
// les projets que j'ai fait à l'iut, puis les perso
const saeProjects = [
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
        report: "assets/pdf/odomo-report.pdf",
        tags: ["Java", "Algorithmie"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_java-projet-domotique-ugcPost-7395203244312043521-TFbM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
        linkLabel: "Voir le post LinkedIn"
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
        report: "assets/pdf/biosphere-report.pdf",
        tags: ["Java", "Algorithmie et Comparaison"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_java-intelligenceartificielle-algorithmique-share-7423392852463906817-jtZ3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
        linkLabel: "Voir le post LinkedIn"
    },
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
        report: "assets/pdf/vm-report.pdf",
        tags: ["Linux", "Bash", "Virtual Machine"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_butinformatique-administrationsystaeyme-clojure-ugcPost-7391106933803438081-mx4s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
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
        report: "assets/pdf/bdd-report.pdf",
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
        report: "assets/pdf/retro-report.pdf",
        tags: ["HTML/CSS", "Web"],
        link: "https://www.linkedin.com/posts/zakaria-sabri-33b81b35b_webdevelopment-html5-css3-ugcPost-7417162829536890880-ARre?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmk7R8BGB6Ucqb-_IBX3_twewPXeAl8Ung", 
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
        report: "assets/pdf/baillardran-report.pdf",
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
        report: "assets/pdf/jpo-fiche-technique.pdf",
        tags: ["Communication", "Organisation"],
        link: "#"
    },
    {
        title: "Développement d'une application",
        wip: true,
        description: "Application C# de gestion de personnages et simulateur de jeu de rôles avec architecture Orientée Objet intégrale.",
        analyse: {
            cahier: "Concevoir en équipe de 3 une application WinForms robuste traduisant des règles d'un jeu fictif.",
            resultats: "Livrable, avec séparation Logique/IHM. Moteur de résolution des épreuves fictives validé par tests unitaires et interface ergonomique.",
            competences: ["Programmation C#", "Conception UML", "Développement IHM", "Tests"],
            outils: ["Visual Studio / .NET", "WinForms", "Git"]
        },
        image: "assets/img/butopia.png",
        gallery: ["assets/img/butopia.png"],
        report: "assets/pdf/butopia-report.pdf",
        tags: ["C#", ".NET", "Développement", "Git"],
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
        wip: true,
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
    
    // on gère l'affichage des boutons. si je n'ai pas mis de lien ou de rapport, le bouton se cache
    const reportBtn = document.getElementById('modal-report');
    if (project.report && project.report !== "#") {
        reportBtn.href = project.report;
        reportBtn.style.display = "inline-block";
    } else {
        reportBtn.style.display = "none";
    }

    const repoBtn = document.getElementById('modal-repo');
    if (project.link && project.link !== "#") {
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