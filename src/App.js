import './App.css';
import UserReducerHook from "./use-reducer-hook";
import UseEffectHook from "./use-effect-hook";
import UseRefHook from "./use-ref-hook";
import UseContextHook from "./use-context-hook";
import UseCallbackHook from "./use-callback-hook";
import UseMemoHook from "./use-memo-hook";
import UseLayoutEffectHook from "./use-layout-effect-hook";
import UseImperativeHandleHook from "./use-imperative-handle-hook";
import UseDebugValueHook from "./use-debug-value-hook";
import UseStateHook from "./use-state-hook";

function App() {
  return (
    <div className="App">
        <UseStateHook/>
        <UserReducerHook/>
        <UseEffectHook/>
        <UseRefHook/>
        <UseContextHook/>
        <UseCallbackHook/>
        <UseLayoutEffectHook/>
        <UseMemoHook/>
        <UseImperativeHandleHook/>
        <UseDebugValueHook/>
    </div>
  );
}

export default App;
