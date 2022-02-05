import React from "react";
import classes from './Post.module.css';

type MessegeType = {
    messege:string
}

export const Post: React.FC<MessegeType> = (props) => {
    return <div className={classes.post}>
        <img src='https://sun9-87.userapi.com/impg/KpMvE2XlSar6vdqaS0U4L-Jvs-VcfMo9OZvheg/CW-8Tk3OJXc.jpg?size=864x1080&quality=96&sign=09320fbdaec6c26518acf74741ba0b5c&type=album'/>
        {props.messege}
    </div>
}