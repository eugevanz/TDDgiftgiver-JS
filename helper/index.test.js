import { initialState, reducer } from './index';

const actionREM_GIFT = {
    type: 'REMOVE_GIFT',
    id: 1,
}
const actionADD_GIFT = {
    type: 'ADD_GIFT',
}
const actionDEFAULT = {
    type: 'DEFAULT',
}

describe('initialState', ()=> 
    it('should return [{id:1}]', () => 
        expect(initialState).toEqual([{id:1}])));

describe('removing a gift', ()=>{
    const rem = reducer(initialState, actionREM_GIFT);
    it('should return an empty array', () =>
        expect(rem).toEqual([]));
});

describe('adding a gift', ()=>{
    const add = reducer(initialState, actionADD_GIFT);
    it('should return an array with 2 items', () =>
        expect(add).toEqual([{id:1},{id:2}]));
});

describe('sending an unknown action', ()=>{
    const def = ()=> reducer(initialState, actionDEFAULT);
    it('should return an error', () =>
        expect(()=>
            reducer(initialState, actionDEFAULT)).toThrowError(Error('Unexpected action')));
});