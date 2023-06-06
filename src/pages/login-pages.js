import { input } from "../components/input.js";


function render () {
    return `
        <main class="section">
           <section class="container">
                <h1 class="heading heading--lg text-center mb-4>Login</h1>
                <form class="flex flex-column gap-4 mb-4 js-login-form>Login</form>

                    ${input ({ 
                        label: "email",
                        id: "email",
                        name: "email",
                        placeholder: "jhon@example.com",
                        type: "email",
                        required: true,
                        value: "test3@mail.com",
                    })}

                    ${input ({ 
                        label: "password",
                        id: "password",
                        name: "password",
                        placeholder: "*********",
                        type: "password",
                        required: true,
                        value: "123456",
                    })}
                    

            <button class="button button--primary">Login</button>
        </form>
        <a href="#" class="block text-center js-signup-link">Create account</a>
    </section>
</main>
    `;
}


const LoginPage = {
    toString(){
        return render ();
    },
    addListeners() {},
}

export default LoginPage;