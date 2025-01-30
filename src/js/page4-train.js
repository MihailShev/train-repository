// const title = document.querySelector("h1");
// const wrap = document.querySelector(".wrap");
// const button = document.createElement("button");
// const newTitleText = "New Text";

// button.textContent = "Change text";

// wrap.append(button);

// button.addEventListener("click", () => (title.textContent = newTitleText));

const form = document.querySelector("form");
const listProducts = document.querySelector(".list-products");
const input = document.querySelector(".form-input");
const button = document.createElement("button");

button.textContent = "Add product";
form.append(button);

function addItemProductEl(text) {
  const item = document.createElement("li");
  item.textContent = text;
  listProducts.appendChild(item);
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  addItemProductEl(input.value);
});
