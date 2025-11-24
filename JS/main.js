
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});





const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link"); 

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinks.forEach(link => {
        link.classList.remove("section-active"); 

        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("section-active"); 
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});



window.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
        navLinks.forEach(link => link.classList.remove("section-active"));
        document.querySelector('.nav-link[href="#home"]').classList.add("section-active");
    }
});









document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("#client h2");

    function animateCounters() {
        counters.forEach(counter => {
            const top = counter.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if(top < windowHeight && !counter.classList.contains("counted")) {
                counter.classList.add("counted");
                const target = parseInt(counter.textContent.replace(/,/g, ""));
                let count = 0;

                function update() {
                    if(count < target) {
                        count += Math.ceil(target / 100); 
                        if(count > target) count = target;
                        counter.textContent = count.toLocaleString();
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                }

                requestAnimationFrame(update);
            }
        });
    }

    window.addEventListener("scroll", animateCounters);
    animateCounters(); 
});



const container = document.querySelector(".parallax-container");
const img = container.querySelector(".parallax-img");

container.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / container.offsetWidth - 0.5) * 30;
  const y = (e.offsetY / container.offsetHeight - 0.5) * 30;
  img.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
});

container.addEventListener("mouseleave", () => {
  img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
});



window.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.querySelector('.nav-link[href="#home"]');

  
    homeLink.classList.add("section-active", "home-white");
});

window.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
        homeLink.classList.add("home-white");
        homeLink.classList.remove("home-black");
    } else {
        homeLink.classList.remove("home-white");
        homeLink.classList.add("home-black");
    }
});




document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');

        
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
});








