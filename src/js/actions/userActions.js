export function changeId(value) {
    return {
        type: 'UPDATE_USER',
        payload: { id: value },
    };
}

export function changeName({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: { name: target.value },
    };
}

export function changeSex({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: { sex: target.value },
    };
}

export function changeAge({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: { age: target.value },
    };
}

export function changeWeight({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: { weight: target.value },
    };
}

export function changeHeight({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: { height: target.value },
    };
}

export function changeCorporalFat({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: { corporalFat: target.value },
    };
}

export function changeGain({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: {
            calc: { gain: target.value },
        },
    };
}

export function changeCalc({ target }) {
    return {
        type: 'UPDATE_USER',
        payload: {
            calc: { type: target.value },
        },
    };
}
