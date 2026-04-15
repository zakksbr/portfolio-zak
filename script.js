/* 
   Les données du portfolio
*/

// On stocke les projets universitaires (SAÉ) dans un tableau (Array) nommé saeProjects.
// Chaque projet est un Objet (Object) entre accolades {}, contenant des paires clé/valeur.
const saeProjects = [
    {
        title: "Implémentation",
        description: "Programmation d'une station domotique en Java. Gestion de l'historique et des données.",
        // L'objet "analyse" contient les sous-parties de la grille que l'on affichera dans la modale
        analyse: {
            cahier: "Intégrer l'entièreté des fonctionnalités de gestion, de mise à jour des données météorologiques et de programmation du chauffage d'une station météo à partir d'un code incomplet.",
            resultats: "Algorithme de décalage de tableaux implémenté. Intégrité des données garantie et saisie utilisateur sécurisée par boucle de contrôle.",
            // Les compétences et outils sont des tableaux (Arrays) de chaînes de caractères (Strings)
            competences: ["Java", "Algorithmique", "Intégration des données"],
            outils: ["Boucle do...while", "Tableaux", "Conditions"]
        },
        image: "assets/img/odomo.png",
        gallery: ["assets/img/odomo.png"], 
        report: "assets/pdf/odomo-report.pdf",
        tags: ["Java", "Algorithmie"],
        link: "#", // "#" pour l'innstant puisque je n'ai pas encore integré le rapport 
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
        link: "#",
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
        link: "#",
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
        link: "#",
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
        link: "#",
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

// On stocke les projets personnels dans un tableau séparé
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
        report: "assets/pdf/alienware-report.pdf", 
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
        gallery: ["assets/img/jarvis2.png"],
        gallery: ["assets/img/jarvis1.png"],
        report: "#", // À remplacer par le lien de ton rapport si disponible
        tags: ["Python", "IA", "macOS"],
        link: "#" // À remplacer par ton lien GitHub si tu souhaites le partager
        
   
    },

    {       // voit plus de détail --> le bouton ne marche plus 
        title: "Déploiement de macOS via Hackintosh sur un PC",
        wip:true,
        description: "Installation native de macOS Bigsur sur une tour PC HP en contournant les sécurités matérielles et logicielles.",
        analyse: {
            cahier: "Déployer macOS sur un matériel non-Apple (HP, Intel). Contraintes : créer un environnement matériel virtuel sans modifier le système d'exploitation cible, grâce à une base GitHub.",
            resultats: "Création d'un Bootloader (OpenCore) sur-mesure. Stabilité garantie avec un minimum de kexts (4 pilotes, 2 patchs). Contournement des sécurités HP (Hard Freezes, erreurs ACPI) et amorçage réussi du noyau XNU.",
            outils: ["OpenCore Bootloader", "ProperTree", "Terminal", "Scripts Python"]
        },
        image: "assets/img/hackintoch.jpg", // À ajuster selon votre fichier image
        gallery: ["assets/img/hackintoch.jpg"],
        report: "#", // À remplacer si vous avez un rapport ou un tutoriel
        tags: ["SysAdmin", "Hardware", "macOS"],
        link: "#" // À remplacer si vous avez un dépôt GitHub avec votre dossier EFI
    },

    {
        title: "Portfolio Professionnel",
        description: "Conception et développement de mon portfolio pour valoriser mes projets et compétences.",
        analyse: {
            cahier: "Créer une plateforme fluide et performante. Contraintes : Stack Vanilla (HTML/CSS/JS), Dark Mode, Responsive Design complet et gestion dynamique des projets via manipulation du DOM.",
            resultats: "Score Lighthouse optimisé. Navigation intuitive via modales d'analyse. Maintenance simplifiée grâce à une architecture de données centralisée en JavaScript.",
            competences: ["Développement Front-End", "UI/UX Design", "Architecture de données", "Versionnage Git"],
            outils: ["VS Code", "CSS Grid/Flexbox", "JavaScript Vanilla", "Git/GitHub"]
        },
        image: "assets/img/portfolio-preview.jpg", // Prends une capture d'écran de ton site !
        gallery: ["assets/img/portfolio-preview.jpg"],
        report: "#", 
        tags: ["Web", "Design", "Vanilla JS"],
        link: "https://github.com/ton-username/ton-repo-portfolio", // Ton lien GitHub
        linkLabel: "Voir le code sur GitHub"
    }
    

];

