import React, {useState} from 'react';
import './App.css';
import {RenderDataIsArray} from "./Рендеринг данных из массивов/RenderDataIsAraay";
import {FilterArrayElements} from "./Фильтрация массивов элементов/FilterArrayElements";
import {Button} from "./Реагирование на события/Button";
import Toolbar from "./Реагирование на события/AlertButton";
import ToolbarTwo from "./Реагирование на события/Toolbar";
import AppThree from "./Реагирование на события/AppThree";
import LightSwitch from "./Реагирование на события/LightSwitch";
import {UseState} from "./usState/UseState";
import {ConditionalRendering} from "./Conditional Rendering/ConditionalRendering";
import {Destructuring} from "./DestructuRing/Destructuring";
import {v1} from "uuid";


export type BooksType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const books: BooksType[] = [
        {id: v1(), title: 'CSS3', isDone: false},
        {id: v1(), title: 'CSS3', isDone: false},
        {id: v1(), title: 'CSS3', isDone: false},
        {id: v1(), title: 'CSS3', isDone: false},
        {id: v1(), title: 'CSS3', isDone: false}
    ]
    const [book, setBook] = useState<BooksType[]>(books)

    function addBook(newTitle: string) {
        const boc: BooksType = {id: v1(), title: newTitle, isDone: false};

        const newTasks = [boc, ...book]
        setBook(newTasks)
        console.log(newTitle)
    }

    return (
        <div className="App">
            {/*<RenderDataIsArray/>*/}
            {/*<br/>*/}
            {/*<FilterArrayElements/>*/}
            {/*<br/>*/}
            {/*<Button/>*/}
            {/*<br/>*/}
            {/*<Toolbar/>*/}
            {/*<br/>*/}
            {/*<ToolbarTwo/>*/}
            {/*<br/>*/}
            {/*<AppThree/>*/}
            {/*<br/>*/}
            {/*<LightSwitch/>*/}
            {/*<br/>*/}
            {/*<UseState/>*/}
            {/*<br/>*/}
            {/*<ConditionalRendering/>*/}
            {/*<br/>*/}


            <Destructuring
                book={book}
                addBook={addBook}
            />
        </div>
    );
}

export default App;
