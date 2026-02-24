// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {

    // ==================== MENU HAMBURGER ====================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    // Ouvrir/fermer le menu au clic sur le hamburger
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Changer l'icône entre hamburger et "X"
            const icon = navToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fermer le menu lorsqu'on clique sur un lien
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Fermer le menu si on clique en dehors (optionnel)
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // ==================== CHARGEMENT DYNAMIQUE DES SERVICES ====================
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        const services = [
            { icon: 'fas fa-car', title: 'Location de véhicules', desc: 'Voitures, 4x4, utilitaires pour vos déplacements' },
            { icon: 'fas fa-calendar-alt', title: 'Événementiel', desc: 'Organisation de vos événements spéciaux' },
            { icon: 'fas fa-home', title: 'Immobilier', desc: 'Recherche et gestion de biens immobiliers' },
            { icon: 'fas fa-bed', title: 'Guest House', desc: 'Hébergement confortable pour courts séjours' },
            { icon: 'fas fa-broom', title: 'Nettoyage', desc: 'Services de nettoyage professionnel' },
            { icon: 'fas fa-truck-moving', title: 'Déménagement', desc: 'Déménagement en toute sérénité' }
        ];

        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <i class="${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <a href="#contact" class="service-link">En savoir plus <i class="fas fa-arrow-right"></i></a>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // ==================== CHARGEMENT DYNAMIQUE DES VÉHICULES ====================
    const vehiculesGrid = document.getElementById('vehiculesGrid');
    if (vehiculesGrid) {
        const vehicules = [
            { img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', name: 'Toyota Corolla', price: '25000', fuel: 'Essence', seats: '5' },
            { img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', name: 'Ford Ranger', price: '45000', fuel: 'Diesel', seats: '5' },
            { img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', name: 'Mercedes Sprinter', price: '60000', fuel: 'Diesel', seats: '9' },

            { img: 'lexux.jepeg', name: 'Lexus', price: '60000', fuel: 'Diesel', seats: '9' },
            { img: 'prado.jepeg', name: 'Prado', price: '60000', fuel: 'Diesel', seats: '9' },
            { img: 'pikup.jepeg', name: 'Pikup', price: '60000', fuel: 'Diesel', seats: '9' },
            { img: 'rangerover.jepeg', name: 'Lexus', price: '60000', fuel: 'Diesel', seats: '9' }
            
        ];

        vehicules.forEach(vehicule => {
            const card = document.createElement('div');
            card.className = 'vehicule-card';
            card.innerHTML = `
                <div class="vehicule-image">
                    <img src="${vehicule.img}" alt="${vehicule.name}">
                </div>
                <h3>${vehicule.name}</h3>
                <div class="vehicule-price">${vehicule.price} FCFA <span>/jour</span></div>
                <div class="vehicule-features">
                    <span><i class="fas fa-gas-pump"></i> ${vehicule.fuel}</span>
                    <span><i class="fas fa-users"></i> ${vehicule.seats} places</span>
                    <span><i class="fas fa-snowflake"></i> Climatisation</span>
                </div>
                <a href="#reservation" class="btn-primary reservation-trigger" style="display:inline-block; margin-top:1rem;">Réserver</a>
            `;
            vehiculesGrid.appendChild(card);
        });
    }

    // ==================== MODAL DE RÉSERVATION ====================
    const modal = document.getElementById('reservationModal');
    const reservationTriggers = document.querySelectorAll('.btn-reservation, .reservation-trigger');
    const closeBtn = document.querySelector('.close');

    // Ouvrir la modale
    reservationTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Empêcher le scroll
            }
        });
    });

    // Fermer la modale
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Fermer si on clique en dehors de la modale
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ==================== GESTION DES FORMULAIRES ====================
    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simuler l'envoi du formulaire
            formMessage.textContent = 'Merci pour votre message. Nous vous contacterons bientôt!';
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            // Faire disparaître le message après 5 secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.className = 'form-message';
            }, 5000);
        });
    }

    // Formulaire de réservation dans la modale
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Votre réservation a été envoyée avec succès! Nous vous contacterons pour confirmation.');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            reservationForm.reset();
        });
    }

    // Formulaire newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci de votre inscription à notre newsletter!');
            this.reset();
        });
    }

    // ==================== MISE À JOUR DE L'ANNÉE DANS LE FOOTER ====================
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
    }
});

