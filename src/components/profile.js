import STORE from "../store.js";
import DOMHandler from "../dom-handler.js";
import { updateUser } from "../services/user-service.js";
import { input } from "./input.js";

function render() {
  const { email, first_name, last_name, phone } = STORE.user;
  const { formError } = Profile.state;

  return `
    <form class="flex flex-column gap-4 mb-4 js-profile-form">
      ${input({
        label: "email",
        id: "email",
        placeholder: "john@example.com",
        type: "email",
        required: true,
        value: email,
        name: "email",
      })}
        ${input({
          label: "First Name",
          id: "first_name",
          value: first_name,
          name: "first_name",
        })}
        ${input({
          label: "Last name",
          id: "last_name",
          value: last_name,
          name: "last_name",
        })}
        ${input({
          label: "Phone",
          id: "phone",
          value: phone,
          name: "phone",
        })}
      
      ${formError ? `<p class="text-center error-300">${formError}</p>` : ""}
      <button class="button button--primary">Update</button>
    </form>
  `;
}

function listenSubmit() {
  const form = document.querySelector(".js-profile-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { email, first_name, last_name, phone } = event.target.elements;

    const data = {
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      phone: phone.value,
    };

    try {
      const user = await updateUser(data);
      STORE.user = user;
      STORE.currentTab = "expense";
      DOMHandler.reload();
    } catch (error) {
      Profile.state.formError = error.message;
      DOMHandler.reload();
    }
  });
}

const Profile = {
  toString() {
    return render();
  },
  addListeners() {
    listenSubmit();
  },
  state: {
    formError: false,
  },
};

export default Profile;