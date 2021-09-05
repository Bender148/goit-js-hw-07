const inputNameRef = document.getElementById("name-input");
const outputNameRef = document.getElementById("name-output");

// Функция для обновления содержимого в поле ввода
function updateGreeting() {
  outputNameRef.textContent = inputNameRef.value || "незнакомец";
}

// Добавление слушателя события
inputNameRef.addEventListener("input", updateGreeting);