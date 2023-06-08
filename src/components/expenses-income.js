import STORE from "../store.js";
import DOMHandler from "../dom-handler.js";
import { deleteCategory } from "../services/categories-service.js";

function calcTotal(transactions) {
  return transactions.reduce((acum, current) => acum + current.amount, 0);
}

function renderCategory(category) {
  return `
    <li>
      <p>${category.name}</p>
      <p>${calcTotal(category.transactions)}</p>
      <a data-id=${category.id}>Delete</a>
    </li>
  `;
}

function render() {
  const categories = STORE.currentCategories();
  return `
    <h2>${STORE.currentTab === "expense" ? "Expense" : "Income"}</h2>
    <ul class="js-category-list">
      ${categories.map(renderCategory).join("")}
    </ul>
  `;
}

function listenTrash() {
  const ul = document.querySelector(".js-category-list");

  ul.addEventListener("click", async (event) => {
    event.preventDefault();

    const deleteLink = event.target.closest("[data-id]");
    if (!deleteLink) return;

    const id = deleteLink.dataset.id;

    await deleteCategory(id);
    STORE.deleteCategory(id);
    DOMHandler.reload();
  });
}

const ExpensesIncome = {
  toString() {
    return render();
  },
  addListener() {
    listenTrash();
  },
};

export default ExpensesIncome;