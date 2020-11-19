import React,{useState,useEffect} from 'react'
import './styles/main.scss'
import DrawableCanvas from './deps/drawingCanvas'
import Colors from './elems/colors'

const axios = require('axios')

const App=(props)=> {
    var DrawCanvas,canvasDataURL;

    useEffect(()=>{
        DrawCanvas = new DrawableCanvas()
        // window.addEventListener('resize', DrawCanvas.reSize)
    })


    const downloadClickHandler = () => {
        var canvasDataURL = DrawCanvas.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const canvasFile = dataURLtoFile(canvasDataURL,"drawnImage")

        const data = new FormData()
        data.append('photo', canvasFile, canvasFile.name)
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        axios.post('http://scarb.zapto.org/change', data, config).then(response => {
            window.open(response.data, '_blank');
        }).catch((err)=>{
            console.log(err)
        })
    }

    
    
    
    const dataURLtoFile = (dataurl, filename) => {
        const arr = dataurl.split(',')
        const mime = arr[0].match(/:(.*?);/)[1]
        const bstr = atob(arr[1])
        let n = bstr.length
        const u8arr = new Uint8Array(n)
        while (n) {
        u8arr[n - 1] = bstr.charCodeAt(n - 1)
        n -= 1 // to make eslint happy
        }
        return new File([u8arr], filename, { type: mime })
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
