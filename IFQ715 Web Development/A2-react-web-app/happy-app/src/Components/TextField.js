import { Col, Form } from "react-bootstrap";
import React from 'react';


export default function TextField({
    text,
    placeholder,
    type,
    size,
    value,           // Add value prop
    onChange,       // Add onChange prop
    Component = Form.Control,
}) {
    let id = `input${text}`;
    return (
        <Col md={size}>
            <Form.Label htmlFor={id} column="sm-2">
                {text}
            </Form.Label>
            <Component 
                type={type} 
                id={id} 
                placeholder={placeholder} 
                value={value}        // Set the value prop
                onChange={onChange}  // Set the onChange prop
            />
        </Col>
    );
}