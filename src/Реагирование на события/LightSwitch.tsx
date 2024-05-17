export default function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'red') {
            bodyStyle.backgroundColor = 'blue';
        } else {
            bodyStyle.backgroundColor = 'red';
        }
    }

    return (
        <button onClick={()=>handleClick()}>
            Toggle the lights
        </button>
    );
}
