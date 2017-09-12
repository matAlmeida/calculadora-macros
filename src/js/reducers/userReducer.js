export default function reducer(state = {
    id: '',
    name: '',
    sex: '',
    age: 0,
    weight: 0,
    height: 0,
    corporalFat: 0,
    calc: {
        gain: true,
        type: false,
    },
}, action) {

    switch (action.type) {
        case 'UPDATE_USER': {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    }
}
