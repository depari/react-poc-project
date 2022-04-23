import React from 'react'
import Select from 'react-select';

import JsonStore from '../../JsonStore';

function LanguageSelector() {
    const {country_code, language_code, setCountryCode, setLanguageCode}  = JsonStore();
    const language_list = [
        {label: "default", value : "default"},
        {label: "en", value : "en"},
        {label: "kr", value : "kr"},
    ];

    return (<>
        LanguageSelector - {language_code}        
        <Select options={language_list}></Select>
    </>);
    
};

export default LanguageSelector;

