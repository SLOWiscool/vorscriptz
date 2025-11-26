// Fade-in scroll animations
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  { threshold: 0.3 }
);

sections.forEach((s) => observer.observe(s));

// Parallax header movement
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.4;
  header.style.backgroundPositionY = `${offset}px`;
});

// Glow pulse on title
const title = document.querySelector("header h1");
setInterval(() => {
  title.style.textShadow =
    `0 0 ${20 + Math.random() * 40}px #ff4fd8`;
}, 700);
