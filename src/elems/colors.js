import React,{useState} from 'react'

const COLORS ={
    RED:1,
    YELLOW:2,
    BLUE:3,
    GREEN:4,
    ORANGE:5,
    ERASE:6,
    CLEAR:7
}

const Colors=(props)=> {
    const [penColor,penColorChange]=useState(COLORS.RED)

    const colorChanger =(val)=>{
        penColorChange(val)
        props.colorChangeHandler(val)
    }

    return (
        <div className="colors-container" >
            <div onClick={()=>colorChanger(COLORS.RED)} className={(penColor===COLORS.RED)?"color-selected":"color"} id="color-red" />
            <div onClick={()=>colorChanger(COLORS.YELLOW)} className={(penColor===COLORS.YELLOW)?"color-selected":"color"} id="color-yellow" />
            <div onClick={()=>colorChanger(COLORS.BLUE)} className={(penColor===COLORS.BLUE)?"color-selected":"color"} id="color-blue" />
            <div onClick={()=>colorChanger(COLORS.GREEN)} className={(penColor===COLORS.GREEN)?"color-selected":"color"} id="color-green" />
            <div onClick={()=>colorChanger(COLORS.ORANGE)} className={(penColor===COLORS.ORANGE)?"color-selected":"color"} id="color-orange" />
            <div onClick={()=>colorChanger(COLORS.ERASE)} className={(penColor===COLORS.ERASE)?"eraser-selected":"eraser"} />
            <div onClick={()=>colorChanger(COLORS.CLEAR)} className="clear" />
        </div>
    )
}

export default Colors