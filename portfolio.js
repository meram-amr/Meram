const toggle = document.querySelector(".mode-toggle");
const modeIcon = document.getElementById("modeIcon");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        modeIcon.classList.replace("fa-sun", "fa-moon");
    }
});

// Scroll Spy
const navItems = document.querySelectorAll(".navbar .content span");
const sections = document.querySelectorAll("section, .Home");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 100;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove("active");
                if (item.getAttribute("data-link") === sectionId) {
                    item.classList.add("active");
                }
            });
        }
    });
});

// Smooth scroll
navItems.forEach(item => {
    item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-link");
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
        } else {
            entry.target.classList.remove("animate-in");
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
    ".hero-content, .about-box, .project-box, .contact-box"
);

animatedElements.forEach(el => {
    el.classList.add("animate-element");
    observer.observe(el);
});

// Animate project boxes with delay
const projectBoxes = document.querySelectorAll(".project-box");
projectBoxes.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.15}s`;
});
