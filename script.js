function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Fly-in preloader with underline
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Remove preloader after letters settle and underline animation
  setTimeout(() => {
    preloader.style.transition = "opacity 1s ease";
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 1000);
  }, 4500); // total duration ~4.5s
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const profile = document.getElementById("profile");

  // Remove preloader after letters + underline animation
  setTimeout(() => {
    preloader.style.transition = "opacity 1s ease";
    preloader.style.opacity = "0";

    // Start profile pop-in just before preloader fully disappears
    setTimeout(() => {
      profile.classList.add("visible");
    }, 300); // starts 0.5s after fade starts (adjust as needed)

    setTimeout(() => {
      preloader.remove();
    }, 1000); // match fade-out duration
  }, 4000); // trigger fade-out slightly before underline completes
});
