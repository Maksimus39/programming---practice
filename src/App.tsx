import React from 'react';
import './App.css';
import {RenderDataIsArray} from "./Рендеринг данных из массивов/RenderDataIsAraay";
import {FilterArrayElements} from "./Фильтрация массивов элементов/FilterArrayElements";
import {Button} from "./Реагирование на события/Button";
import Toolbar from "./Реагирование на события/AlertButton";
import ToolbarTwo from "./Реагирование на события/Toolbar";
import AppThree from "./Реагирование на события/AppThree";
import LightSwitch from "./Реагирование на события/LightSwitch";
import {UseState} from "./usState/UseState";

function App() {
    return (
        <div className="App">
            <RenderDataIsArray/>
            <br/>
            <FilterArrayElements/>
            <br/>
            <Button/>
            <br/>
            <Toolbar/>
            <br/>
            <ToolbarTwo/>
            <br/>
            <AppThree/>
            <br/>
            <LightSwitch/>
            <br/>
            <UseState/>
        </div>
    );
}

export default App;
