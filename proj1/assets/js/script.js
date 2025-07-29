document.querySelectorAll('.nav-card').forEach((card, index) => {
            card.style.animation = `fadeInUp 0.8s ease-out ${0.4 + (index * 0.1)}s both`;
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });