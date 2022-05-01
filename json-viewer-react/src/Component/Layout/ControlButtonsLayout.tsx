import React from 'react'
import JsonStore from '../../JsonStore';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



function ControlButtonsLayout() {

    const {loadJsonFile, updateMeta}  = JsonStore();
    const initJsonFile = (path:string) => {
        loadJsonFile(path); 

    }
    
    const dataUpdate = () => {
        updateMeta();
    }
    return (
        <>
            <ButtonGroup>
                <Button variant='outlined' onClick={() => initJsonFile("input.json")}>load_Json</Button>  
                <Button variant='outlined' onClick={() => dataUpdate()}>data_fetch</Button>
            </ButtonGroup>
        </>
    );
};

export default ControlButtonsLayout;