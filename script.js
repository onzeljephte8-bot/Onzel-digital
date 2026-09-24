document.addEventListener("DOMContentLoaded", () => {

    // Animation douce des cartes
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -5;
            const rotateY = ((x / rect.width) - 0.5) * 5;

            card.style.transform =
                `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });


    // Animation du bouton principal
    const buttons = document.querySelectorAll(".primary-button");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-4px)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });

    });


    // Apparition des éléments pendant le scroll
    const elements = document.querySelectorAll(
        ".project-card, .stat, .skill, .about-title, .about-text"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


    // Petit effet sur le logo
    const logo = document.querySelector(".logo");

    logo.addEventListener("mouseenter", () => {
        logo.style.letterSpacing = "6px";
    });

    logo.addEventListener("mouseleave", () => {
        logo.style.letterSpacing = "4px";
    });


    console.log("ONZEL DIGITAL — SYSTEM ONLINE");
});
