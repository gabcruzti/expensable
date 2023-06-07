import { getCategories } from "./services/categories-service.js";

async function fetchCategories() {
  const categories = await getCategories();

  this.income = categories.filter(
    (category) => category.transaction_type === "income"
  );

  this.expense = categories.filter(
    (category) => category.transaction_type === "expense"
  );
}

function currentCategories() {
  return this[this.currentTab];
  // this === STORE
  // STORE[STORE.currentTab]
  // STORE["expense"]
  // [{}...]
}

function deleteCategory(id) {
  if (this.currentTab === "expense") {
    this.expense = this.expense.filter((category) => category.id != id);
  }
  if (this.currentTab === "income") {
    this.income = this.income.filter((category) => category.id != id);
  }
}

const STORE = {
  user: null,
  income: [],
  expense: [],
  currentTab: "expense",
  fetchCategories,
  currentCategories,
  deleteCategory,
};

export default STORE;