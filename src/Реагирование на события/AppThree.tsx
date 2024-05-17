type ButtonType = {
    onSmash: () => void
    children: React.ReactNode
}

function Button({onSmash, children}: ButtonType) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

export default function AppThree() {
    return (
        <div>
            <Button onSmash={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onSmash={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}
