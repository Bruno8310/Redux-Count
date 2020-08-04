const initState = {
    totalSum: 0,
    count: 0
}

export default(state = initState, action) => {
    let newState = {};

    switch(action.type) {

        case 'inputNumber':
            newState.count = action.count
            newState.totalSum = 0
            return newState

        case 'incerase':
            newState.totalSum = newState.totalSum + 1;
            return newState

        case 'decrease':
            newState.totalSum = newState.totalSum - 1
            return newState

        default:
            return state
    }
}