// دالة تغيير الثيم
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  let themeBtn = document.querySelector(".theme-toggle");
  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}
window.onload = () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.querySelector(".theme-toggle").textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    document.querySelector(".theme-toggle").textContent = "🌙";
  }
};

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
}
