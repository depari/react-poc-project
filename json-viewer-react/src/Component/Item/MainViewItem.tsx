import React from "react";
import Popup from "reactjs-popup";
import JsonStore from '../../JsonStore';
function MainViewItem() {

    const {main_title, main_description, main_disclaimer, main_cb_all, main_btn_agree, item_btn_viewdetail, skip_title, skip_description, skip_btn_ok, skip_btn_cancel}  = JsonStore();  



    return  (
      <>
        <h1>{main_title}</h1>
        <h2>{main_description}</h2>
        <div>
          <button>{item_btn_viewdetail}</button>
        </div>
        <div>
        <input type={'checkbox'} name={main_cb_all} /> {main_cb_all}

        </div>
        
        
        <h2>{main_disclaimer}</h2>
        
        <button>{main_btn_agree}</button>
        


        <Popup trigger={<button>skip trigger</button>} position="right center"
         {...{closeOnDocumentClick : true , contentStyle: { background: '#fff' }, overlayStyle : { background: 'rgba(0,0,0,0.5)' } }}
         >
          <div>
            <h1>{skip_title}</h1>
            <h2>{skip_description}</h2>
            <button>{skip_btn_ok}</button>
            <button>{skip_btn_cancel}</button>
          </div>
        </Popup>

        
      </>  
    );

};

export default MainViewItem;