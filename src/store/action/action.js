/**
 * action类型
 */
const INPUT_NUMBER_AS_COUNTER = 'inputNumber';
const INCREASE_ONE = 'incerase';
const DECREASE_ONE = 'decrease';

/**
 * action创建函数
 */
export function getInputNumber(number) {
    return {
        type: INPUT_NUMBER_AS_COUNTER,
        value
    }
}

export function increase() {
    return {
        type: INCREASE_ONE
    }
}

export function decrease() {
    return {
        type: DECREASE_ONE
    }
}