const counterRef = document.getElementById("value");
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

// Создание переменной для хранения текущего значения счетчика
let counterValue = +counterRef.textContent;

// Функция, увеличивающая значение счетчика
function increment() {
  counterValue += 1;
}

// Функция оставляющая значение равно 0
function decrement() {
  if (counterValue < 1) {
    counterValue = 0;
  } else {
    counterValue -= 1;
  }
}

//Добавление слушателей события на кнопки
incrementBtnRef.addEventListener("click", () => {
  increment();
  counterRef.textContent = counterValue;
});
decrementBtnRef.addEventListener("click", () => {
  decrement();
  counterRef.textContent = counterValue;
});