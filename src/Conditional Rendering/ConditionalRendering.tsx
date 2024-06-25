import {useState} from "react";


export const ConditionalRendering = () => {


    const [red, setRed] = useState(false);
    const [green, setGreen] = useState(false);
    const [yellow, setYellow] = useState(false);

    const redStyle = {
        width: '80px',
        height: '80px',
        border: '1px solid black',
        borderRadius: '10px',
        color: 'red',
        backgroundColor: red ? "red" : "white",
        margin: "10px"
    }

    const greenStyle = {
        width: '80px',
        height: '80px',
        border: '1px solid black',
        borderRadius: '10px',
        color: 'green',
        backgroundColor: green ? "white" : "green",
        margin: "10px"
    }


    const yellowStyle = {
        width: '80px',
        height: '80px',
        border: '1px solid black',
        borderRadius: '10px',
        color: 'yellow',
        backgroundColor: yellow ? "yellow" : "white",
        margin: "10px"
    }

    function onClickGreen() {
      setGreen(!red)
    }

    function onClickRed() {
      setRed(!red)
    }

    function onClickYellow() {
       setYellow(!yellow)
    }

    return (
        <div>
            <div className={'ConditionalRendering'}>

                <div style={redStyle} onClick={onClickRed}>Red</div>
                <div style={yellowStyle} onClick={onClickYellow}>Red</div>
                <div style={greenStyle} onClick={onClickGreen}>Green</div>

            </div>
        </div>
    )
}