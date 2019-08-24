import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './gift';
import { appStyles } from '../styles';
import { reducer, initialState } from '../helper';

export default ()=>{
    const [gifts, dispatch] = useReducer(reducer, initialState);

    const addgift = ()=>dispatch({type: 'ADD_GIFT'});
    const removegift = (id)=>dispatch({type: 'REMOVE_GIFT', id: id});
    
    return <div style={appStyles.main}>
        <h1>Gift Giver</h1>
        <h5>
            Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default Material-UI components with little customization.
        </h5>
        <br/>
        <Button variant='primary' onClick={addgift} className='btnAdd'>Add Gift</Button>
        <br/>
        <div className='giftList' style={appStyles.list}>
            {gifts.map(gift => <Gift key={gift.id} gift={gift} dispatch={removegift}/>)}
        </div>
    </div>
}