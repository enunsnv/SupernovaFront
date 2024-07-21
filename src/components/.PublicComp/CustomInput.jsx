import React from 'react';
import './CustomInput.css';

function CustomInput({label, placeholder, value, onChange}) {
    return (
        <div className="InputWrapper">
            <label className="input-form-label">{label}</label>
            <input
                type="text"
                className="input-form-input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default CustomInput;
