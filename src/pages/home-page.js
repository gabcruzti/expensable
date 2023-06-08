import STORE from "../store.js";
import DOMHandler from "../dom-handler.js";
import ExpensesIncome from "../components/expenses-income.js";
import Profile from "../components/profile.js";
import LoginPage from "./login-page.js";
import { logout } from "../services/sessions-service.js";

function render() {
  const currentTab = STORE.currentTab;
  return `
    <main class="section">
      <section class="container">
        <h1 class="heading heading--lg text-center">Expensable</h1>
        <a class="text-center block mb-8 js-logout">Logout</a>

        <div class="flex justify-between mb-8 js-navigation">
          <a data-tab="expense" class="button button--subtle ${
            currentTab === "expense" ? "tab--active" : ""
          }">
            Expense
          </a>
          <a data-tab="income" class="button button--subtle ${
            currentTab === "income" ? "tab--active" : ""
          }">
            Income
          </a>
          <a data-tab="profile" class="button button--subtle ${
            currentTab === "profile" ? "tab--active" : ""
          }">
            Profile
          </a>
        </div>
          
          ${currentTab === "expense" ? ExpensesIncome : ""}
          ${currentTab === "income" ? ExpensesIncome : ""}
          ${currentTab === "profile" ? Profile : ""}

      </section>
    </main>
  `;
}

function listenNavigation() {
  const navigation = document.querySelector(".js-navigation");

  navigation.addEventListener("click", (event) => {
    event.preventDefault();
    const link = event.target.closest("[data-tab]");
    if (!link) return;

    STORE.currentTab = link.dataset.tab;
    DOMHandler.reload();
    // console.log(STORE);
  });
}

function listenLogout() {
  const a = document.querySelector(".js-logout");

  a.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      await logout();
      DOMHandler.load(LoginPage);
    } catch (error) {
      console.log(error);
    }
  });
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    listenLogout();
    listenNavigation();
    // if (STORE.currentTab === "expense") ExpensesIncome.addListener();
    // if (STORE.currentTab === "income") ExpensesIncome.addListener();
    if (["expense", "income"].includes(STORE.currentTab))
      ExpensesIncome.addListener();
    if (STORE.currentTab === "profile") Profile.addListeners();
  },
};

export default HomePage;