/* ============================================
   RIYA SINGH PORTFOLIO – script.js
   GSAP Animations, Custom Cursor, Interactions
   ============================================ */

// ── Wait for DOM ──
document.addEventListener('DOMContentLoaded', () => {

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // ════════════════════════════════════════
    //  CUSTOM CURSOR
    // ════════════════════════════════════════
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (cursor && follower && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Cursor follows immediately
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;

            // Follower follows with delay
            followerX += (mouseX - followerX) * 0.08;
            followerY += (mouseY - followerY) * 0.08;
            follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, .btn, .project-card, .skill-category, .achievement-card, .cert-item');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                follower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                follower.classList.remove('hover');
            });
        });
    }

    // ════════════════════════════════════════
    //  NAVBAR
    // ════════════════════════════════════════
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile hamburger
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // ════════════════════════════════════════
    //  HERO CANVAS – Smoky wave background
    // ════════════════════════════════════════
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animFrameId;

        function resizeCanvas() {
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        }

        class SmokeParticle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 200 + 80;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.06 + 0.02;
                this.life = 0;
                this.maxLife = Math.random() * 400 + 200;
                // Slightly different tones
                const tones = [
                    [167, 139, 250],  // Purple accent
                    [100, 255, 218],  // Teal accent
                    [200, 200, 220],  // Light gray
                    [140, 140, 160],  // Mid gray
                ];
                this.color = tones[Math.floor(Math.random() * tones.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life++;

                // Sinusoidal drift
                this.x += Math.sin(this.life * 0.008) * 0.3;
                this.y += Math.cos(this.life * 0.006) * 0.2;

                if (this.life > this.maxLife || this.x < -this.size || this.x > width + this.size) {
                    this.reset();
                }
            }

            draw() {
                const progress = this.life / this.maxLife;
                let alpha = this.opacity;
                if (progress < 0.2) alpha *= progress / 0.2;
                if (progress > 0.7) alpha *= (1 - progress) / 0.3;

                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size
                );
                gradient.addColorStop(0, `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.max(8, Math.floor((width * height) / 80000));
            for (let i = 0; i < count; i++) {
                const p = new SmokeParticle();
                p.life = Math.random() * p.maxLife; // stagger start
                particles.push(p);
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animFrameId = requestAnimationFrame(animateCanvas);
        }

        resizeCanvas();
        initParticles();
        animateCanvas();

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
    }

    // ════════════════════════════════════════
    //  GSAP ENTRANCE ANIMATIONS
    // ════════════════════════════════════════

    // Hero animations (on load, not scroll-triggered)
    const heroElements = document.querySelectorAll('.hero .anim-fade-up');
    heroElements.forEach((el) => {
        const delay = parseFloat(el.dataset.delay) || 0;
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.3 + delay,
            ease: 'power3.out',
        });
    });

    // Scroll-triggered fade-up for all other sections
    const scrollElements = document.querySelectorAll('.section .anim-fade-up');
    scrollElements.forEach((el) => {
        const delay = parseFloat(el.dataset.delay) || 0;
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: 'power3.out',
        });
    });

    // ════════════════════════════════════════
    //  COUNTER ANIMATION (Stats)
    // ════════════════════════════════════════
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => {
        const target = parseInt(stat.dataset.target) || 0;

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            onEnter: () => {
                gsap.to(stat, {
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function () {
                        const progress = this.progress();
                        stat.textContent = Math.floor(target * progress);
                    },
                    onComplete: () => {
                        stat.textContent = target;
                    },
                });
            },
            once: true,
        });
    });

    // ════════════════════════════════════════
    //  SMOOTH ANCHOR SCROLLING
    // ════════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });

    // ════════════════════════════════════════
    //  PROJECT CARD TILT EFFECT
    // ════════════════════════════════════════
    if (window.innerWidth > 768) {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    // ════════════════════════════════════════
    //  SECTION DIVIDER ANIMATIONS
    // ════════════════════════════════════════
    // Animate section borders/dividers with subtle reveals
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 95%',
                toggleActions: 'play none none none',
            },
            opacity: 0.6,
            duration: 0.6,
            ease: 'power2.out',
        });
    });

    // ════════════════════════════════════════
    //  MARQUEE PAUSE ON HOVER
    // ════════════════════════════════════════
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        const marqueeContainer = document.querySelector('.marquee-container');
        marqueeContainer.addEventListener('mouseenter', () => {
            marqueeTrack.style.animationPlayState = 'paused';
        });
        marqueeContainer.addEventListener('mouseleave', () => {
            marqueeTrack.style.animationPlayState = 'running';
        });
    }

    // ════════════════════════════════════════
    //  NAVBAR ACTIVE STATE
    // ════════════════════════════════════════
    const sections = document.querySelectorAll('.section[id]');
    const navLinksList = document.querySelectorAll('.nav-link:not(.nav-cta)');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < bottom) {
                navLinksList.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ════════════════════════════════════════
    //  SKILL CARDS STAGGER
    // ════════════════════════════════════════
    gsap.utils.toArray('.skill-tag').forEach((tag, i) => {
        gsap.from(tag, {
            scrollTrigger: {
                trigger: tag.closest('.skill-category'),
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            delay: i * 0.03,
            ease: 'back.out(1.7)',
        });
    });

    // ════════════════════════════════════════
    //  CERTIFICATION ITEMS STAGGER
    // ════════════════════════════════════════
    gsap.utils.toArray('.cert-item').forEach((item, i) => {
        gsap.fromTo(item,
            { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
            {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 92%',
                    toggleActions: 'play none none none',
                },
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: i * 0.08,
                ease: 'power3.out',
            }
        );
    });

    // ════════════════════════════════════════
    //  PARALLAX HERO TEXT
    // ════════════════════════════════════════
    gsap.to('.hero-title', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
        y: -80,
        opacity: 0.3,
        ease: 'none',
    });

    gsap.to('.hero-badge', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
        y: -40,
        opacity: 0,
        ease: 'none',
    });

    // ════════════════════════════════════════
    //  CONTACT SECTION SPECIAL ENTRANCE
    // ════════════════════════════════════════
    gsap.fromTo('.contact-title',
        { opacity: 0, y: 60 },
        {
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
        }
    );

    const contactLinks = document.querySelectorAll('.contact-link-item');
    contactLinks.forEach((item, i) => {
        gsap.fromTo(item,
            { opacity: 0, y: 20 },
            {
                scrollTrigger: {
                    trigger: '.contact-buttons',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power3.out',
            }
        );
    });

}); // end DOMContentLoaded
