// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for internal navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        if (this.hash !== "") {
          e.preventDefault();
          const hash = this.hash;
          document.querySelector(hash).scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    // Formspree success message (confirmation after submission)
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        })
          .then(response => {
            if (response.ok) {
              form.reset();
              alert("Thank you! We'll get back to you within 48 hours.");
            } else {
              alert("Oops! Something went wrong. Please try again.");
            }
          });
      });
    }
  
    // Testimonial carousel effect
    let current = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    if (testimonials.length > 0) {
      setInterval(() => {
        testimonials[current].classList.remove("active");
        current = (current + 1) % testimonials.length;
        testimonials[current].classList.add("active");
      }, 5000); // Change every 5 seconds
    }
  
    // Sticky navbar shrink effect
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
  