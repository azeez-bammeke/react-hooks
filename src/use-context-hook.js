import React, {useContext, useState} from "react";
import Login from "./login";
import User from "./user";



const UseContextHook = () => {
    const [username, setUsername] = useState("");
    return (
        <div>
            <hr/>
            <h1 style={{color: "aquamarine" }}>UseContext Hook Section</h1>
            <Login setUsername = {setUsername} /> <User username={username} />
        </div>
    );
}

export default UseContextHook;