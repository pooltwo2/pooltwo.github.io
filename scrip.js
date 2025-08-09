// curriculum/scrip.js


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.profile-container').classList.add('visible');
});



/* * Animación de los elementos de experiencia al hacer scroll */
    // Selecciona todos los elementos con la clase "exp-item"
    const expItems = document.querySelectorAll(".exp-item");
    document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".exp-item"); // Selecciona los elementos con la animación

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Agrega la clase para activar la animación
        }
        });
    },
    {
        root: null,
        rootMargin: "0px 0px -200px 0px", 
        threshold: 0,
    }
    );

    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".exp-item");

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate"); 
        } else {
            entry.target.classList.remove("animate");
        }
        });
    },
    {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0,
    }
    );

  elements.forEach((el) => observer.observe(el)); // Observa cada elemento
});


// What I'm working on seccion

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".text-flicker-in-glow");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                obs.unobserve(entry.target); // evita que se repita
            }
        });
    }, {
        root: null,           // viewport
        rootMargin: "0px 0px -50px 0px", // activa 200px antes de que salga
        threshold: 0
    });

    elements.forEach(el => observer.observe(el));
});



    window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const body = document.body;

    if (scrollY > 150) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
    });
    // Reproduce el video cuando está visible en la pantalla
    const video = document.querySelector("video");

    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        video.play(); // Reproduce el video cuando está visible
        } else {
        video.pause(); // Pausa el video cuando no está visible
        }
    });
    });

    observer.observe(video);




document.querySelectorAll('.box-img img').forEach(img => {
    img.addEventListener('click', function() {
        // Crea el overlay
        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-img-overlay';
        overlay.innerHTML = `<img src="${img.src}" alt="">`;
        document.body.appendChild(overlay);

        // Cierra al hacer click en el overlay
        overlay.addEventListener('click', function() {
            overlay.remove();
        });

        // Cierra al presionar Escape
        document.addEventListener('keydown', function escListener(e) {
            if (e.key === "Escape") {
                overlay.remove();
                document.removeEventListener('keydown', escListener);
            }
        });
    });
});
