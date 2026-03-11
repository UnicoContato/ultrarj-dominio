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
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Santa Cruz - Rio de Janeiro",
            address: "Est. Vasconcelos, 480 - Loja B, CEP 23.530-814",
            phone: "(21) 3309-3966",
            cnpj: "12.057.989/0002-30",
            email: "legalizacao.scgroup@gmail.com",
            imgId: 1,
            iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d892.2990686869279!2d-43.69069281644765!3d-22.958266011157118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf09486f42417%3A0xbf2f4e98fc928c65!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20Nova%20Sepetiba!5e0!3m2!1sen!2sus!4v1769006208748!5m2!1sen!2sus"
        },
        {
            name: "Unidade Sepetiba I",
            razao: "FARMACIA DIAS DE SEPETIBA LTDA - ME",
            neighborhood: "Sepetiba - Rio de Janeiro",
            address: "Est. de Sepetiba, 5775, CEP 23.545-003",
            phone: "(21) 2583-4263",
            cnpj: "12.235.692/0001-36",
            email: "contato@redehiperdrogas.com.br",
            imgId: 2,
            iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d772.2634141902585!2d-43.706235176461895!3d-22.967729435035416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf0d0f27f1439%3A0x7bd1161ad9131290!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20Sepetiba!5e0!3m2!1spt-BR!2sbr!4v1769006287634!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Guaratiba (Magarça)",
            razao: "DROGARIAS DIAS DO MAGARCA LTDA",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. do Magarça, 2795 - Loja B, CEP 23.035-380",
            phone: "(21) 3271-6675",
            cnpj: "13.260.414/0001-00",
            email: "contato@redehiperdrogas.com.br",
            imgId: 3,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.4973874466574!2d-43.598775750290706!3d-22.946646214655424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be5a784de3625%3A0xcc02267b666d53a0!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20Magar%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1769006338353!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Campo Grande",
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Campo Grande - Rio de Janeiro",
            address: "Est. Cachamorra, 409 - Loja A, CEP 23.040-151",
            phone: "(21) 2222-2222",
            cnpj: "12.057.989/0008-25",
            email: "departamentolegalfarma@outlook.com",
            imgId: 4,
            iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1092.2427036963065!2d-43.57596663935559!3d-22.955680899674203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be5306448e6a3%3A0x9ba479f385f3afef!2sDrogaria%20Ultra%20Popular%20-%20Cachamorra%20I%20Farm%C3%A1cia%20Delivery!5e0!3m2!1spt-BR!2sbr!4v1769006376615!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Guaratiba (Ilha)",
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Ilha, 2130, CEP 23.020-230",
            phone: "(21) 2222-2222",
            cnpj: "12.057.989/0007-44",
            email: "departamentolegalfarma@outlook.com",
            imgId: 5,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.4798387318738!2d-43.55417755228649!3d-22.988510199541505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be9c044c9418b%3A0xc8010ad2674b3b3f!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20Ilha%20de%20Guaratiba!5e0!3m2!1spt-BR!2sbr!4v1769005644972!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Guaratiba (Matriz)",
            razao: "FARMACIA DIAS DE GUARATIBA LTDA",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Matriz, 2275 - Lt 25 Qd 258, CEP 23.020-715",
            phone: "(21) 3309-3966",
            cnpj: "12.661.254/0001-30",
            email: "legalizacao.scgroup@gmail.com",
            imgId: 6,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.2355374327065!2d-43.6093943173489!3d-22.99321268897369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9befd48cb76fa1%3A0x891f4655ad6e376e!2sDrogarias%20Ultra%20Popular%20-%20Piraqu%C3%AA%20-%20Farm%C3%A1cia%20Delivery!5e0!3m2!1spt-BR!2sbr!4v1769005688865!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Sepetiba II (Piaí)",
            razao: "DROGARIA ATRATIVA DE SEPETIBA LTDA",
            neighborhood: "Sepetiba - Rio de Janeiro",
            address: "Est. do Piaí, 4672 A - Loja D, CEP 23.530-610",
            phone: "(21) 2408-8020",
            cnpj: "09.026.944/0001-02",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 7,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.2287135357899!2d-43.68997859995946!3d-22.97013456068905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf0ef58488f33%3A0x9735f9114a1fe12b!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20Sepetiba!5e0!3m2!1spt-BR!2sbr!4v1769006425931!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Guaratiba (Pedra 1)",
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Pedra, 4953 - Loja B, CEP 23.030-380",
            phone: "(21) 2408-8020",
            cnpj: "12.057.989/0001-59",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 8,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d693.1859165970367!2d-43.64825604860811!3d-22.976792902077168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf1711accec4d%3A0xa413c22607c5064!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20reta%20da%20Pedra%20de%20Guaratiba!5e0!3m2!1spt-BR!2sbr!4v1769006564696!5m2!1spt-BR!2sbr>"
        },
        {
            name: "Unidade Sepetiba III",
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Sepetiba - Rio de Janeiro",
            address: "R. Jose Fernandes, 1860 - Loja A, CEP 23.535-450",
            phone: "(21) 9999-9999",
            cnpj: "12.057.989/0006-63",
            email: "departamentolegalfarma@outlook.com",
            imgId: 9,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.7674875083036!2d-43.69392553812225!3d-22.974163198402323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf126c48708f7%3A0x625256ba75abfd45!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20Sepetiba!5e0!3m2!1spt-BR!2sbr!4v1769006030338!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Pedra de Guaratiba",
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Pedra de Guaratiba - Rio de Janeiro",
            address: "Est. da Matriz, 2034 - Lt 1 Qd 135 Loja A, CEP 23.545-323",
            phone: "(21) 2635-4903",
            cnpj: "12.057.989/0005-82",
            email: "legal@farmacon.com.br",
            imgId: 10,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.9241246942108!2d-43.61670524968636!3d-22.995104004961078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9befde0111d8b9%3A0x145645b1c7158c80!2sDrogarias%20Ultra%20Popular%20-%20Rua%20Larga%20Piraqu%C3%AA%20-%20Farm%C3%A1cia%20Delivery!5e0!3m2!1spt-BR!2sbr!4v1769006746955!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Guaratiba (Pilar)",
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Av. Pilar do Sul, 313 - Lt 3 Qd 12, CEP 23.033-160",
            phone: "(21) 2408-8020",
            cnpj: "12.057.989/0004-00",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 11,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.45282205471227!2d-43.60703243520844!3d-22.95548694527811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be56de0794b1d%3A0x99ea609e9dddd9c0!2sDrogarias%20Ultra%20Popular%20-%20Jardim%20Maravilha%20-%20Farm%C3%A1cia%20Delivery!5e0!3m2!1spt-BR!2sbr!4v1769006873381!5m2!1spt-BR!2sbr"
        },
        {
            name: "Unidade Guaratiba (Pedra 2)",
            razao: "DROGARIAS DIAS LIMA JH LTDA",
            neighborhood: "Guaratiba - Rio de Janeiro",
            address: "Est. da Pedra, 7128 - Loja B C, CEP 23.030-380",
            phone: "(21) 2408-8020",
            cnpj: "12.057.989/0003-10",
            email: "cristiano@redehiperdrogas.com.br",
            imgId: 12,
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.3311202554564!2d-43.651182912807926!3d-22.98485368109482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf030ecf25871%3A0x4d9341034d99b18a!2sDrogarias%20Ultra%20Popular%20-%20Farm%C3%A1cia%20Cabu%C3%ADs!5e0!3m2!1spt-BR!2sbr!4v1769006938932!5m2!1spt-BR!2sbr"
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
            
            mapFrame.src = unit.iframe;
            
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