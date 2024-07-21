import React, {useState} from 'react';
import './monster.css';
import Monster from "./monster";
import CustomButton from "../.PublicComp/CustomButton";

function SelectContainer({onClick}) {
    const [selectedMonster, setSelectedMonster] = useState(null);

    const handleMonsterClick = (index) => {
        setSelectedMonster(index);
    };

    return (
        <div className="parent-container">
        <div className="select-container">
                {[0, 1, 2, 3].map(index => (
                    <Monster
                        key={index}
                        onClick={() => handleMonsterClick(index)}
                        selected={selectedMonster === index}
                    />
                ))}
        </div>
        </div>
    );
}

export default SelectContainer;
