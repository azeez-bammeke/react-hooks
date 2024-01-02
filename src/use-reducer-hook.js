import React, {useState, useReducer} from "react";

const UserReducerHook = () => {
    // const [count, setCount] = useState(2);
    // const [showText, setShowText] = useState(true);

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {count: state.count + 1, showText: state.showText};
            case "TOGGLE_SHOW_TEXT":
                return {count: state.count, showText: !state.showText};
            default:
                return state;
        }
    };


    const [state, dispatch] = useReducer(reducer,{ count: 0, showText: false });

    return (
        <div>
            <hr/>
            {/*<h4 style={{color: "rebeccapurple" }}>User Reducer Hook Section</h4>*/}
            {/*<h4 style={{color: "rebeccapurple" }}>User Reducer Hook and UseState are similar</h4>*/}
            {/*<h1>{count}</h1>*/}
            {/*<button*/}
            {/*onClick={*/}
            {/*    ()=> {*/}
            {/*        setCount(count + 1);*/}
            {/*        setShowText(!showText);*/}
            {/*    }*/}
            {/*}*/}
            {/*>Click Here</button>*/}
            {/*<div>Note: Text below shows only when showText value is true</div>*/}
            {/*{showText && <p>This is a text</p>}*/}


            {/*<h4 style={{color: "rebeccapurple"}}>Using use Reducer Hook to solve the commented code in this file</h4>*/}
            <h1 style={{color: "rebeccapurple"}}>User Reducer Hook section</h1>
            <h1>{state.count}</h1>
            <button
                onClick={
                    () => {
                       dispatch({ type: "INCREMENT" });
                       dispatch({ type: "TOGGLE_SHOW_TEXT" });
                        // setCount(scount + 1);
                       // setShowText(!showText);
                    }
                }
            >Click Here</button>
            <div>Note: Text below shows only when showText value is true</div>
            {state.showText && <p>This is a text</p>}


        </div>
    );
}


export default UserReducerHook;