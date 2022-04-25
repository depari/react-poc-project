import create from 'zustand'

interface jsonData {
    json_path:string;
    json_data:string;
    json_object : any;
    country_list:Array<object>;
    language_list:Array<object>;

    cur_country_code:string;    
    cur_language_code:string;

    main_title:string;    
    main_description:string;
    main_disclaimer:string;
    item_btn_viewdetail:string;
    main_cb_all:string;
    main_btn_agree:string;
    skip_title:string;
    skip_description:string;
    skip_btn_ok:string;
    skip_btn_cancel:string;


    loadJsonFile:(json_path:string) => void;    
    setCurCountryCode:(cur_country_code:string) => void;
    setCurLanguageCode:(cur_language_code:string) => void;
    updateMeta:() => void;

    // updateMeta(country_code:string, language_code:string):void;
    

}


function getJson(obj:any, key:string, default_value:string = "") : string {
    if(obj.hasOwnProperty(key))
    {
        return obj[key];

    }
    else
    {
        return default_value;
    }
}


const JsonStore = create<jsonData>((set, get) => ({
    json_path:"null_date",
    json_data:"null_date",
    json_object:{},
    country_list:[],
    language_list:[],

    loadJsonFile:(path:string) =>  {
        fetch(path)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            console.log(typeof(JSON.parse(data)));

            const _jsonOject : any = JSON.parse(data);
            const _countryList : Array<object> = [];
            const _languageList : Array<object> = [];
            let _cur_country_code : string;
            let _cur_language_code : string;

            console.log(Object.keys(_jsonOject));
            
            
            for(var key_country in _jsonOject)
            {
                console.log("-------------------------------------------");
                console.log(key_country );
                var country = {label:key_country, value : key_country};                 
                _countryList.push(country);
                

                for(var key_language in _jsonOject[key_country])
                {
                    console.log("  " +key_language);
                    //var language = {label:key_country, value : key_country};                 
                    //_languageList.push(key_language);

                }
                console.log("-------------------------------------------");
            }

            _cur_country_code = Object.keys(_jsonOject)[0];

            for(var key_language in _jsonOject[_cur_country_code])
            {
                console.log("  " +key_language);
                var language = {label:key_language, value : key_language};                 
                _languageList.push(language);
            }
            _cur_language_code =  Object.keys(_jsonOject[_cur_country_code])[0];           
            

            set((state) => ({            
                json_path : path,
                json_data : data,
                json_object : _jsonOject,
                country_list : _countryList,
                language_list : _languageList,
                cur_country_code: _cur_country_code,
                cur_language_code: _cur_language_code

            })
        )
        });        
        
    },
    cur_country_code:"usa",
    setCurCountryCode:(_cur_country_code) =>  
    {
        ;
        const _languageList : Array<object> = [];
        let _cur_language_code : string;
        let _jsonObject:any = get().json_object;
        for(var key_language in _jsonObject[_cur_country_code])
        {
            console.log("  " +key_language);
            var language = {label:key_language, value : key_language};                 
            _languageList.push(language);
        }
        _cur_language_code =  Object.keys(_jsonObject[_cur_country_code])[0];           
        
        set((state) => ({                
                cur_country_code : _cur_country_code,
                cur_language_code : _cur_language_code,
                language_list : _languageList
            })
        )
    },
    cur_language_code:"en-US",
    setCurLanguageCode:(cur_language_code) => {

        
        set(
            (state) => ({
            ...state,
            cur_language_code
            })
        )
    }
    ,    
    updateMeta:() => {

        let _country = get().cur_country_code;
        let _lang = get().cur_language_code;
        let _jsonObject:object = get().json_object[_country][_lang];

        let _mainTitle = getJson(_jsonObject, "title");
        let _mainDescription = getJson(_jsonObject, "description");
        let _cb_all = getJson(_jsonObject, "cb-all");
        let _mainDisclaimer = getJson(_jsonObject, "footer");
        let _item_btn_viewdetail = getJson(_jsonObject, "btn-viewdetail");
        let _bnt_agree = getJson(_jsonObject, "btn-agree");
        let _skip_title = getJson(_jsonObject, "skip-title");
        let _skip_description = getJson(_jsonObject, "skip-description");
        let _skip_btn_ok = getJson(_jsonObject, "skip-btn-ok");
        let _skip_btn_cancle = getJson(_jsonObject, "skip-btn-cancle");

       

        set((state) => ({
                main_title : _mainTitle,
                main_description : _mainDescription,
                main_disclaimer : _mainDisclaimer,
                main_cb_all : _cb_all,
                item_btn_viewdetail : _item_btn_viewdetail,
                main_btn_agree : _bnt_agree,
                skip_title : _skip_title,
                skip_description : _skip_description,
                skip_btn_ok : _skip_btn_ok,
                skip_btn_cancel : _skip_btn_cancle
            })
        )

    },    
    main_title:"main title -- test",    
    main_description:"main_description",
    main_disclaimer:"main_disclaimer",
    item_btn_viewdetail:"item_btn_viewdetail",
    main_cb_all:"main_db_all",
    main_btn_agree:"main_btn_agree",
    skip_title:"skip_title",
    skip_description:"skip_description",
    skip_btn_ok:"skip_btn_ok",
    skip_btn_cancel:"skip_btn_ok"
}));

export default JsonStore;