import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type Props = {
    led?: boolean
};
export const ConditionalRendering = (props: Props) => {

    const [click, setClick] = useState();

    const redStyle = {
        width: '80px',
        height: '80px',
        border: '1px solid black',
        borderRadius: '10px',
        color: 'red',
        backgroundColor: 'red'
    }

    const greenStyle = {
        width: '80px',
        height: '80px',
        border: '1px solid black',
        borderRadius: '10px',
        color: 'green',
        backgroundColor: 'green'
    }

    function onClickGreen() {

    }

    function onClickRed() {

    }

    return (
        <div>
            <div className={'ConditionalRendering'}>
                {props.led
                    ? <div style={greenStyle}>Green Style</div>
                    : <div style={redStyle}>Red Style</div>
                }
            </div>

            <div className={'ConditionalRendering'}>


                <button onClick={onClickGreen}>Green Style</button>
                <button onClick={onClickRed}>Red Style</button>
            </div>
        </div>
    )
}