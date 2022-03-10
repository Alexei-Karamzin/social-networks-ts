import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {addMessageFromDialog, addPost, RootStateType, UpdateTextDialog, UpdateTextPost} from "./Redux/state";

export let rerenderEntireTree = (props:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={props}
                addPost={addPost}
                addMessageFromDialog={addMessageFromDialog}
                UpdateTextPost={UpdateTextPost}
                UpdateTextDialog={UpdateTextDialog}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}