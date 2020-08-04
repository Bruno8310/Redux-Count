
export function getInputNumber(count) {
    return {
        type: 'inputNumber',
        count
    }
}

export function increase() {
    return {
        type: 'incerase'
    }
}

export function decrease() {
    return {
        type: 'decrease'
    }
}