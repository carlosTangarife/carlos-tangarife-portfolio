/**
 * CARLOS TANGARIFE - PORTFOLIO
 * Interactive behaviors and animations
 */

// ====== Smooth Scroll for Navigation Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====== Navbar Background on Scroll ======
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 16px rgba(212, 175, 55, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ====== Mobile Menu Toggle ======
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ====== Animate Elements on Scroll (Intersection Observer) ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animatedElements = document.querySelectorAll('.impact-card, .timeline-item, .skill-category, .highlight-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ====== Contact Form Handling ======
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
        
        // TODO: Replace with actual form submission to backend/service
        // Example: 
        // try {
        //     const response = await fetch('/api/contact', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(formData)
        //     });
        //     if (response.ok) {
        //         alert('Message sent successfully!');
        //         contactForm.reset();
        //     }
        // } catch (error) {
        //     alert('Error sending message. Please try again.');
        // } finally {
        //     submitBtn.textContent = originalText;
        //     submitBtn.disabled = false;
        // }
    });
}

// ====== Number Counter Animation for Stats ======
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const isPercentage = target <= 100;
    const suffix = element.textContent.includes('%') ? '%' : 
                   element.textContent.includes('M') ? 'M' : 
                   element.textContent.includes('+') ? '+' : '';
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const displayValue = Math.floor(current);
        element.textContent = displayValue + suffix;
    }, 16);
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (!isNaN(number)) {
                animateCounter(entry.target, number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number, .impact-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ====== Add Cursor Glow Effect ======
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.style.position = 'fixed';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.width = '300px';
    glow.style.height = '300px';
    glow.style.borderRadius = '50%';
    glow.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)';
    glow.style.pointerEvents = 'none';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.zIndex = '0';
    glow.style.transition = 'opacity 0.3s ease';
    glow.classList.add('cursor-glow');
    
    document.body.appendChild(glow);
    
    setTimeout(() => {
        glow.style.opacity = '0';
        setTimeout(() => glow.remove(), 300);
    }, 100);
});

// ====== Typing Effect for Hero Title (Optional Enhancement) ======
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const heroAccent = document.querySelector('.hero-title-accent');
//     if (heroAccent) {
//         const originalText = heroAccent.textContent;
//         typeWriter(heroAccent, originalText, 50);
//     }
// });

// ====== Active Section Highlighting in Navigation ======
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ====== Dynamic Date Calculation for Current Job ======
const calculateJobDuration = () => {
    const timelineDate = document.querySelector('.timeline-date[data-start]');
    if (!timelineDate) return;
    
    const startDate = timelineDate.getAttribute('data-start'); // Format: "YYYY-MM"
    const [startYear, startMonth] = startDate.split('-').map(Number);
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // JavaScript months are 0-indexed
    
    // Calculate total months
    const totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    // Format duration string
    let durationText = '';
    if (years > 0 && months > 0) {
        durationText = ` (${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''})`;
    } else if (years > 0) {
        durationText = ` (${years} year${years > 1 ? 's' : ''})`;
    } else if (months > 0) {
        durationText = ` (${months} month${months > 1 ? 's' : ''})`;
    }
    
    // Get month names
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const startMonthName = monthNames[startMonth - 1];
    const currentMonthName = monthNames[currentMonth - 1];
    
    // Update the text
    timelineDate.textContent = `${startMonthName} ${startYear} - ${currentMonthName} ${currentYear}${durationText}`;
};

// Run on page load
window.addEventListener('load', calculateJobDuration);

// ====== Console Easter Egg ======
console.log('%c👋 Hello there, fellow developer!', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cInterested in working together?', 'color: #F4E5C3; font-size: 14px;');
console.log('%cLet\'s connect: carlos@carlostangarife.com', 'color: #E8E8E8; font-size: 12px;');
console.log('%c', 'font-size: 10px; padding: 20px; background: linear-gradient(90deg, #D4AF37 0%, #F4E5C3 100%);');

