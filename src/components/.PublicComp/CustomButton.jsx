import React, { useEffect, useState } from 'react';
import './CustomButton.css';

function CustomButton({ children, onClick }) {
    const button_clicked = async () => {
        alert('Button Clicked');
    }

    return (
        <button className="custom-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default CustomButton;