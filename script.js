let themeIcon = document.getElementById("theme-icon");
themeIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.src = "images/sun.png";
  } else {
    themeIcon.src = "images/moon.png";
  }
};
