import React, {useEffect, useLayoutEffect, useRef} from "react";


const UseLayoutEffectHook = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        //console.log("USE EFFECT WAS CALLED: ", );
        inputRef.current.value = "HELLO"
    }, []);

    useLayoutEffect(() => {
        console.log("USE LAYOUT EFFECT WAS CALLED: ", inputRef.current.value)
    }, []);

    return (
        <div>
            <hr/>
            <h1 style={{color: "tomato"}}>UseLayoutEffect Hook Section</h1>
            <div className="App">
                <input type="text" ref={inputRef} value="Baba Agba" style={{width: 400, height: 100}}/>
            </div>
        </div>
    );
}

export default UseLayoutEffectHook;