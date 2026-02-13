// script.js

// Données des services
const servicesData = [
    {
        icon: 'fa-car',
        title: 'Location de véhicules',
        description: 'Véhicules neufs et bien entretenus pour tous vos déplacements, que ce soit pour un jour, une semaine ou un mois.',
        link: '#vehicules'
    },
    {
        icon: 'fa-calendar-alt',
        title: 'Événementiel',
        description: 'Organisation de vos événements professionnels et privés avec soin et professionnalisme (mariages, séminaires, conférences).',
        link: '#contact'
    },
    {
        icon: 'fa-home',
        title: 'Immobilier',
        description: 'Aide à trouver votre logement idéal ou à louer vos biens immobiliers en toute simplicité.',
        link: '#contact'
    },
    {
        icon: 'fa-bed',
        title: 'Location de guest house',
        description: 'Guest houses conçues pour vous offrir un séjour confortable et agréable.',
        link: '#contact'
    },
    {
        icon: 'fa-broom',
        title: 'Nettoyage et entretien',
        description: 'Services de nettoyage et d\'entretien pour vos locaux professionnels et résidentiels.',
        link: '#contact'
    },
    {
        icon: 'fa-truck-moving',
        title: 'Déménagement et aménagements',
        description: 'Aide au déménagement et à l\'aménagement de vos locaux avec professionnalisme.',
        link: '#contact'
    }
];

// Données des véhicules
const vehiculesData = [
    {
        image: 'lexus2.jpeg',
        title: 'Lexus',
        description: 'Idéale pour la ville, économique et facile à garer',
        price: '25 000',
        period: 'jour',
        features: ['4 places', 'Climatisation', 'GPS'],
        fuel: 'Essence'
    },
    {
        image: 'rangerover.jpeg',
        title: 'Range rover',
        description: 'Parfait pour les routes difficiles et les aventures',
        price: '45 000',
        period: 'jour',
        features: ['5 places', '4x4', 'Diesel'],
        fuel: 'Diesel'
    },
    {
        image: 'prado.jpeg',
        title: 'Prado',
        description: 'Confort et élégance pour vos déplacements professionnels',
        price: '65 000',
        period: 'jour',
        features: ['5 places', 'Cuir', 'Premium'],
        fuel: 'Essence'
    },
    {
        image: 'mercedes.jpeg',
        title: 'Mercedesse',
        description: 'Pour vos déménagements et transports de marchandises',
        price: '35 000',
        period: 'jour',
        features: ['3 places', 'Grand volume', 'Diesel'],
        fuel: 'Diesel'
    },
    {
        image: 'toyotacamry.jpeg',
        title: 'Toyota Camry',
        description: 'Parfait pour les routes difficiles et les aventures',
        price: '45 000',
        period: 'jour',
        features: ['5 places', '4x4', 'Diesel'],
        fuel: 'Diesel'
    },
     {
        image: 'lexux.jpeg',
        title: 'Lexuxe',
        description: 'Parfait pour les routes difficiles et les aventures',
        price: '45 000',
        period: 'jour',
        features: ['5 places', '4x4', 'Diesel'],
        fuel: 'Diesel'
    }
   
   
];

