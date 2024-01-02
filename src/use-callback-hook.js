import React, {useRef, useState} from "react";


const UseCallbackHook = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    const someFunction = (() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                setData(json[0].email)
                console.log("API WAS CALLED")
                console.log("API AGAIN")
            })
    },
        [count]);

    return (
        <div>
            <hr/>
            <h1 style={{color: "blue" }}>UseCallback Hook Section</h1>
            <div>Hello world
                <h1>{data}</h1>
                <h1>{count}</h1>
                <button
                    onClick={
                        ()=> setCount(count + 1)
                    }
                >
                    Click here
                </button>
            </div>
        </div>
    );
}

export default UseCallbackHook;