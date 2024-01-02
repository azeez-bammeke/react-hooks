import React, {useRef, useState} from "react";
import Button from "./button-component";


const UseImperativeHandleHook = () => {
const buttonRef = useRef(null);
    return (
        <div>
            <hr/>
            <h1 style={{color: "olive"}}>UseImperativeHandle Hook Section</h1>
            <button onClick={() => buttonRef.current.alterToggle()}>Button from parent</button>
            <Button ref={buttonRef}/>
        </div>
    );
}

export default UseImperativeHandleHook;