const BASE_URI = "https://expensable-api.herokuapp.com/";
const tokenKey = "expensable_token"

async function login (credentials = { email, password }) {
    const response = await fetch(`${BASE_URI}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    if(!response.ok) {
        const data = await response.json();
        throw new Error(data.errors);
    }

    const data = await response.json();
    sessionStorage.setItem(tokenKey, data.token);

    return data;
}

export { login };
