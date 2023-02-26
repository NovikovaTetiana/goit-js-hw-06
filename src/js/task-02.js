const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


for (const ingredient of ingredients) {
  const newElement = document.createElement("li");

  newElement.textContent = ingredient;

  newElement.classList.add("item");

  const itemEl = document.querySelector("ul#ingredients");

  console.log(itemEl.append(newElement));
}
