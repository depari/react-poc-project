import React from 'react'
import Select from 'react-select';

import JsonStore from '../../JsonStore';




function CountrySelector() {
    // const { language_code, setLanguageCode} = jsonStore();
    //const bears = useStore(state => state.bears);    
    const {cur_country_code, cur_language_code, country_list, setCurCountryCode, setCurLanguageCode}  = JsonStore();        
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        console.log("Country Select : " + e.value);
        setCurCountryCode(e.value);
    };

    return (<>    
         CountrySelector: {cur_country_code}
         <Select options={country_list}  onChange={(e) => handleChange(e)}/>
    </>);
    
};

export default CountrySelector;