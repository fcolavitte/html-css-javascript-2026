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

// localStorage sirve para: Almacenar (leer/escribir) variables/estructuras tipo clave-valor en forma local en la computadora y así poder guardar configuraciones de todo tipo incluso habiendo cerrado la pestaña. En este caso lo usé para guardar el tema seleccionado.