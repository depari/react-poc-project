import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import JsonHeaderLayout from './Component/Layout/JsonHeaderLayout';
import JsonBodyLayout from './Component/Layout/JsonBodyLayout';


function App() {
  // const [country_code ,setCountryCode] = useState<string>('us');
  // const [language_code,setLanguageCode] = useState<string>('en');
  return (
    <>
      <h1>
        Hi This is my test json Project
      </h1>
      <JsonHeaderLayout/>
      <JsonBodyLayout/>    
      
    </>
  );
}

export default App;
