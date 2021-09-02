// Разбивка на категории
const items = document.querySelectorAll(".item");
console.log(`В списке ${items.length} категории.`);

items.forEach((el) => {
  const titleText = el.querySelector("h2").textContent;
  const listItemsQuantity = el.querySelectorAll("li");

  console.log(`Категория: ${titleText}`);
  console.log(`Количество элементов: ${listItemsQuantity.length}`);
});