import apiFetch from "./api-fetch.js";

export async function login (credentials = { email, password }) {
    return apiFetch("login", { body: credentials })
}

export async function logout () {
    return apiFetch("logout", { method: "DELETE"})

}

