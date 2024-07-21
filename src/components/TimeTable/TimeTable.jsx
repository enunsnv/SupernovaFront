import React, { useEffect, useState } from 'react';
import './TimeTable.css';
import api from '../../axios';
import { userIDState } from "../../atom/atom";
import {useRecoilState, useRecoilValue} from "recoil";

const TimeTable = () => {
    const userID = useRecoilValue(userIDState); // 상태 읽기 전용
    const [jsonData, setJsonData] = useState({
        empty_time: 0,
        time_table: [],
        user_id: null
    }); // 초기 상태 설정

    const getTimetableData = async () => {
        try {
            const response = await api.get('/gettimetable/', {
                params: { userId: userID}
            });
            const data = {
                ...response.data,
                time_table: JSON.parse(response.data.time_table) // 문자열로 된 time_table을 배열로 파싱
            };

            setJsonData(data); // 파싱된 데이터로 상태 업데이트
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(userID);
        getTimetableData();

    }, [userID]); // userID가 변경될 때만 API를 다시 호출

    const days = ['월', '화', '수', '목', '금'];
    const hours = Array.from({ length: 15 }, (_, i) => i + 8); // 9시부터 24시까지

    return (
        <div className="time-table">
            <div className="grid">
                <div className="time-row">
                    <div className="time-header"></div> {/* 공백 칸 추가 */}
                    {hours.map((hour) => (
                        <div key={hour} className="time-cell">
                            {hour}:00
                        </div>
                    ))}
                </div>
                {days.map((day, dayIndex) => (
                    <div key={day} className="day-column">
                        <div className="day-header">{day}</div>
                        {jsonData.time_table[dayIndex] ? jsonData.time_table[dayIndex].slice(108, 288).map((block, blockIndex) => {
                            const isClass = block === 1;
                            const hasTopBorder = isClass && (blockIndex === 0 || jsonData.time_table[dayIndex][blockIndex + 107] !== 1);
                            const hasBottomBorder = isClass && (blockIndex === 179 || jsonData.time_table[dayIndex][blockIndex + 109] !== 1);
                            const hasLeftBorder = isClass;
                            const hasRightBorder = isClass;

                            return (
                                <div
                                    key={blockIndex}
                                    className={`time-block ${isClass ? 'class' : ''}`}
                                    style={{
                                        borderTop: hasTopBorder ? '1px solid #000' : '',
                                        borderBottom: hasBottomBorder ? '1px solid #000' : '',
                                        borderLeft: hasLeftBorder ? '1px solid #000' : '',
                                        borderRight: hasRightBorder ? '1px solid #000' : ''
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
