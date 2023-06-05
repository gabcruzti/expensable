import { login } from "./src/service/sessions-service.js"

const credentials = {
	"email": "test3@mail.com",
	"password": "123456",
};

async function test() {
  try {
    const user = await login(credentials);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

test();