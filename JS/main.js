       
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){ 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
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


  gsap.utils.toArray("section").forEach(section => {
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

