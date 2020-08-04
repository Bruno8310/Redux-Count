
const changeCount = (state = 0, action) => {
    switch (action.type) {
        case "changeCount":
            return action.value
        default:
            return state;
    }
}