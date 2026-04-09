// données complètes sur les projets
const projectsData = [
    {
        title: "Implémentation",
        description: "Programmation d'une station domotique en Java. Gestion de l'historique et validation.",
        fullDescription: "Dans le cadre de la première SAÉ de l'année, j'ai complété un logiciel embarqué de la station météo.<br><br><strong>Réalisations techniques :</strong><br>• Implémentation d'un algorithme de décalage circulaire pour gérer l'historique des relevés (24h).<br>• Création d'une boucle de validation (do...while) pour sécuriser les saisies utilisateurs.<br>• Algorithme de filtrage pour garantir la cohérence des données capteurs (bornage min/max).",
        image: "assets/img/odomo.png",
        gallery: ["assets/img/odomo.png"], 
        report: "assets/pdf/odomo-report.pdf",
        tags: ["Java", "Algorithmique", "R1.01"],
        link: "#"
    },
    {
        title: "Comparaisons d'algorithmes",
        description: "Codage des mécaniques de jeu validées par tests unitaires. Conception d'une IA prédictive par clonage de plateau, sécurisée contre les coups illégaux.",
        fullDescription: "Développement d'une IA compétitive pour le jeu de plateau 'Biosphère 7'.<br><br><strong>Points clés :</strong><br>• Implémentation des règles métiers (croissance, coupe) validée par une suite de tests unitaires.<br>• Conception d'une IA 'Visionnaire' capable de cloner l'état du plateau en mémoire pour simuler les coups futurs.<br>• Sécurisation stricte contre les disqualifications (vérification préalable de la légalité des coups).",
        image: "assets/img/biosphere.png",
        gallery: ["assets/img/biosphere.png"],
        report: "assets/pdf/biosphere-report.pdf",
        tags: ["Java", "IA", "R1.02"],
        link: "#"
    },
    {
        title: "Installation de poste",
        description: "Configuration d'une VM sous un Linux (Lubuntu).",
        fullDescription: "Déploiement d'un poste de travail développeur sous contrainte de ressources (8 Go disque).<br><br><strong>Actions :</strong><br>• Installation et partitionnement manuel d'une distribution légère (Lubuntu LXQt).<br>• Installation des outils (JDK, Git, VS Code) via scripting Bash.<br>• Gestion des droits utilisateurs et optimisation de l'espace disque.",
        image: "assets/img/vm-install.png",
        gallery: ["assets/img/vm-install.png"],
        report: "assets/pdf/vm-report.pdf",
        tags: ["Linux", "Bash", "S1.03"],
        link: "#"
    },
    {
        title: "Création de Base de données",
        description: "Conception SQL pour événements culturels. Traduction de règles métier en contraintes.",
        fullDescription: "Conception complète de la base de données d'une agence événementielle.<br><br><strong>Démarche :</strong><br>• Modélisation conceptuelle (MCD) sur Win'Design.<br>• Traduction en script SQL de création (DDL) avec gestion fine des contraintes (CHECK, UNIQUE, Foreign Keys).<br>• Création d'un jeu de données réaliste pour tester la robustesse des requêtes.",
        image: "assets/img/bdd.png",
        gallery: ["assets/img/bdd.png"],
        report: "assets/pdf/bdd-report.pdf",
        tags: ["SQL", "Modélisation", "S1.04"],
        link: "#"
    },
    {
        title: "Recueil de besoin",
        description: "Refactoring d'un site web. Passage de tableaux à CSS Grid (Avce un thème Windows XP).",
        fullDescription: "Modernisation technique (Refactoring) du site 'Retro-PC'.<br><br><strong>Challenge :</strong> Passer d'une structure obsolète basée sur des tableaux HTML à une structure sémantique moderne.<br>• Utilisation de CSS Grid pour le layout principal.<br>• Application d'un Design System imposé (Windows XP) via CSS pur.<br>• Optimisation de l'accessibilité et du code source.",
        image: "assets/img/retro-pc.png",
        gallery: ["assets/img/retro-pc.png"],
        report: "assets/pdf/retro-report.pdf",
        tags: ["HTML/CSS", "Refactoring", "S1.05"],
        link: "#"
    },
    {
        title: "Environnement économique et écologique",
        description: "Diagnostic de Baillardran.",
        fullDescription: "Diagnostic complet de l'entreprise Baillardran en situation de crise.<br><br><strong>Rôle : Chef de Projet</strong><br>• Coordination de l'équipe et synthèse des livrables.<br>• Analyse stratégique externe (PESTEL) et interne (SWOT/RSE).<br>• Formulation de recommandations économiques pour redresser l'image de marque.",
        image: "assets/img/baillardran.png",
        gallery: ["assets/img/baillardran.png"],
        report: "assets/pdf/baillardran-report.pdf",
        tags: ["Gestion", "Analyse Éco"],
        link: "#"
    }
];

// --- LOGIQUE D'AFFICHAGE ---

const projectsContainer = document.getElementById('projects-container');
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');

// Charger les cartes projets
function loadProjects() {
    projectsContainer.innerHTML = "";
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        // On ajoute un attribut onclick pour ouvrir la modale
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
                <button class="btn btn-secondary btn-sm" onclick="openModal(${index})" style="margin-top:1rem; width:100%">Voir détails</button>
            </div>
        `;
        projectsContainer.appendChild(card);
    });
}

// Ouvrir la modale
window.openModal = function(index) {
    const project = projectsData[index];
    
    // Remplir les infos
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-description').innerHTML = project.fullDescription;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-report').href = project.report;
    
    // Gérer le bouton GitHub (le cacher s'il n'y a pas de lien)
    const repoBtn = document.getElementById('modal-repo');
    if(project.link && project.link !== "#") {
        repoBtn.href = project.link;
        repoBtn.style.display = "inline-block";
    } else {
        repoBtn.style.display = "none";
    }

    // Remplir les tags
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // Remplir la galerie
    const galleryContainer = document.getElementById('modal-gallery-grid');
    galleryContainer.innerHTML = "";
    
    // Ajoute l'image principale + les images de galerie
    const allImages = [project.image, ...(project.gallery || [])];
    
    // Dédoublonnage simple (si l'image principale est aussi dans la galerie)
    const uniqueImages = [...new Set(allImages)];

    if(uniqueImages.length > 0) {
        uniqueImages.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('gallery-img');
            // Au clic sur une image de galerie, elle devient l'image principale
            img.onclick = function() {
                document.getElementById('modal-image').src = this.src;
            };
            galleryContainer.appendChild(img);
        });
        document.querySelector('.modal-gallery').style.display = 'block';
    } else {
        document.querySelector('.modal-gallery').style.display = 'none';
    }

    // Afficher la modale
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Empêcher le scroll du site derrière
}

// Fermer la modale
closeBtn.onclick = function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Réactiver le scroll
}

// Fermer en cliquant en dehors
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Lancement au chargement
document.addEventListener('DOMContentLoaded', loadProjects);