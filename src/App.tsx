import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RenderDataIsArray} from "./Рендеринг данных из массивов/RenderDataIsAraay";
import {FilterArrayElements} from "./Фильтрация массивов элементов/FilterArrayElements";

function App() {
    return (
        <div className="App">
            <RenderDataIsArray/>
            <br/>
            <FilterArrayElements/>
        </div>
    );
}

export default App;
