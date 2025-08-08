const sections = document.querySelectorAll('.info-section, .info-sectionTwo, .info-sectionthree');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });


        const hamburger = document.querySelector(".hamburger");
        const nav = document.querySelector('.nav');

        hamburger.addEventListener('click', ()=> {nav.classList.toggle('active');});