/* 
   CONNEXION AVEC LE HTML
    */

// On "attrape" les balises HTML existantes en utilisant leur attribut id="...".
// On les stocke dans des variables constantes (const) pour pouvoir les modifier plus tard.
const saeContainer = document.getElementById('sae-container');
const persoContainer = document.getElementById('perso-container');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');

/* 
   les fcts
   */

/**
 * Fonction qui génère les petites cartes (vignettes) de projets sur la page d'accueil.
 * @param {Array} projectsArray - Le tableau de données (soit saeProjects, soit persoProjects)
 * @param {HTMLElement} container - La balise HTML où injecter les cartes
 * @param {String} typeStr - Une chaîne de caractères ('sae' ou 'perso') pour savoir d'où vient le clic
 */
function createCards(projectsArray, container, typeStr) {
    if (!container) return; 
    container.innerHTML = "";
    projectsArray.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // --- Logique d'injection des badges de statut sur l'image ---
        let statusBadgesHTML = ""; // Chaîne vide par défaut
        
        // On vérifie si le projet est marqué comme "Coup de cœur" (propriété favorite: true)
        if (project.favorite) {
            statusBadgesHTML += `<span class="p-badge favorite">🧡 Coup de cœur</span>`;
        }
        
        // On vérifie si le projet est marqué comme "En cours" (propriété wip: true)
        if (project.wip) {
            statusBadgesHTML += `<span class="p-badge wip">⏳ En cours de finalisation</span>`;
        }

        // Si au moins un badge existe, on l'enveloppe dans le conteneur flex
        if(statusBadgesHTML) {
            statusBadgesHTML = `<div class="project-badges">${statusBadgesHTML}</div>`;
        }

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

/**
 * Fonction globale qui déclenche la création de toutes les cartes.
 */
function loadProjects() {
    createCards(saeProjects, saeContainer, 'sae');
    createCards(persoProjects, persoContainer, 'perso');
}

/**
 * Fonction qui gère l'ouverture et le remplissage de la grande fenêtre (Modale).
 * On utilise window.openModal pour qu'elle soit accessible globalement depuis le HTML (onclick).
 * @param {String} type - Soit 'sae', soit 'perso'
 * @param {Number} index - Le numéro du projet dans le tableau (ex: 0 pour le premier)
 */
window.openModal = function(type, index) {
    // 1. On détermine quel projet afficher.
    // Si type est strictement égal à 'sae', on pioche dans saeProjects, sinon on pioche dans persoProjects.
    const project = (type === 'sae') ? saeProjects[index] : persoProjects[index];
    
    // 2. On remplace le texte et les images des éléments HTML de la modale avec les infos du projet
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-image').src = project.image;
    
    // Remplissage de la grille d'analyse
    document.getElementById('analysis-cahier-text').innerHTML = project.analyse.cahier;
    document.getElementById('analysis-resultats-text').innerHTML = project.analyse.resultats;
    
    // Pour les compétences et outils (qui sont des tableaux de mots), on crée des balises <li> pour chaque mot
    document.getElementById('analysis-competences-list').innerHTML = project.analyse.competences.map(comp => `<li>${comp}</li>`).join('');
    document.getElementById('analysis-outils-list').innerHTML = project.analyse.outils.map(outil => `<li>${outil}</li>`).join('');
    
    // 3. Gestion intelligente des boutons
    const reportBtn = document.getElementById('modal-report');
    // S'il y a un lien de rapport ET que ce lien n'est pas "#" (vide), on affiche le bouton
    if(project.report && project.report !== "#") {
        reportBtn.href = project.report;
        reportBtn.style.display = "inline-block";
    } else {
        // Sinon on le cache
        reportBtn.style.display = "none";
    }

    const repoBtn = document.getElementById('modal-repo');
    if(project.link && project.link !== "#") {
        repoBtn.href = project.link;
        // Si un label spécifique est défini (comme pour le projet Alienware), on l'utilise, sinon on met "Code Source" par défaut
        repoBtn.innerText = project.linkLabel ? project.linkLabel : "Code Source / GitHub";
        repoBtn.style.display = "inline-block";
    } else {
        repoBtn.style.display = "none";
    }
    // On remplit les tags en haut de la modale
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // 4. Gestion de la galerie d'images
    const galleryContainer = document.getElementById('modal-gallery-grid');
    galleryContainer.innerHTML = ""; // On vide l'ancienne galerie
    
    // On fusionne l'image principale et les images de la galerie en un seul tableau
    const allImages = [project.image, ...(project.gallery || [])];
    // On supprime les doublons (pour ne pas afficher 2 fois la même image) grâce à un "Set"
    const uniqueImages = [...new Set(allImages)];

    if(uniqueImages.length > 0) {
        // Pour chaque image unique, on crée une vignette
        uniqueImages.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('gallery-img');
            
            // Si on clique sur une vignette, l'image principale de la modale change !
            img.onclick = function() {
                document.getElementById('modal-image').src = this.src;
            };
            galleryContainer.appendChild(img);
        });
        document.querySelector('.modal-gallery').style.display = 'block'; // On affiche le conteneur galerie
    } else {
        document.querySelector('.modal-gallery').style.display = 'none'; // S'il n'y a pas d'images, on cache la galerie
    }

    // 5. Affichage final
    modal.classList.add('show'); // On ajoute la classe CSS qui rend la modale visible (opacity 1)
    document.body.style.overflow = 'hidden'; // On empêche la page derrière de défiler (scroll)
}

