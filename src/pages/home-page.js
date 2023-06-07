import STORE from "../store.js"

function render () {
    return `<h1>Home Page</h1>`;
}

const HomePage = {
    toString(){
        return render;
    },
    addListeners() {},
}

export default HomePage;