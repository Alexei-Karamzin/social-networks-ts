import React from "react";
import classes from './Post.module.css';

type MessegeType = {
    messege:string,
    LikeCounts:number
}

export const Post: React.FC<MessegeType> = (props) => {
    return <div>
       <div className={classes.item}><img src='https://img2.fonwall.ru/o/tp/abstract-digital-art-deviantart.jpeg?route=mid&h=750'/>
        {props.messege}
           <div>
               {props.LikeCounts} Like
           </div>
       </div>
    </div>
}