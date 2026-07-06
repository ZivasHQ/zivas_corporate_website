// Theme toggle — persisted, matches system preference on first visit
(function initTheme() {
  const stored = localStorage.getItem("zivas-marketing-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
})();

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("zivas-marketing-theme", isDark ? "dark" : "light");
  document.querySelectorAll("[data-theme-icon]").forEach((el) => {
    el.textContent = isDark ? "☀️" : "🌙";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });

  const isDark = document.documentElement.classList.contains("dark");
  document.querySelectorAll("[data-theme-icon]").forEach((el) => {
    el.textContent = isDark ? "☀️" : "🌙";
  });

  // Mobile nav
  const mobileToggle = document.querySelector("[data-mobile-nav-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-nav-menu]");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"))
    );
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // Demo request form — no backend attached yet, so this opens the visitor's
  // email client pre-filled. Swap this for a real endpoint (Formspree, your
  // own backend, etc.) once you're ready to collect these properly.
  const form = document.querySelector("[data-demo-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      const institution = form.institution.value;
      const message = form.message.value;
      const subject = encodeURIComponent(`Demo request — ${institution || name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInstitution: ${institution}\n\n${message}`
      );
      window.location.href = `mailto:hello@zivas.app?subject=${subject}&body=${body}`;
    });
  }
});
 
