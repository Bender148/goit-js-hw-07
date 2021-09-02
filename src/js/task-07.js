// Доступ к тексту
const fsControlRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

// Функция для изменения шрифта
function updateFontSize() {
  textRef.style.fontSize = `${fsControlRef.value * 2}%`;
}

// Добавление слушателя события
fsControlRef.addEventListener("input", updateFontSize);