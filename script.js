const langBtn = document.querySelector("#langBtn");

let currentLang = "en";

const translations = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        welcome: "WELCOME TO MY WORLD",
        title: "Hi, I'm Firdavs.",
        subtitle: "Creative Learner & Future Designer",
        description: "I love technology, creative design and programming. My goal is to turn ideas into real projects.",
        myProjects: "My Projects ↗️",
        contactMe: "Contact Me",
        status: "✦ Always learning. Always building.",
        aboutLabel: "01 / ABOUT ME",
        aboutTitle: "Building my future.",
        aboutText: "I'm Firdavs. I'm learning English, digital design and programming. I want to create useful projects and improve my skills every day.",
        skillsLabel: "02 / MY SKILLS",
        skillsTitle: "What I'm learning",
        projectsLabel: "03 / MY PROJECTS",
        projectsTitle: "Ideas become reality.",
        contactLabel: "04 / CONTACT",
        contactTitle: "Let's connect.",
        contactText: "Have an idea? Let's make something amazing.",
        email: "Send an Email ↗️",
        footer: "© 2026 Firdavs | Built with passion."
    },
    uz: {
        home: "Bosh sahifa",
        about: "Men haqimda",
        skills: "Ko‘nikmalar",
        projects: "Loyihalar",
        contact: "Aloqa",
        welcome: "MENING OLAMIMGA XUSH KELIBSIZ",
        title: "Salom, men Firdavsman.",
        subtitle: "Bo‘lajak dizayner va ijodkor",
        description: "Men texnologiya, kreativ dizayn va dasturlashga qiziqaman. Maqsadim — g‘oyalarni haqiqiy loyihalarga aylantirish.",
        myProjects: "Loyihalarim ↗️",
        contactMe: "Bog‘lanish",
        status: "✦ Doim o‘rganaman. Doim yarataman.",
        aboutLabel: "01 / MEN HAQIMDA",
        aboutTitle: "Kelajagimni qurmoqdaman.",
        aboutText: "Men Firdavsman. Ingliz tili, raqamli dizayn va dasturlashni o‘rganyapman. Foydali loyihalar yaratib, har kuni rivojlanmoqchiman.",
        skillsLabel: "02 / KO‘NIKMALARIM",
        skillsTitle: "Nimalarni o‘rganyapman",
        projectsLabel: "03 / LOYIHALARIM",
        projectsTitle: "G‘oyalar haqiqatga aylanadi.",
        contactLabel: "04 / ALOQA",
        contactTitle: "Bog‘lanamiz.",
        contactText: "G‘oyangiz bormi? Keling, ajoyib narsa yarataylik.",
        email: "Email yuborish ↗️",
        footer: "© 2026 Firdavs | Mehr bilan yaratildi."
    }
};

const elements = {
    home: document.querySelector('nav a[href="#home"]'),
    about: document.querySelector('nav a[href="#about"]'),
    skills: document.querySelector('nav a[href="#skills"]'),
    projects: document.querySelector('nav a[href="#projects"]'),
    contact: document.querySelector('nav a[href="#contact"]'),
    welcome: document.querySelector(".eyebrow"),
    title: document.querySelector(".hero h1"),
    subtitle: document.querySelector(".hero h2"),
    description: document.querySelector(".description"),
    myProjects: document.querySelector(".primary"),
    contactMe: document.querySelector(".secondary"),
    status: document.querySelector(".status"),
    aboutLabel: document.querySelector("#about .eyebrow"),
    aboutTitle: document.querySelector("#about h2"),
    aboutText: document.querySelector("#about > p:last-child"),
    skillsLabel: document.querySelector("#skills .eyebrow"),
    skillsTitle: document.querySelector("#skills h2"),
    projectsLabel: document.querySelector("#projects .eyebrow"),
    projectsTitle: document.querySelector("#projects h2"),
    contactLabel: document.querySelector("#contact .eyebrow"),
    contactTitle: document.querySelector("#contact h2"),
    contactText: document.querySelector("#contact > p:not(.eyebrow)"),
    email: document.querySelector("#contact .btn"),
    footer: document.querySelector("footer")
};

function changeLanguage() {
    currentLang = currentLang === "en" ? "uz" : "en";
    const t = translations[currentLang];
for (const key in elements) {
        if (elements[key]) {
            elements[key].textContent = t[key];
        }
    }

    langBtn.textContent = currentLang === "en" ? "UZ" : "EN";
    document.documentElement.lang = currentLang;

    const avatarCaption = document.querySelector(".avatar > p");
    avatarCaption.textContent =
        currentLang === "en" ? "CREATIVE MIND ✦" : "KREATIV FIKR ✦";
}

langBtn.addEventListener("click", changeLanguage);