import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    id:number,
    name:string
}

export const DialogItem = (props:PropsType) => {
    return (
        <div>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}