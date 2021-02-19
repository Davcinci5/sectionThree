let initialState = {
    set:6, 
    start: 0,
    data:[], 
    text: 'Money exchange'
};
export default function reducer(state = initialState, action) {
    if (action.type === 'INCREASE_START'){
        return ({
            ...state,
            start: action.payload
        });
    } else if (action.type === 'SET_DATA') {
        return ({
            ...state,
            data: action.payload.data
        });
    } else if(action.type === 'CHANGE_SIZE') {
        return ({
            ...state,
            set: action.payload
        });
    }
    return state;
}