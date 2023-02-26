const categoryEl = document.querySelectorAll("li.item");
const numberOfcategorias = categoryEl.length;
console.log(`Number of categories: ${numberOfcategorias}`);

categoryEl.forEach((element) => {
  const titleElement = element.firstElementChild;
  const allItems = element.lastElementChild.children;
  console.log(`Category:` , titleElement.textContent);
  console.log(`Elements:`, allItems.length);
});




