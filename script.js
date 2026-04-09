/* ==========================================================================
   Les données du portfolio
   ========================================================================== */

// On stocke les projets universitaires (SAÉ) dans un tableau (Array) nommé saeProjects.
// Chaque projet est un Objet (Object) entre accolades {}, contenant des paires clé/valeur.
const saeProjects = [
    {
        title: "Implémentation",
        description: "Programmation d'une station domotique en Java. Gestion de l'historique et des données.",
        // L'objet "analyse" contient les sous-parties de la grille que l'on affichera dans la modale
        analyse: {
            cahier: "Intégrer l'entièreté des fonctionnalités de gestion, de mise à jour des données météorologiques et de programmation du chauffage de la station météo à partir d'un code incomplet.",
            resultats: "Algorithme de décalage de tableaux implémenté. Intégrité des données garantie et saisie utilisateur sécurisée par boucle de contrôle.",
            // Les compétences et outils sont des tableaux (Arrays) de chaînes de caractères (Strings)
            competences: ["Java", "Algorithmique", "Intégration des données"],
            outils: ["Boucle do...while", "Tableaux", "Conditions"]
        },
        image: "assets/img/odomo.png",
        gallery: ["assets/img/odomo.png"], 
        report: "assets/pdf/odomo-report.pdf",
        tags: ["Java", "Algorithmie"],
        link: "#" // "#" signifie qu'il n'y a pas de lien externe (ex: GitHub) pour le moment
    },
    {
        title: "Comparaisons d'algorithmes",
        description: "Programmation des fonctionnalités d'un jeu de plateau et conception de deux Intelligence Artificielle capable de jouer contre ou à la place de l'utilisateur",
        analyse: {
            cahier: "Coder les règles du jeu (plantation d'un arbre, coupes, vitalité) et développement d'une première IA Gloutonne et une deuxième Visionnaire capable d'anticiper les conséquences de ses actions sur le long terme.",
            resultats: "Tactique de clonage de plateau opérationnelle pour anticiper les scores réels. Zéro disqualification grâce à un algorithme contre les coups illégaux",
            competences: ["Java", "Intelligence Artificielle", "Développement de tests", "Algorithmie"],
            outils: ["Tests unitaires", "Simulation algorithmique", "Algorithmie"]
        },
        image: "assets/img/biosphere.png",
        gallery: ["assets/img/biosphere.png"],
        report: "assets/pdf/biosphere-report.pdf",
        tags: ["Java", "Algorithmie et Comparaison"],
        link: "#"
    },
    {
        title: "Installation de poste",
        description: "Configuration d'une machine virtuelle Lubuntu optimisée (8 Go). Scripting Bash et environnement dév.",
        analyse: {
            cahier: "Créer un environnement de développement complet sur une machine virtuelle sous Lubuntu (LXQt) en respectant une contrainte stricte de 8 Go d'espace disque maximum.",
            resultats: "Intégration d'un stack complet (Java, Git, VS Code) validée par la réussite du script de test bash. Consommation disque maîtrisée.",
            competences: ["Administration Système", "Optimisation logicielle", "Gestion de projet"],
            outils: ["Linux (Lubuntu/LXQt)", "Bash", "VirtualBox"]
        },
        image: "assets/img/vm-install.png",
        gallery: ["assets/img/vm-install.png"],
        report: "assets/pdf/vm-report.pdf",
        tags: ["Linux", "S1.03"],
        link: "#"
    },
    {
        title: "Création de Base de données",
        description: "Conception SQL pour événements culturels. Traduction de règles métier en contraintes.",
        analyse: {
            cahier: "Créer une base de données pour une agence événementielle en traduisant des règles métier textuelles complexes (horaires, formats) pour éviter les incohérences de planning.",
            resultats: "Scripts SQL robustes implémentés avec une gestion fine des contraintes. Insertion réussie d'un jeu de données réaliste.",
            competences: ["Modélisation relationnelle", "Traduction métier"],
            outils: ["SQL (DDL/DML)", "Win'Design", "Contraintes CHECK/UNIQUE"]
        },
        image: "assets/img/bdd.png",
        gallery: ["assets/img/bdd.png"],
        report: "assets/pdf/bdd-report.pdf",
        tags: ["SQL", "S1.04"],
        link: "#"
    },
    {
        title: "Recueil de besoin",
        description: "Refactoring d'un site web legacy. Passage de tableaux à CSS Grid (Thème Windows XP).",
        analyse: {
            cahier: "Moderniser le code source du site web d'une entreprise fictive en abandonnant l'ancienne mise en page en tableaux, tout en respectant un thème visuel Windows XP imposé.",
            resultats: "Refonte validée en HTML5 sémantique. Amélioration de l'accessibilité et réduction de la taille du code source.",
            competences: ["Intégration web", "Refactoring", "Respect d'une charte"],
            outils: ["HTML5", "CSS Grid", "Design System"]
        },
        image: "assets/img/retro-pc.png",
        gallery: ["assets/img/retro-pc.png"],
        report: "assets/pdf/retro-report.pdf",
        tags: ["HTML/CSS", "S1.05"],
        link: "#"
    },
    {
        title: "Environnement économique",
        description: "Diagnostic stratégique Baillardran. Analyse SWOT et synthèse RSE.",
        analyse: {
            cahier: "Coordonner l'équipe en tant que Chef de Projet pour compiler des informations disparates et réaliser le diagnostic stratégique de l'entreprise Baillardran face à sa crise.",
            resultats: "Livrable complet remis. Recommandations stratégiques formulées pour redresser l'image de marque de l'entreprise.",
            competences: ["Gestion de Projet", "Travail d'équipe", "Synthèse d'enjeux"],
            outils: ["Analyse SWOT", "Matrice PESTEL", "Diagnostic RSE"]
        },
        image: "assets/img/baillardran.png",
        gallery: ["assets/img/baillardran.png"],
        report: "assets/pdf/baillardran-report.pdf",
        tags: ["Gestion", "S1.06"],
        link: "#"
    }
];

