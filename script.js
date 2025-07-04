// Show button on scroll
let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

// Scroll to top
scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
  } else {
    nav.style.boxShadow = "none";
  }
});


// Close mobile menu when a nav link is clicked
const navLinksMobile = document.querySelectorAll("nav ul li a");

navLinksMobile.forEach(link => {
  link.addEventListener("click", () => {
    // Only close if menu is currently active (mobile)
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });
});



// Close menu when clicking outside of it
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.getElementById("hamburger");

  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  }
});

