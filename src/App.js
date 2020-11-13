import React,{useState,useEffect} from 'react'
import './styles/main.scss'
import DrawableCanvas from './deps/drawingCanvas'
import Colors from './elems/colors'



const App=(props)=> {
    var DrawCanvas;

    useEffect(()=>{
        DrawCanvas = new DrawableCanvas()
    })


    const downloadClickHandler = () => {

    }
    

    return (
        <div className="main-container" >
            <header className="app-header" >
                <h1>Drawer</h1>
                <h5>by Anuj Kapasia</h5>
            </header>
            <div className="drawer-wrapper" >
                <Colors colorChangeHandler={(clr)=>DrawCanvas.color(clr)} />
                <div className="canvas-container" >
                    <canvas id="drawing-canvas"  />
                </div>
                <div className="app-footer" >
                    <button onClick={downloadClickHandler} >Save as PDF</button>
                </div>
            </div>
        </div>
    )
}

export default App
