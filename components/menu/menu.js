function setSvg(theme) {
    const svg = document.getElementById("THEME_ICON");
    if (theme === "light") {
      svg.setAttribute("data", "icons/sun.svg");
    } else {
      svg.setAttribute("data", "icons/moon.svg");
    }
  }
  
  function switchTheme() {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setSvg("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setSvg("light");
    }
  }
  
  document
    .getElementById("SWITCH_THEME_BTN")
    .addEventListener("click", switchTheme);
  
  window.addEventListener("load", function () {
    document.documentElement.setAttribute("data-theme", "light");
    setSvg("light");
  });