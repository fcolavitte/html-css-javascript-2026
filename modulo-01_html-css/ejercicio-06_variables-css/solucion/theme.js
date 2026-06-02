const toggleButton = document.getElementById("theme-toggle");

document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));

toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  
  // Update the root attribute
  document.documentElement.setAttribute("data-theme", targetTheme);
  console.log(targetTheme);
  localStorage.setItem("theme", targetTheme)
});