/* ==========================================================================
   4. LES ÉCOUTEURS D'ÉVÉNEMENTS (Les déclencheurs)
   ========================================================================== */

// Quand on clique sur la petite croix (X) en haut à droite
closeBtn.onclick = function() {
    modal.classList.remove('show'); // On cache la modale
    document.body.style.overflow = 'auto'; // On réactive le défilement de la page principale
}

// Quand on clique n'importe où sur l'écran
window.onclick = function(event) {
    // Si l'élément cliqué est le fond sombre de la modale (et pas le contenu de la modale lui-même)
    if (event.target == modal) {
        modal.classList.remove('show'); // On ferme la modale
        document.body.style.overflow = 'auto';
    }
}

// C'est la ligne la plus importante : elle dit au navigateur
// "Attends que tout le HTML de la page soit chargé (DOMContentLoaded) avant de lancer loadProjects()"
// Sinon, le JS essaierait d'insérer des projets dans des conteneurs qui n'existent pas encore.
document.addEventListener('DOMContentLoaded', loadProjects);

/* animations au scroll */
const observerOptions = {
    threshold: 0.1, // Déclenche l'animation quand 10% de l'élément est visible à l'écran
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Déclenche l'animation
            observer.unobserve(entry.target); // Ne joue l'animation qu'une seule fois
        }
    });
}, observerOptions);

// Une fois la page chargée, on cible ce qu'on veut animer
document.addEventListener('DOMContentLoaded', () => {
    // On cible toutes tes sections et tes cartes de compétences
    const elementsToAnimate = document.querySelectorAll('.section-padding, .skill-card');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal'); // On les cache par défaut
        observer.observe(el); // On écoute leur apparition
    });
});