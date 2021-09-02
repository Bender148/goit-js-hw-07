// Список ингридиентов
const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
  ];
  
  const ingredientsList = document.getElementById("ingredients");
  console.log(ingredientsList);
  
  const ingredientsItems = ingredients.map((el) => {
    const item = document.createElement("li");
    item.textContent = el;
    return item;
  });

  ingredientsList.append(...ingredientsItems);