import React from 'react'
import Select from 'react-select';


function CountrySelector() {
    const country_list = [
        {label: "default", value : "default"},
        {label: "US", value : "US"},
        {label: "KR", value : "KR"},

    ];


    return (<>    
         CountrySelector
         <Select options={country_list} />

    </>);
    
};

export default CountrySelector;