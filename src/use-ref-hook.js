import React, {useRef} from "react";


const UseRefHook = () => {
    //you may not be using it as much
    const inputRef = useRef(null);
    const onlick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value)

    }

    return (
        <div>
            <hr/>
            <h1 style={{color: "blue" }}>UseRef Hook Section</h1>
            <h2>Babanla</h2>
            <input type="text" placeholder={"Ex...."} ref={inputRef}/>
            <button onClick={ onlick }>Change Name</button>
        </div>
    );
}

export default UseRefHook;