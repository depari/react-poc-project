import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


declare global {
  interface Window { runStartupTasks: Function; }
}
window.runStartupTasks = () => {
  console.log("runStartupTasks  !!!!");
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded  !!!!");

  ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
  );

  console.log("after reder!!!")


  
})

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
