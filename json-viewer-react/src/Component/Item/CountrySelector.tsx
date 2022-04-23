import React from 'react'
import Select from 'react-select';

import JsonStore from '../../JsonStore';

function CountrySelector() {
    // const { language_code, setLanguageCode} = jsonStore();
    //const bears = useStore(state => state.bears);    
    const {country_code, language_code, setCountryCode, setLanguageCode}  = JsonStore();


    return (<>    
         CountrySelector: {country_code}
         {/* <Select options={country_list} /> */}

    </>);
    
};

export default CountrySelector;