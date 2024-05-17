type ButtonPropsType = {
    onClick: ()=>void
    children: React.ReactNode
}

function Button({onClick, children}:ButtonPropsType) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

type PlayButtonPropsType = {
    movieName: string
}

function PlayButton({movieName}: PlayButtonPropsType) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

export default function ToolbarTwo() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service"/>
            <UploadButton/>
        </div>
    );
}
