const inputNumberRef = document.querySelector("[type='number']");
const createBtnRef = document.querySelector("[data-action='render']");
const cleanBtnRef = document.querySelector("[data-action='destroy']");

const boxesHolder = document.getElementById("boxes");

// Добавление стилей боксам
boxesHolder.style.display = "flex";
boxesHolder.style.flexWrap = "wrap";
boxesHolder.style.alignItems = "center";

let amount = 0;

function createBoxes(amount) {
  const boxesCollection = [];

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
    box.style.margin = "10px";
    width += 10;
    height += 10;
    boxesCollection.push(box);
  }

  boxesHolder.append(...boxesCollection);
}

// Функция для удаления коллекции боксов
function destroyBoxes() {
  boxesHolder.innerHTML = "";
}

// Добавление слушателей событий
createBtnRef.addEventListener("click", () => (amount = +inputNumberRef.value));

// Создает необходимое количество боксов
createBtnRef.addEventListener("click", () => {
  createBoxes(amount);
});
// Очищает коллекцию боксов
cleanBtnRef.addEventListener("click", () => {
  destroyBoxes();
  inputNumberRef.value = 0;
});