// ==================== LIVE CHAT FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    const liveChatButton = document.getElementById('liveChatButton');
    const chatModal = document.getElementById('liveChatModal');
    const closeChat = document.querySelector('.close-chat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const quickReplies = document.querySelectorAll('.quick-reply');

    // Open chat modal
    if (liveChatButton) {
        liveChatButton.addEventListener('click', function() {
            chatModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Scroll to bottom of chat
            setTimeout(() => {
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 100);
        });
    }

    // Close chat modal
    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == chatModal) {
            chatModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Send message function
    function sendMessage(message, isUser = true) {
        if (!message.trim()) return;

        // Add user message
        if (isUser) {
            const userDiv = document.createElement('div');
            userDiv.className = 'chat-message user-message';
            userDiv.innerHTML = `
                <div class="message-content">
                    <strong>Vous</strong>
                    <p>${escapeHtml(message)}</p>
                </div>
            `;
            chatBody.appendChild(userDiv);
        }

        // Simulate bot response after a short delay
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.className = 'chat-message bot-message';
            
            // Generate bot response based on user message
            let botResponse = getBotResponse(message);
            
            botDiv.innerHTML = `
                <div class="message-content">
                    <strong>TTB_KING Support</strong>
                    <p>${botResponse}</p>
                </div>
            `;
            chatBody.appendChild(botDiv);
            
            // Scroll to bottom
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);

        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Generate bot response based on user message
    function getBotResponse(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello')) {
            return 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?';
        }
        else if (msg.includes('véhicule') || msg.includes('voiture') || msg.includes('location') || msg.includes('prix')) {
            return 'Nos véhicules commencent à 25 000 FCFA par jour. Nous avons des berlines, 4x4 et utilitaires. Souhaitez-vous plus d\'informations sur un modèle spécifique ?';
        }
        else if (msg.includes('guest house') || msg.includes('hébergement') || msg.includes('logement')) {
            return 'Nos guest houses sont équipées du WiFi, de la climatisation et d\'une cuisine. Les tarifs commencent à 35 000 FCFA par nuit. Voulez-vous réserver ?';
        }
        else if (msg.includes('déménagement') || msg.includes('demenagement')) {
            return 'Nous proposons des services de déménagement complets avec notre équipe professionnelle. Demandez un devis gratuit !';
        }
        else if (msg.includes('contact') || msg.includes('téléphone') || msg.includes('appeler')) {
            return 'Vous pouvez nous joindre au +229 01 66 23 28 88 ou nous envoyer un email à augustin46@gmail.com';
        }
        else if (msg.includes('merci')) {
            return 'Merci à vous ! N\'hésitez pas si vous avez d\'autres questions.';
        }
        else {
            return 'Merci pour votre message. Un de nos conseillers vous répondra dans les plus brefs délais. En attendant, puis-je vous aider avec autre chose ?';
        }
    }

    // Handle form submission
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                sendMessage(message);
            }
        });
    }

    // Handle quick replies
    quickReplies.forEach(reply => {
        reply.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            sendMessage(message);
        });
    });

    // Handle Enter key
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const message = this.value.trim();
                if (message) {
                    sendMessage(message);
                }
            }
        });
    }

    // Add initial bot message with typing effect
    function addInitialMessage() {
        const botDiv = document.createElement('div');
        botDiv.className = 'chat-message bot-message';
        botDiv.innerHTML = `
            <div class="message-content">
                <strong>TTB_KING Support</strong>
                <p>Bonjour ! Bienvenue chez TTB_KING Location. Comment puis-je vous aider aujourd'hui ?</p>
            </div>
        `;
        chatBody.appendChild(botDiv);
    }

    // Clear existing messages and add initial message when modal opens
    if (liveChatButton) {
        liveChatButton.addEventListener('click', function() {
            // Clear chat body except initial message
            while (chatBody.firstChild) {
                chatBody.removeChild(chatBody.firstChild);
            }
            addInitialMessage();
        });
    }
});


