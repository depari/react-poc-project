import React from 'react'
import CountrySelector from '../Item/CountrySelector';
import LanguageSelector from '../Item/LanguageSelector';

function JsonHeaderLayout() {
    return (
        <>
            <table border='1'>
                <tr>
                    <td><CountrySelector /></td>
                    <td><LanguageSelector /></td>
                </tr>
                <tr>
                    
                </tr>

            </table>           
            
        </>
      ); 

};

export default JsonHeaderLayout;
