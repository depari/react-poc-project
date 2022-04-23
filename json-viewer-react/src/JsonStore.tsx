import create from 'zustand'


interface jsonData {
    json_path:string;
    json_data:string;
    loadJsonFile:(json_path:string) => void;    
    country_code:string;
    setCountryCode:(country_code:string) => void;
    language_code:string;
    setLanguageCode:(language_code:string) => void;
}


const JsonStore = create<jsonData>((set) => ({
    json_path:"null_date",
    json_data:"null_date",
    loadJsonFile:(path:string) =>
        set((state) => ({            
            json_path : path,
            json_date : "test",
            country_code: "ko",
            language_code: "kr"
        })
    ),
    country_code:"usa",
    setCountryCode:(country_code) =>  
        set((state) => ({
            ...state,
            country_code
        })
    ),
    language_code:"en-US",
    setLanguageCode:(language_code) =>       
        set((state) => ({
            ...state,
            language_code
        })
    ),
    json_data_path:"",

}));

export default JsonStore;