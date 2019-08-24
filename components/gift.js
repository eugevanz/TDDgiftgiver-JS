import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { giftStyles } from "../styles";

export default ({gift, dispatch})=>{
    const [person, setperson] = useState("Pick someone special");
    const [present, setpresent] = useState('Give em sumtin special');
    
    return <div>
        <Form style={giftStyles.container}>
            <FormControl style={giftStyles.textField} className="inputPerson" onChange={e => setperson(e.target.value)} type="text" placeholder={person}/>
            <br/>
            <FormControl style={giftStyles.textField} className="inputPresent" onChange={e => setpresent(e.target.value)} type="text" placeholder={present}/>
            <br/>
            <Button className="removeGift" onClick={()=>dispatch(gift.id)}>Remove Gift</Button>
        </Form>
    </div>
}