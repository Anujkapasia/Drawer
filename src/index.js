import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('../sw.js')
            .then((reg)=> console.log('Success: ', reg.scope))
            .catch((err)=> console.log('Faliure: ', err))
    })
}




ReactDOM.render(<App/>,document.getElementById("root"))