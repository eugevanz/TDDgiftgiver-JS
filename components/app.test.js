import {create, act} from 'react-test-renderer';

import React from "react";
import App from "./app";
import Gift from './gift';

const wrapper = create(<App/>);
const instance = wrapper.root;

it('should compare to snapshot', ()=>
    expect(wrapper.toJSON()).toMatchSnapshot());

it("should have one gift", ()=>{
    expect(instance.findByProps({className: "giftList"}).children.length).toEqual(1);
});

it("should add another gift", () => {
    act(()=>
        instance.findByProps({className: "btnAdd"}).props.onClick());
    expect(instance.findByProps({className: "giftList"}).children.length).toEqual(2);
});

it("should have a gift", ()=>{
    const testlist = instance.findByProps({className: "giftList"});
    const testgift = instance.findAllByType(Gift);
    expect(testlist.children.length).toEqual(testgift.length);
});