import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {App} from "./App";
import store from "./Redux/state";




let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                addMessageFromDialog={store.addMessageFromDialog.bind(store)}
                UpdateTextPost={store.UpdateTextPost.bind(store)}
                UpdateTextDialog={store.UpdateTextDialog.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
