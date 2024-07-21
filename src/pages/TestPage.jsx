import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import TimeTable from "../components/TimeTable/TimeTable";

function TestPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [parsedTimetable, setParsedTimetable] = useState([]);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Pet Select Modal
            </Button>
            {/* TimerStop 컴포넌트는 예제에서 생략되어 있어 다루지 않습니다. */}
            <TimeTable/>
        </div>
    );
}

export default TestPage;
