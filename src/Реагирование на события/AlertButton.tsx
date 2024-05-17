type AlertButtonPropsType = {
    message: string
    children: React.ReactNode
}

export function AlertButton({message, children}: AlertButtonPropsType) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}

export default function Toolbar() {
    return (
        <div>
            <AlertButton message={'Playing'}>
                Play Movie
            </AlertButton>

            <AlertButton message={'Uploading'}>
                Upload Image
            </AlertButton>
        </div>
    )
}