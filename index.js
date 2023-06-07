import DOMHandler from "./dom-handler.js";
import LoginPage from "./src/pages/login-pages.js";
import HomePage from "./src/pages/home-page.js";

import { getUser } from "./src/services/user-service.js"
import { tokenKey } from "./config.js";
import STORE from "./src/store.js";

async function init() {
  // Lógica de inicialización

  try {
    const token = sessionStorage.getItem(tokenKey);
    if(!token) throw new Error();
    
    const user = await getUser();
    STORE.user = user;
    await STORE.fetchCategories();   
    DOMHandler.load(HomePage);
  } catch (error) {
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
    console.log(error);
  }
  
}

init();