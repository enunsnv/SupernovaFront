import React from 'react';
import './monster.css';

function Monster({ onClick, selected }) {

    return (
        <div className={`monster-container ${selected ? 'selected' : ''}`}>
            <button onClick={onClick}>monster</button>
        </div>
    );
}

export default Monster;