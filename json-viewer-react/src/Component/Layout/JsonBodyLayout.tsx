import React from 'react'
import CountrySelector from '../Item/CountrySelector';
import LanguageSelector from '../Item/LanguageSelector';

function JsonBodyLayout() {
    return (
        <>
            <h1>Title</h1>
            <h2>description</h2>
            <div>
                <button>viewdetail</button>
            </div>
            <div>
                <button>skip</button>                
            </div>
            <div>
                <input type={'checkbox'} name="ch_all" /> cb-all
            </div>           
            
            
            <button>agree</button>
            <h2>disclaimer</h2>          

            
        </>
      ); 

};

export default JsonBodyLayout;
