import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import JsonHeaderLayout from './Component/Layout/JsonHeaderLayout';
import JsonBodyLayout from './Component/Layout/JsonBodyLayout';
import ControlButtonsLayout from './Component/Layout/ControlButtonsLayout';
import JsonStore from './JsonStore';




function App() {

  const {setCurCountryCode, setCurLanguageCode, loadJsonFile}  = JsonStore();

  

  return (
    <>      
      <h1>
        Hi This is my json Project
      </h1>
      <JsonHeaderLayout/>
      <JsonBodyLayout/>      
      <ControlButtonsLayout/>
    </>
  );
}

export default App;
