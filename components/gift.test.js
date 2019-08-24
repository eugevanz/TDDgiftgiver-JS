import {create, act} from 'react-test-renderer';

import React from 'react';
import Gift from './gift';

const mockRemove = jest.fn();
const wrapper = create(<Gift dispatch={mockRemove} gift={{id:1}}/>);
const instance = wrapper.root;

it('should compare to snapshot', () => 
    expect(wrapper.toJSON()).toMatchSnapshot());
    
it('should initialise person and present', ()=>{ 
    expect(instance.findByProps({className:'inputPerson'}).props.placeholder).toEqual('Pick someone special');
    expect(instance.findByProps({className:'inputPresent'}).props.placeholder).toEqual('Give em sumtin special');
});

it('should change person input', () => {
    act(()=>
        instance.findByProps({className:"inputPerson"}).props.onChange({target: {value: 'Uncle'}}));
    expect(instance.findByProps({className:'inputPerson'}).props.placeholder).toEqual('Uncle');
});
it('should change present input', () => {
    act(()=>
        instance.findByProps({className:'inputPresent'}).props.onChange({target: {value: 'Neck Tie'}}));
    expect(instance.findByProps({className:'inputPresent'}).props.placeholder).toEqual('Neck Tie');
});

it('should remove the gift', () => {
    act(()=>
        instance.findByProps({className:"removeGift"}).props.onClick());
    expect(mockRemove).toHaveBeenCalledWith(1);
});