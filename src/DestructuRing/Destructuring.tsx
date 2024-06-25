import {BooksType} from "../App";
import {useState} from "react";


type DestructuringProps = {
    book: BooksType[]
    addBook: (newTitle: string) => void
}

export function Destructuring({book, addBook}: DestructuringProps) {
    const [inputValue, setInputValue] = useState("");

    const addBooksHandler = () => {
        addBook(inputValue)
        setInputValue("");
    }


    return (
        <ul>
            {book.map((b) => {
                return (
                    <ol key={b.id}>

                        <span>{b.title}</span>
                    </ol>
                )
            })}

            <div>
                <input
                    value={inputValue}
                    onChange={event => setInputValue(event.currentTarget.value)}
                />
                <button onClick={addBooksHandler}>Add books</button>
            </div>

        </ul>
    )
}