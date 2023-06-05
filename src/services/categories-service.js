import apiFetch from "./api-fetch.js";
import { tokenKey } from "./config.js";

export async function getCategories() {
    return await apiFetch("categories");
}

export async function createCategories(
    newData = {
    name,
    transaction_type,
}
) {
    return await apiFetch("categories", { body: newData});
}

export async function deleteCategory(id) {
    return await apiFetch(`categories/${id}`, {method: "DELETE"});
}