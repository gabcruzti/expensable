import apiFetch from "./api-fetch.js";

export async function createTransaction(
  categoryId,
  newTransaction = { amount, notes, date }
) {
  return await apiFetch(`categories/${categoryId}/transactions`, {
    body: newTransaction,
  });
}

export async function deleteTransaction(categoryId, id) {
  return await apiFetch(`categories/${categoryId}/transactions/${id}`, {
    method: "DELETE",
  });
}