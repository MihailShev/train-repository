// Функция для изменения веса
function changeWeight(button, change) {
  let weightElement = button.parentNode.querySelector(".weight");
  let weight = parseFloat(weightElement.textContent);
  weight = Math.max(0, weight + change);
  weightElement.textContent = weight.toFixed(1);
  calculateTotal();
}

// Функция для подсчёта общей суммы
function calculateTotal() {
  let total = 0;
  document.querySelectorAll(".product").forEach(function (product) {
    let price = parseFloat(product.getAttribute("data-price"));
    let weight = parseFloat(product.querySelector(".weight").textContent);
    total += price * weight;
  });
  document.getElementById("order-summary").textContent =
    "Общая сумма: " + total.toFixed(2) + "USD";
}

// Функция для отображения формы заказа
function showForm() {
  document.getElementById("order-form").classList.remove("hidden");
}
