import React from 'react';
import ReactDOM from "react-dom";
import {App} from "./App";
import store from "./Redux/state";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


store.subscribe(rerenderEntireTree)

rerenderEntireTree()

