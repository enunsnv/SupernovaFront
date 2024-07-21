import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import api from "../axios";
import CustomButton from "../components/.PublicComp/CustomButton";
import CustomInput from "../components/.PublicComp/CustomInput";
import PetSelect from "../components/pet/PetSelect";
import { Button } from '@mui/material';

function TestPage() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Pet Select Modal
            </Button>
            <PetSelect open={modalOpen} onClose={handleClose} />
        </div>
    );
}

export default TestPage;