import React from "react";

type ContactPropsType = {
    contactTitle: any
    contactValue: any
}

export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {


    return <div>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}