import {useState} from "react";

export const UseState = () => {

    const [state, setState] = useState<number>(0)

    function onClickHandler() {
        setState(state + 1)
    }

    return (
        <div>
            <button onClick={onClickHandler}>STATE: {state}</button>
        </div>
    )
}