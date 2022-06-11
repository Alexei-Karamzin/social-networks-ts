import React from 'react';
import preloader from "../../../assets/images/Spinner-1.4s-217px.svg";

type PreloaderPropsType = {
    isFetching: boolean
}

export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div>
            { props.isFetching ? <img src={preloader}/> : null}
        </div>
    )
}

