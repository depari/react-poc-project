import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import JsonHeaderLayout from './Component/Layout/JsonHeaderLayout';
import JsonBodyLayout from './Component/Layout/JsonBodyLayout';

import JsonStore from './JsonStore';


// const jsonStore = create((set) =>({
//   language_code:'default',
//   setLanguageCode(input_lang:string){
//     set((state) => ({language_code : input_lang}))    
//   }
// }));
function App() {
  // const [country_code ,setCountryCode] = useState<string>('us');
  // const [language_code,setLanguageCode] = useState<string>('en');  
  //loadJson
  const {setCountryCode, setLanguageCode, loadJsonFile}  = JsonStore();
  // loadJsonFile("testpath"); 
  //setCountryCode('ko');

  const initJsonFile = (path:string) => {
    // loadJsonFile(path); 
    setCountryCode('ko');
    setLanguageCode('kr');
  }
  

  return (
    <>      
      <h1>
        Hi This is my test json Project
      </h1>
      <JsonHeaderLayout/>
      <JsonBodyLayout/>      

      <button onClick={() => initJsonFile("test")}>load_Json</button>
      
    </>
  );
}

export default App;
