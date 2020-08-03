// import React from 'react';
// import Counter from '../../Component/Counter/index';
import {
    INPUT_NUMBER_AS_COUNTER,
    INCREASE_ONE,
    DECREASE_ONE
} from '../action/action'

const initState = {
    totalSum: 0,
    counter: 0
}

export default(state = initState, action) => {
    let newState = {};
    switch(action.type) {
        case INPUT_NUMBER_AS_COUNTER:
            newState.number = action.value
            newState.totalSum = 0
            return newState

        case INCREASE_ONE:
            newState.totalSum = newState + 1;
            return newState

        case DECREASE_ONE:
            newState.totalSum = newState.totalSum - 1
            return newState

        default:
            return state;
    }
}