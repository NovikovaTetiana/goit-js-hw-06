const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemEl = document.querySelector("ul#ingredients");

let newArrayIngrediends = [];

for (const ingredient of ingredients) {
  const newElement = document.createElement("li");

  newElement.textContent = ingredient;

  newElement.classList.add("item");

  newArrayIngrediends.push(newElement);

  console.log(itemEl.append(...newArrayIngrediends));
}
