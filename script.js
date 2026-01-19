document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Header Dinâmico
    let lastScroll = 0;
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove('-translate-y-full', 'shadow-lg');
            header.style.background = 'rgba(255, 255, 255, 0.7)';
        } else if (currentScroll > lastScroll && !document.getElementById('mobile-menu').classList.contains('flex')) {
            header.classList.add('-translate-y-full');
        } else {
            header.classList.remove('-translate-y-full');
            header.classList.add('shadow-lg');
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        lastScroll = currentScroll;
    });

    // Mobile Menu & Modal logic (mesmo código anterior...)
    const btn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); mobileMenu.classList.toggle('flex'); });

    const modal = document.getElementById('privacy-modal');
    const toggleModal = () => { modal.classList.toggle('hidden'); modal.classList.toggle('flex'); };
    document.getElementById('privacy-btn').addEventListener('click', (e) => { e.preventDefault(); toggleModal(); });
    document.getElementById('close-modal-btn').addEventListener('click', toggleModal);
    document.getElementById('close-modal-overlay').addEventListener('click', toggleModal);

    // --- DADOS DAS UNIDADES ---
    const units = [
        {
            name: "Unidade Santa Cruz",
            neighborhood: "Santa Cruz - Rio de Janeiro",
            address: "Est. Vasconcelos, 1 - Loja B, CEP 23.530-814",
            phone: "(21) 3309-3966",
            cnpj: "12.057.989/0002-30",
            email: "legalizacao.scgroup@gmail.com",
            imgId: 1
        },
        {
            name: "Unidade Sepetiba I",
            neighborhood: "Sepetiba - Rio de Janeiro",
            address: "Est. de Sepetiba, 5775, CEP 23.545-003",
            phone: "(21) 2583-4263",
            cnpj: "12.235.692/0001-36",
            email: "contato@redehiperdrogas.com.br",
            imgId: 2
        },
        {
            name: "Unidade Guaratiba (Magarça)",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. do Magarça, 2795 - Loja B, CEP 23.035-380",
            phone: "(21) 3271-6675",
            cnpj: "13.260.414/0001-00",
            email: "contato@redehiperdrogas.com.br",
            imgId: 3
        },
        {
            name: "Unidade Campo Grande",
            neighborhood: "Campo Grande - Rio de Janeiro",
            address: "Est. Cachamorra, 409 - Loja A, CEP 23.040-151",
            phone: "(21) 2222-2222",
            cnpj: "12.057.989/0008-25",
            email: "departamentolegalfarma@outlook.com",
            imgId: 4
        },
        {
            name: "Unidade Guaratiba (Ilha)",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Ilha, 2130, CEP 23.020-230",
            phone: "(21) 2222-2222",
            cnpj: "12.057.989/0007-44",
            email: "departamentolegalfarma@outlook.com",
            imgId: 5
        },
        {
            name: "Unidade Guaratiba (Matriz)",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Matriz, SN - Lt 25 Qd 258, CEP 23.020-715",
            phone: "(21) 3309-3966",
            cnpj: "12.661.254/0001-30",
            email: "legalizacao.scgroup@gmail.com",
            imgId: 6
        },
        {
            name: "Unidade Sepetiba II (Piaí)",
            neighborhood: "Sepetiba - Rio de Janeiro",
            address: "Est. do Piaí, 4672 A - Loja D, CEP 23.530-610",
            phone: "(21) 2408-8020",
            cnpj: "09.026.944/0001-02",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 7
        },
        {
            name: "Unidade Guaratiba (Pedra 1)",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Pedra, 4953 - Loja B, CEP 23.030-380",
            phone: "(21) 2408-8020",
            cnpj: "12.057.989/0001-59",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 8
        },
        {
            name: "Unidade Sepetiba III",
            neighborhood: "Sepetiba - Rio de Janeiro",
            address: "R. Jose Fernandes, 1860 - Loja A, CEP 23.535-450",
            phone: "(21) 9999-9999",
            cnpj: "12.057.989/0006-63",
            email: "departamentolegalfarma@outlook.com",
            imgId: 9
        },
        {
            name: "Unidade Pedra de Guaratiba",
            neighborhood: "Pedra de Guaratiba - Rio de Janeiro",
            address: "Est. da Matriz, 000 - Lt 1 Qd 135 Loja A, CEP 23.545-323",
            phone: "(21) 2635-4903",
            cnpj: "12.057.989/0005-82",
            email: "legal@farmacon.com.br",
            imgId: 10
        },
        {
            name: "Unidade Guaratiba (Pilar)",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Av. Pilar do Sul, 313 - Lt 3 Qd 12, CEP 23.033-160",
            phone: "(21) 2408-8020",
            cnpj: "12.057.989/0004-00",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 11
        },
        {
            name: "Unidade Guaratiba (Pedra 2)",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Pedra, 7128 - Loja B C, CEP 23.030-380",
            phone: "(21) 2408-8020",
            cnpj: "12.057.989/0003-10",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 12
        }
    ];

    let currentIndex = 0;
    const renderUnit = (index) => {
        const unit = units[index];
        const infoDiv = document.getElementById('unit-info');
        const mapFrame = document.getElementById('map-frame');
        const unitImage = document.getElementById('unit-image');
        const phoneLink = document.getElementById('unit-phone');
        
        infoDiv.style.opacity = '0.5'; 
        unitImage.style.opacity = '0';
        
        setTimeout(() => {
            document.getElementById('unit-index').textContent = index + 1;
            document.getElementById('unit-name').textContent = unit.name;
            document.getElementById('unit-neighborhood').innerHTML = `<span class="w-2 h-2 rounded-full bg-ultraYellow inline-block mr-2"></span> ${unit.neighborhood}`;
            document.getElementById('unit-address').textContent = unit.address;
            
            const cleanPhone = unit.phone.replace(/\D/g, '');
            
            phoneLink.innerHTML = `${unit.phone} <i data-lucide="external-link" class="w-3 h-3 ml-1 opacity-50"></i>`;
            phoneLink.href = `https://wa.me/55${cleanPhone}`;
            
            lucide.createIcons();

            document.getElementById('unit-cnpj').textContent = unit.cnpj;
            document.getElementById('unit-email').textContent = unit.email;
            
            const mapQuery = encodeURIComponent(unit.address + ", Rio de Janeiro");
            mapFrame.src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
            
            const newImgSrc = `img/unidade_${unit.imgId}.jpg`;
            unitImage.onload = () => {
                unitImage.style.opacity = '1';
            };
            unitImage.src = newImgSrc;

            infoDiv.style.opacity = '1';
            
        }, 300);
    };


    document.getElementById('next-unit').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % units.length;
        renderUnit(currentIndex);
    });

    document.getElementById('prev-unit').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + units.length) % units.length;
        renderUnit(currentIndex);
    });

    renderUnit(0);

    const initGalleryCarousel = () => {
        const track = document.getElementById('gallery-track');
        const dotsContainer = document.getElementById('gallery-dots');
        const totalImages = 12;
        let currentSlide = 0;
        let autoPlayInterval;

        for (let i = 1; i <= totalImages; i++) {
            const unitName = units[i-1] ? units[i-1].name : "Ultra Popular RJ";

            const slide = document.createElement('div');
            slide.className = 'w-full h-full flex-shrink-0 relative';
            slide.innerHTML = `
                <img src="img/galeria_${i}.jpg" alt="Foto ${unitName}" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute bottom-0 left-0 p-4 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                    <span class="text-white text-lg md:text-xl font-bold tracking-wide flex items-center gap-2">
                        <i data-lucide="map-pin" class="w-4 h-4 text-ultraYellow"></i>
                        ${unitName}
                    </span>
                </div>
            `;
            track.appendChild(slide);

            const dot = document.createElement('button');
            dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-ultraYellow w-8' : 'bg-white/50 hover:bg-white'}`;
            dot.ariaLabel = `Ir para unidade ${unitName}`;
            dot.addEventListener('click', () => goToSlide(i - 1));
            dotsContainer.appendChild(dot);
        }
        
        lucide.createIcons();

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            const dots = dotsContainer.children;
            Array.from(dots).forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.className = 'w-8 h-2.5 rounded-full bg-ultraYellow transition-all duration-300';
                } else {
                    dot.className = 'w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-all duration-300';
                }
            });
        };

        const goToSlide = (index) => {
            if (index < 0) {
                currentSlide = totalImages - 1;
            } else if (index >= totalImages) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }
            updateCarousel();
        };

        const nextSlide = () => goToSlide(currentSlide + 1);
        const prevSlide = () => goToSlide(currentSlide - 1);

        document.getElementById('gallery-next').addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });

        document.getElementById('gallery-prev').addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });

        const startTimer = () => {
            autoPlayInterval = setInterval(nextSlide, 4000);
        };

        const resetTimer = () => {
            clearInterval(autoPlayInterval);
            startTimer();
        };

        track.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        track.parentElement.addEventListener('mouseleave', startTimer);

        startTimer();
    };

    initGalleryCarousel();
});