// On stocke les projets personnels dans un tableau séparé
const persoProjects = [
    {
        title: "Restructuration Orientée Objet (R.O.O)",
        description: "Refonte totale d'un code procédural en architecture orientée objet propre et modulaire.",
        analyse: {
            cahier: "Nettoyer un code procédural comportant des fonctions à rallonge et une logique métier mélangée avec l'affichage, pour le passer en architecture Orientée Objet.",
            resultats: "Code devenu modulaire et lisible. Résolution des bugs structurels silencieux grâce à la nouvelle architecture.",
            competences: ["Nettoyage de code", "Architecture logicielle"],
            outils: ["Java", "Conception UML", "Encapsulation / Héritage"]
        },
        image: "assets/img/retex-roo.png",
        gallery: ["assets/img/retex-roo.png"],
        report: "#",
        tags: ["Java", "Clean Code"],
        link: "https://github.com/ton-repo"
    }
];

/* ==========================================================================
   2. CONNEXION AVEC LE HTML (Le DOM)
   ========================================================================== */

// On "attrape" les balises HTML existantes en utilisant leur attribut id="...".
// On les stocke dans des variables constantes (const) pour pouvoir les modifier plus tard.
const saeContainer = document.getElementById('sae-container');
const persoContainer = document.getElementById('perso-container');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');

/* ==========================================================================
   3. LES FONCTIONS (La mécanique du site)
   ========================================================================== */

/**
 * Fonction qui génère les petites cartes (vignettes) de projets sur la page d'accueil.
 * @param {Array} projectsArray - Le tableau de données (soit saeProjects, soit persoProjects)
 * @param {HTMLElement} container - La balise HTML où injecter les cartes
 * @param {String} typeStr - Une chaîne de caractères ('sae' ou 'perso') pour savoir d'où vient le clic
 */
function createCards(projectsArray, container, typeStr) {
    if (!container) return; // Sécurité : si le conteneur n'existe pas, on arrête la fonction.
    
    // On vide le conteneur pour éviter de créer des doublons si la fonction est appelée 2 fois
    container.innerHTML = "";
    
    // On parcourt chaque projet du tableau. "project" est l'objet en cours, "index" est sa position (0, 1, 2...)
    projectsArray.forEach((project, index) => {
        // On crée virtuellement une balise <div>
        const card = document.createElement('div');
        // On lui ajoute la classe CSS "project-card"
        card.classList.add('project-card');
        
        // On injecte le code HTML à l'intérieur de cette carte.
        // L'utilisation des backticks (`) permet d'insérer des variables directement avec ${...}
        card.innerHTML = `
            <div class="card-img-holder">
                <img src="${project.image}" alt="${project.title}" class="project-img">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <button class="btn btn-secondary btn-sm" onclick="openModal('${typeStr}', ${index})" style="margin-top:1rem; width:100%">Voir l'analyse</button>
            </div>
        `;
        // On ajoute physiquement la carte nouvellement créée dans le conteneur HTML de la page
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