import React from 'react'
import JsonStore from '../../JsonStore';


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
            <div>
                <button onClick={() => initJsonFile("input.json")}>load_Json</button>
            </div>
            <div>
                <button onClick={() => dataUpdate()}>data_fetch</button>
            </div>
        </>
    );
};

export default ControlButtonsLayout;