// ==================== GUEST HOUSES GALLERY ====================
document.addEventListener('DOMContentLoaded', function() {
    const guestHousesGrid = document.getElementById('guestHousesGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const viewMoreBtn = document.getElementById('viewMoreGuestHouses');
    
    // Sample guest houses data (replace with your actual data)
    const guestHouses = [
        {
            id: 1,
            name: 'Villa Océane',
            location: 'Cotonou, Fidjrossè',
            price: '75000',
            type: 'villa',
            rating: 4.8,
            reviews: 24,
            bedrooms: 4,
            bathrooms: 3,
            guests: 8,
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            amenities: ['wifi', 'climatisation', 'piscine', 'parking', 'cuisine'],
            description: 'Magnifique villa avec vue sur l\'océan, piscine privée et jardin tropical.',
            images: [
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            ]
        },
        {
            id: 2,
            name: 'Appartement Marina',
            location: 'Cotonou, Marina',
            price: '45000',
            type: 'appartement',
            rating: 4.6,
            reviews: 18,
            bedrooms: 2,
            bathrooms: 2,
            guests: 4,
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            amenities: ['wifi', 'climatisation', 'parking', 'cuisine'],
            description: 'Bel appartement moderne au cœur de la Marina, proche des commerces et restaurants.',
            images: [
                'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            ]
        },
        {
            id: 3,
            name: 'Studio Cocotiers',
            location: 'Cotonou, Cocotiers',
            price: '25000',
            type: 'studio',
            rating: 4.5,
            reviews: 12,
            bedrooms: 1,
            bathrooms: 1,
            guests: 2,
            image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            amenities: ['wifi', 'climatisation', 'cuisine'],
            description: 'Studio cozy et fonctionnel, idéal pour les courts séjours.',
            images: [
                'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            ]
        },
        {
            id: 4,
            name: 'Villa des Fleurs',
            location: 'Cotonou, Cadjehoun',
            price: '85000',
            type: 'villa',
            rating: 4.9,
            reviews: 32,
            bedrooms: 5,
            bathrooms: 4,
            guests: 10,
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            amenities: ['wifi', 'climatisation', 'piscine', 'parking', 'cuisine', 'jardin'],
            description: 'Superbe villa avec grand jardin, piscine et espace barbecue.',
            images: [
                'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            ]
        },
        {
            id: 5,
            name: 'Appartement Haie Vive',
            location: 'Cotonou, Haie Vive',
            price: '55000',
            type: 'appartement',
            rating: 4.7,
            reviews: 21,
            bedrooms: 3,
            bathrooms: 2,
            guests: 6,
            image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            amenities: ['wifi', 'climatisation', 'parking', 'cuisine', 'balcon'],
            description: 'Appartement spacieux avec grand balcon, vue sur la ville.',
            images: [
                'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            ]
        },
        {
            id: 6,
            name: 'Studio Plage',
            location: 'Cotonou, Fidjrossè Plage',
            price: '30000',
            type: 'studio',
            rating: 4.4,
            reviews: 15,
            bedrooms: 1,
            bathrooms: 1,
            guests: 2,
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            amenities: ['wifi', 'climatisation', 'cuisine', 'vue mer'],
            description: 'Studio pied dans l\'eau, accès direct à la plage.',
            images: [
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            ]
        },
        
        {
            id: 7,
            name: 'Villa Océane',
            location: 'Porto-Novo, PK15',
            price: '75000',
            type: 'villa',
            rating: 4.8,
            reviews: 24,
            bedrooms: 4,
            bathrooms: 3,
            guests: 8,
            image: 'g1.jpg',
            amenities: ['wifi', 'climatisation', 'piscine', 'parking', 'cuisine'],
            description: 'Magnifique villa avec vue sur l\'océan, piscine privée et jardin tropical.',
            images: [
                'g2.jpg',
                'g3.jpg',
                'g4.jpg',
                'g5.jpg'
            ]
        }
    ];

    let currentFilter = 'all';
    let visibleCount = 3; // Show 3 initially

    // Function to create guest house card
    function createGuestHouseCard(house) {
        const amenitiesIcons = {
            wifi: 'fa-wifi',
            climatisation: 'fa-snowflake',
            piscine: 'fa-swimmer',
            parking: 'fa-parking',
            cuisine: 'fa-utensils',
            jardin: 'fa-tree',
            balcon: 'fa-home',
            'vue mer': 'fa-water'
        };

        const amenitiesHtml = house.amenities.slice(0, 3).map(amenity => 
            `<span><i class="fas ${amenitiesIcons[amenity] || 'fa-check'}"></i> ${amenity}</span>`
        ).join('');

        return `
            <div class="guest-house-card" data-type="${house.type}">
                <div class="guest-house-badge">${house.type === 'villa' ? '⭐ Luxe' : house.type === 'appartement' ? '🏢 Moderne' : '🔑 Cozy'}</div>
                <div class="guest-house-image">
                    <img src="${house.image}" alt="${house.name}">
                    <div class="image-overlay">
                        <button class="btn-view" onclick="viewGuestHouseDetails(${house.id})">Voir détails</button>
                    </div>
                </div>
                <div class="guest-house-info">
                    <h3>${house.name}</h3>
                    <div class="guest-house-location">
                        <i class="fas fa-map-marker-alt"></i> ${house.location}
                    </div>
                    <div class="guest-house-rating">
                        <div class="stars">
                            ${Array(5).fill().map((_, i) => 
                                `<i class="fas fa-star${i < Math.floor(house.rating) ? '' : i < house.rating ? '-half-alt' : '-o'}"></i>`
                            ).join('')}
                        </div>
                        <span class="rating-count">(${house.reviews} avis)</span>
                    </div>
                    <div class="guest-house-price">
                        ${house.price} FCFA <span>/nuit</span>
                    </div>
                    <div class="guest-house-amenities">
                        ${amenitiesHtml}
                        ${house.amenities.length > 3 ? `<span>+${house.amenities.length - 3}</span>` : ''}
                    </div>
                    <div class="guest-house-buttons">
                        <a href="#" class="btn-details" onclick="event.preventDefault(); viewGuestHouseDetails(${house.id})">Détails</a>
                        <a href="#reservation" class="btn-book reservation-trigger">Réserver</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to filter and display guest houses
    function displayGuestHouses(filter = 'all', count = visibleCount) {
        if (!guestHousesGrid) return;
        
        const filtered = filter === 'all' 
            ? guestHouses 
            : guestHouses.filter(house => house.type === filter);
        
        const housesToShow = filtered.slice(0, count);
        
        guestHousesGrid.innerHTML = housesToShow.map(house => createGuestHouseCard(house)).join('');
        
        // Hide view more button if all houses are shown
        if (viewMoreBtn) {
            viewMoreBtn.style.display = filtered.length <= count ? 'none' : 'inline-block';
        }
    }

    // Filter buttons functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            visibleCount = 3; // Reset visible count
            displayGuestHouses(currentFilter, visibleCount);
        });
    });

    // View more button functionality
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            visibleCount += 3;
            displayGuestHouses(currentFilter, visibleCount);
        });
    }

    // Initial display
    displayGuestHouses();

    // ==================== GUEST HOUSE DETAILS MODAL ====================
    // Create modal if it doesn't exist
    if (!document.getElementById('guestDetailsModal')) {
        const modalHtml = `
            <div id="guestDetailsModal" class="guest-details-modal">
                <div class="guest-details-content">
                    <div class="guest-details-header">
                        <img id="modalMainImage" src="" alt="Guest House">
                        <span class="close-details">&times;</span>
                    </div>
                    <div class="guest-details-body" id="modalBody">
                        <!-- Content will be filled by JavaScript -->
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // Make viewGuestHouseDetails function global
    window.viewGuestHouseDetails = function(id) {
        const house = guestHouses.find(h => h.id === id);
        if (!house) return;

        const modal = document.getElementById('guestDetailsModal');
        const modalMainImage = document.getElementById('modalMainImage');
        const modalBody = document.getElementById('modalBody');
        const closeDetails = document.querySelector('.close-details');

        // Set main image
        modalMainImage.src = house.image;

        // Create amenities list
        const amenitiesList = house.amenities.map(a => 
            `<li><i class="fas fa-check-circle" style="color: var(--primary-color);"></i> ${a.charAt(0).toUpperCase() + a.slice(1)}</li>`
        ).join('');

        // Create thumbnails
        const thumbnails = house.images.map((img, index) => `
            <div class="gallery-thumbnail" onclick="document.getElementById('modalMainImage').src='${img}'">
                <img src="${img}" alt="Gallery ${index + 1}">
            </div>
        `).join('');

        modalBody.innerHTML = `
            <div class="guest-details-title">
                <h2>${house.name}</h2>
                <div class="guest-details-price">${house.price} FCFA <span>/nuit</span></div>
            </div>
            
            <div class="guest-house-location">
                <i class="fas fa-map-marker-alt"></i> ${house.location}
            </div>
            
            <div class="guest-house-rating">
                <div class="stars">
                    ${Array(5).fill().map((_, i) => 
                        `<i class="fas fa-star${i < Math.floor(house.rating) ? '' : i < house.rating ? '-half-alt' : '-o'}"></i>`
                    ).join('')}
                </div>
                <span class="rating-count">${house.rating} (${house.reviews} avis)</span>
            </div>
            
            <p style="margin: 1rem 0; line-height: 1.6;">${house.description}</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 1rem 0;">
                <div><i class="fas fa-bed" style="color: var(--primary-color);"></i> ${house.bedrooms} chambres</div>
                <div><i class="fas fa-bath" style="color: var(--primary-color);"></i> ${house.bathrooms} salles de bain</div>
                <div><i class="fas fa-users" style="color: var(--primary-color);"></i> ${house.guests} personnes max</div>
            </div>
            
            <h3 style="margin: 1.5rem 0 1rem;">Équipements</h3>
            <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; list-style: none;">
                ${amenitiesList}
            </ul>
            
            <h3 style="margin: 1.5rem 0 1rem;">Galerie</h3>
            <div class="gallery-thumbnails">
                ${thumbnails}
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <a href="#reservation" class="btn-primary reservation-trigger" style="flex: 1; text-align: center;">Réserver maintenant</a>
                <button class="btn-secondary close-details-btn" style="flex: 1;">Fermer</button>
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Close modal functionality
        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        closeDetails.onclick = closeModal;
        
        const closeBtn = modalBody.querySelector('.close-details-btn');
        if (closeBtn) closeBtn.onclick = closeModal;

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        };
    };

});



