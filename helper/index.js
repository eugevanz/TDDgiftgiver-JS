export const initialState = [
    {
        id:1
    }
]
const max = (state)=>Math.max(state.map(gift => gift.id)) + 1;

export const reducer = (state, action) => {
    const {id} = action;
    switch (action.type) {
        case 'REMOVE_GIFT': return state.filter(gift => gift.id !== id);
        case 'ADD_GIFT': return [...state, {id:max(state)}];
        default: throw new Error('Unexpected action');
    }
};