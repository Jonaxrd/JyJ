
// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ==========================================
// MENÚ MÓVIL
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", isOpen);

    });

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// ==========================================
// COMPARTIR INVITACIÓN POR WHATSAPP
// ==========================================

const whatsappButton = document.getElementById("whatsappShare");

if (whatsappButton) {

    const invitationUrl = window.location.href.split("#")[0];

    const message =
        "¡Hola! Queremos compartir contigo nuestra invitación de boda. " +
        "Nos encantaría que nos acompañaras en este día tan especial. " +
        "Puedes consultar todos los detalles aquí: " +
        invitationUrl;

    const whatsappUrl =
        "https://wa.me/?text=" + encodeURIComponent(message);

    whatsappButton.href = whatsappUrl;

}
