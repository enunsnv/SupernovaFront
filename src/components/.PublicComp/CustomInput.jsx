import React from 'react';
import './CustomInput.css';
import Form from 'react-bootstrap/Form';

function CustomInput({label, placeholder}) {
    return (
        <div className="InputWrapper">
            <Form.Label className="input-form-label">{label}</Form.Label>
            <Form.Control
                type="input"
                className="input-form-input"
                placeholder={placeholder}
            />
        </div>
    );
}

export default CustomInput;