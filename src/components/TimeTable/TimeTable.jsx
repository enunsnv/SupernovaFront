import React, { useEffect, useState } from 'react';
import './TimeTable.css';
import api from '../../axios';
import { userIDState } from "../../atom/atom";
import { useRecoilValue } from "recoil";

const predefinedColors = [
    '#FFF56E', '#FFFA78', '#FFFA82', '#FFFF8C', '#FFFF96',
    '#FFE650', '#FFEB5A', '#FFF064', '#FFF56E', '#FFF978',
    '#FFD232', '#FFD73C', '#FFDC46', '#FFE150', '#FFE65A',
    '#FFC300', '#FFC800', '#FFCD00', '#FFD200', '#FFD700',
    '#FF9100', '#FF9B00', '#FFA500', '#FFAF00', '#FFB900',
    '#FFDBC1', '#FFE0C6', '#FFE5CB', '#FFEAD0', '#FFEFD5',
    '#FFD0A1', '#FFD5A6', '#FFDAAB', '#FFDFB0', '#FFE4B5',
    '#FFA98F', '#FFB399', '#FFBDA3', '#FFC7AD', '#FFD1B7',
    '#FF9E7D', '#FFA887', '#FFB291', '#FFBC9B', '#FFC6A5',
    '#E1B771', '#E6C17B', '#EBC680', '#F0CB85', '#F5D08A',
    '#E19B50', '#E6A55A', '#EBAA5F', '#EBAF64', '#F0B469',
    '#CD853F', '#CD8F49', '#D29953', '#D7A35D', '#DCAD67',
    '#D2691E', '#D27328', '#D27D32', '#D7873C', '#DC9146',
    '#FFDCE1', '#FFE1E6', '#FFE6EB', '#FFEBF0', '#FFF0F5',
    '#FFCFDA', '#FFD4DF', '#FFD9E4', '#FFDEE9', '#FFE3EE',
    '#FFB6C1', '#FFBBC6', '#FFC0CB', '#FFC5D0', '#FFCAD5',
    '#FF9E9B', '#FFAAAF', '#FFB4B9', '#FFBEC3', '#FFC8CD',
    '#FF88A7', '#FF92B1', '#FF9CBB', '#FFA6C5', '#FFB0CF',
    '#FF5675', '#FF607F', '#FF6A89', '#FF7493', '#FF7E9D',
    '#FFAAFF', '#FFBEFF', '#FFC8FF', '#FFD2FF', '#FFDCFF',
    '#FFAFE6', '#FFB4EB', '#FFB9F0', '#FFBEF5', '#FFC3FA',
    '#FF82FF', '#FF8CFF', '#FF96FF', '#FFA0FF', '#FFAAFF',
    '#FF46C5', '#FF50CF', '#FF5AD9', '#FF64E3', '#FF6EED',
    '#3DFF92', '#47FF9C', '#51FFA6', '#5BFFB0', '#65FFBA',
    '#6FFFC4', '#79FFCE', '#75FFCA', '#A5FFE4', '#AFFFEE',
    '#98EBDC', '#9DF0E1', '#A2F5E6', '#A7FAEB', '#ACFFEF',
    '#AAEBAA', '#B4F0B4', '#BEF5BE', '#C8FAC8', '#D2FFD2',
    '#DCFFDC', '#E1FFE1', '#E6FFE6', '#EBFFEB', '#F0FFF0',
    '#80E12A', '#8AE634', '#94EB3E', '#9EF048', '#A8F552',
    '#B2FA5C', '#BCFF66', '#C1FF6B', '#C6FF70', '#CBFF75',
    '#228B22', '#2C952C', '#369F36', '#40A940', '#4AB34A',
    '#54BD54', '#5EC75E', '#63CC63', '#68D168', '#6DD66D',
    '#008C8C', '#0A9696', '#14A0A0', '#1EAAAA', '#28B4B4',
    '#32BEBE', '#37C3C3', '#3CC8C8', '#41CDCD', '#46D2D2',
    '#ACF3FF', '#B0F7FF', '#B4FBFF', '#B9FFFF', '#C0FFFF',
    '#32F1FF', '#3CFBFF', '#46FFFF', '#96FFFF', '#C8FFFF',
    '#00D7FF', '#00E1FF', '#00EBFF', '#00F5FF', '#00FFFF',
    '#93DAFF', '#98DFFF', '#9DE4FF', '#A2E9FF', '#A7EEFF',
    '#00BFFF', '#0AC9FF', '#14D3FF', '#1EDDFF', '#28E7FF',
    '#00A5FF', '#00AFFF', '#00B9FF', '#00C3FF', '#00CDFF',
    '#BECDFF', '#C8D7FF', '#D2E1FF', '#DCEBFF', '#E8F5FF',
    '#90AFFF', '#9AB9FF', '#A4C3FF', '#AECDFF', '#B8D7FF',
    '#6495ED', '#6E9FED', '#78A9ED', '#82B3ED', '#8CBDED',
    '#96C7ED', '#A0D1F7', '#AADBFF', '#B4E5FF', '#BEEFFF',
    '#0078FF', '#0A82FF', '#148CFF', '#1E96FF', '#28A0FF',
    '#0078FF', '#0A82FF', '#148CFF', '#1E96FF', '#28A0FF'
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
