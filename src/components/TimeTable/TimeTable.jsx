import React, { useEffect, useState } from 'react';
import './TimeTable.css';
import api from '../../axios';
import { userIDState } from "../../atom/atom";
import { useRecoilValue } from "recoil";

const predefinedColors = [
    '#FFEAE9', '#F2E8E7', '#F0F9CC', '#DCF1E8', '#FFF8CC','#DFE8F7', '#FFEDD9', '#FFC7AD'
];


const getRandomColor = () => {
    return predefinedColors[Math.floor(Math.random() * predefinedColors.length)];
};

const TimeTable = () => {
    const userID = useRecoilValue(userIDState);
    const [jsonData, setJsonData] = useState({
        empty_time: 0,
        time_table: [],
        user_id: null
    });
    const [colorMap, setColorMap] = useState({});

    useEffect(() => {
        const getTimetableData = async () => {
            try {
                const response = await api.get('/gettimetable/', {
                    params: { userId: userID }
                });
                const data = {
                    ...response.data,
                    time_table: JSON.parse(response.data.time_table)
                };

                setJsonData(data);

                const newColorMap = {};
                data.time_table.forEach((day, dayIndex) => {
                    let currentColor = ''; // 현재 열의 색상
                    day.forEach((block, blockIndex) => {
                        const isFirstBlock = blockIndex === 0 || day[blockIndex - 1] !== 1;
                        if (block === 1) {
                            if (isFirstBlock) {
                                currentColor = getRandomColor(); // 새 색상 생성
                            }
                            newColorMap[`${dayIndex}-${blockIndex}`] = currentColor;
                        }
                    });
                });

                setColorMap(newColorMap);
            } catch (error) {
                console.log(error);
            }
        };

        console.log(userID);
        getTimetableData();
    }, [userID]);

    const days = ['월', '화', '수', '목', '금'];
    const hours = Array.from({ length: 15 }, (_, i) => i + 8);

    return (
        <div className="time-table">
            <div className="grid">
                <div className="time-row">
                    <div className="time-header"></div>
                    {hours.map((hour) => (
                        <div key={hour} className="time-cell">
                            {hour}:00
                        </div>
                    ))}
                </div>
                {days.map((day, dayIndex) => (
                    <div key={day} className="day-column">
                        <div className="day-header">{day}</div>
                        {jsonData.time_table[dayIndex] ? jsonData.time_table[dayIndex].slice(108).map((block, blockIndex) => {
                            const isClass = block === 1;
                            const hasTopBorder = isClass && (blockIndex === 0 || jsonData.time_table[dayIndex][blockIndex + 107] !== 1);
                            const hasBottomBorder = isClass && (blockIndex === 179 || jsonData.time_table[dayIndex][blockIndex + 109] !== 1);
                            const hasLeftBorder = isClass;
                            const hasRightBorder = isClass;
                            const color = isClass ? colorMap[`${dayIndex}-${blockIndex + 108}`] : 'transparent'; // Adjust index by 108 to account for slice

                            return (
                                <div
                                    key={blockIndex}
                                    className={`time-block ${isClass ? 'class' : ''}`}
                                    style={{
                                        borderTop: hasTopBorder ? '1px solid #f0f0f0' : '',
                                        borderBottom: hasBottomBorder ? '1px solid #f0f0f0' : '',
                                        borderLeft: hasLeftBorder ? '1px solid #f0f0f0' : '',
                                        borderRight: hasRightBorder ? '1px solid #f0f0f0' : '',
                                        backgroundColor: color,
                                        borderTopLeftRadius: hasTopBorder ? '10px' : '0',
                                        borderTopRightRadius: hasTopBorder ? '10px' : '0',
                                        borderBottomLeftRadius: hasBottomBorder ? '10px' : '0',
                                        borderBottomRightRadius: hasBottomBorder ? '10px' : '0'
                                    }}
                                ></div>
                            );
                        }) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeTable;
