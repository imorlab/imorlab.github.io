// Función para aplicar el tema oscuro
function applyDarkMode() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    // Si no hay tema guardado o es 'dark', aplicar modo oscuro
    document.documentElement.classList.add('dark')
  }
}

export { applyDarkMode }

