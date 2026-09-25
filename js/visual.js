// Configuração salvo da escolha do modo
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  console.log("load", toggleBtn);

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
