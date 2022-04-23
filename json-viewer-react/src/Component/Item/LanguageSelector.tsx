import React from 'react'
import Select from 'react-select';


function LanguageSelector() {
    const language_list = [
        {label: "default", value : "default"},
        {label: "en", value : "en"},
        {label: "kr", value : "kr"},
    ];

    return (<>
        LanguageSelector - code        
        <Select options={language_list}></Select>
    </>);
    
};

export default LanguageSelector;

