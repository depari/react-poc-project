import React from 'react'
import Select from 'react-select';

import JsonStore from '../../JsonStore';

function LanguageSelector() {
    const {cur_country_code, cur_language_code, language_list, setCurLanguageCode}  = JsonStore();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        console.log("language Select : " + e.value);
        setCurLanguageCode(e.value);
    };

    return (<>
        LanguageSelector - {cur_language_code}        
        <Select options={language_list} onChange={(e) => handleChange(e)}></Select>
    </>);
    
};

export default LanguageSelector;

