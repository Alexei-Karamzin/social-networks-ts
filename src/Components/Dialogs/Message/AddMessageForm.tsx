import {MessageType} from "../../../Redux/store";
import {useFormik} from "formik";
import {Message} from "./Message";
import React from "react";

type AddMessageFormPropsType = {
    dialogMassageData: Array<MessageType>,
    onClickAddNewPostHandler: (e: string) => void,
}

export const AddMessageForm = (props: AddMessageFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            dialogForm: '',
        },
        onSubmit: values => {
            props.onClickAddNewPostHandler(values.dialogForm)
            formik.resetForm();
        },
    })

    return <form onSubmit={formik.handleSubmit}>
        <div style={{paddingLeft: '30px',paddingTop: '30px'}}>
            {props.dialogMassageData.map(m => <Message key={m.id}
                                                       id={m.id}
                                                       item={m.title}
            />)}
            <textarea id="dialogForm"
                      name="dialogForm"
                      value={formik.values.dialogForm}
                      onChange={formik.handleChange}
            />
            <button type="submit">add massage</button>
        </div>
    </form>
}