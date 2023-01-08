import React from 'react';
import s from "../../../App.module.css";
import {Spin} from "antd";

type PreloaderPropsType = {
    //isFetching: boolean
}

export const Preloader = ({}: PreloaderPropsType) => {
    return <div className={s.spin}>
        <Spin size="large"/>
    </div>
}

