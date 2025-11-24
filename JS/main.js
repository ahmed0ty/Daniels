
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





























gsap.registerPlugin(ScrollTrigger);

gsap.from(".cont h1, .cont p, .cont a", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.2,
});


gsap.utils.toArray("section:not(.tab-pane)").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});


document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power1.out" });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, { scale: 1, duration: 0.3, ease: "power1.inOut" });
  });
});


function setActiveLink(id) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("section-active");
  });
  const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
  if (activeLink) activeLink.classList.add("section-active");
}


window.addEventListener("load", () => {
  setActiveLink("home");
});


gsap.utils.toArray("section:not(.tab-pane)").forEach(section => {
  let id = section.getAttribute("id");

  ScrollTrigger.create({
    trigger: section,
    start: "top 60%",
    end: "bottom 40%",
    onEnter: () => setActiveLink(id),
    onEnterBack: () => setActiveLink(id),
  });
});


document.querySelectorAll('#pills-tab button').forEach(btn => {
  btn.addEventListener('shown.bs.tab', e => {
    const targetId = e.target.getAttribute('data-bs-target');
    gsap.from(`${targetId} .col-inner`, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  });
});


document.querySelectorAll('.navbar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse, { toggle: true });
    }
  });
});






document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar");

    function animateBars() {
        bars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if(barTop < windowHeight && !bar.classList.contains("animated")) {
                bar.classList.add("animated");

                const target = parseInt(bar.getAttribute("data-target"));
                const span = bar.querySelector("span:last-child");

                let width = 0;
                span.textContent = "0%";

                function fill() {
                    if(width < target) {
                        width += 1;
                        bar.style.width = width + "%";
                        span.textContent = width + "%";
                        requestAnimationFrame(fill);
                    } else {
                        bar.style.width = target + "%";
                        span.textContent = target + "%";
                    }
                }

                requestAnimationFrame(fill);
            }
        });
    }

    window.addEventListener("scroll", animateBars);
    animateBars(); 
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








