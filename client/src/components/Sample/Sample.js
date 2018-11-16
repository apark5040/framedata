import { createStore } from "redux";

function counter(state = 1, action) {
    switch (action.type) {
        case "increment":
            console.log(state = "pizza");
            break;
        case "decrement":
            console.log(state-1);
            break;
        default:
            break;
    }
}

let store = createStore(counter);

export default store;



