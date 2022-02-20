import React from "react";
import classes from './Post.module.css';

type MessageType = {
    message:string,
    LikeCounts:number
}

export const Post: any = (props: MessageType) => {

    return <div>
       <div className={classes.item}><img src='https://img2.fonwall.ru/o/tp/abstract-digital-art-deviantart.jpeg?route=mid&h=750'/>
        {props.message}
           <div>
               {props.LikeCounts} Like
           </div>
       </div>
    </div>
}