// Charger les services
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card">
            <i class="fas ${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="${service.link}" class="service-link">En savoir plus <i class="fas fa-arrow-right"></i></a>
        </div>
    `).join('');
}

// Charger les véhicules
function loadVehicules() {
    const vehiculesGrid = document.getElementById('vehiculesGrid');
    if (!vehiculesGrid) return;

    vehiculesGrid.innerHTML = vehiculesData.map(vehicule => `
        <div class="vehicule-card">
            <div class="vehicule-image">
                <img src="${vehicule.image}" alt="${vehicule.title}">
            </div>
            <h3>${vehicule.title}</h3>
            <p>${vehicule.description}</p>
            <div class="vehicule-features">
                ${vehicule.features.map(feature => `
                    <span><i class="fas fa-check-circle"></i> ${feature}</span>
                `).join('')}
            </div>
            <div class="vehicule-price">
                ${vehicule.price} FCFA <span>/ ${vehicule.period}</span>
            </div>
            <a href="#reservation" class="btn-primary" style="display: inline-block; padding: 0.5rem 1.5rem; text-decoration: none;" onclick="openReservationModal('${vehicule.title}')">
                Réserver
            </a>
        </div>
    `).join('');
}

// Navigation mobile
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Simuler l'envoi du formulaire
        submitButton.disabled = true;
        submitButton.textContent = 'Envoi en cours...';
        
        try {
            // Simuler une requête API
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Message envoyé avec succès ! Nous vous contacterons bientôt.';
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Une erreur est survenue. Veuillez réessayer.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Envoyer';
        }
    });
}

// Modal de réservation
function initReservationModal() {
    const modal = document.getElementById('reservationModal');
    const reservationButtons = document.querySelectorAll('.btn-reservation, .vehicule-card .btn-primary');
    const closeBtn = document.querySelector('.close');
    const reservationForm = document.getElementById('reservationForm');

    // Ouvrir modal
    const openModal = (vehiculeTitle = '') => {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            if (vehiculeTitle && reservationForm) {
                const serviceSelect = document.getElementById('resService');
                if (serviceSelect) {
                    serviceSelect.value = 'location';
                }
                const detailsField = document.getElementById('resDetails');
                if (detailsField) {
                    detailsField.value = `Réservation pour: ${vehiculeTitle}`;
                }
            }
        }
    };

    // Fermer modal
    const closeModal = () => {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (reservationForm) {
                reservationForm.reset();
            }
        }
    };

    // Ajouter événements aux boutons de réservation
    document.querySelectorAll('.btn-reservation').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Boutons de réservation des véhicules
    document.querySelectorAll('.vehicule-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const vehiculeCard = btn.closest('.vehicule-card');
            const vehiculeTitle = vehiculeCard?.querySelector('h3')?.textContent || '';
            openModal(vehiculeTitle);
        });
    });

    // Fermeture modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Gestionnaire du formulaire de réservation
    if (reservationForm) {
        reservationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = reservationForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Réservation en cours...';
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                alert('Réservation confirmée ! Nous vous contacterons dans les plus brefs délais.');
                closeModal();
            } catch (error) {
                alert('Une erreur est survenue. Veuillez réessayer.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Confirmer la réservation';
            }
        });
    }
}

// Fonction globale pour ouvrir la modal depuis les attributs onclick
window.openReservationModal = function(vehiculeTitle) {
    const modal = document.getElementById('reservationModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        const reservationForm = document.getElementById('reservationForm');
        if (reservationForm && vehiculeTitle) {
            const serviceSelect = document.getElementById('resService');
            if (serviceSelect) {
                serviceSelect.value = 'location';
            }
            const detailsField = document.getElementById('resDetails');
            if (detailsField) {
                detailsField.value = `Réservation pour: ${vehiculeTitle}`;
            }
        }
    }
};

// Newsletter
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            alert('Merci de vous être abonné à notre newsletter !');
            newsletterForm.reset();
        } else {
            alert('Veuillez entrer votre adresse email.');
        }
    });
}

// Smooth scroll pour les ancres
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mettre à jour le numéro de téléphone et l'email depuis le JavaScript
function updateContactInfo() {
    const phoneElement = document.getElementById('phoneNumber');
    const emailElement = document.getElementById('emailAddress');
    
    if (phoneElement) {
        phoneElement.textContent = '+229 01 23 45 67 89';
    }
    
    if (emailElement) {
        emailElement.textContent = 'contact@ttbking.bj';
    }
}

// Animation des nombres (statistiques)
function animateNumbers() {
    // Cette fonction peut être étendue pour animer des statistiques si vous en ajoutez
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255,255,255,0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = '#fff';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        }
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    loadVehicules();
    initMobileNav();
    initContactForm();
    initReservationModal();
    initNewsletter();
    initSmoothScroll();
    initHeaderScroll();
    updateContactInfo();
    animateNumbers();
});
