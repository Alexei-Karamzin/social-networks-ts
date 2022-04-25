import React from 'react';
import ReactDOM from "react-dom";
import {App} from "./App";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </Provider>

        </React.StrictMode>
,
document.getElementById('root')
);
}

rerenderEntireTree(store.getState())

store.subscribe(()=>
    {
        let state = store.getState
        rerenderEntireTree(state)
    }
)