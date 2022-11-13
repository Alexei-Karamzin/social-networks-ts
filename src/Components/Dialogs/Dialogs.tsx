import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from '../../Redux/store'
import {useFormik} from "formik";
import {loginTC} from "../../Redux/reducer/auth-reducer";
import {useAppDispatch} from "../../Redux/redux-store";
import {PlusCircleOutlined} from "@ant-design/icons";

type PropsType = {
    dialogNameData: Array<DialogType>
    dialogMassageData: Array<MessageType>
    onClickAddNewPostHandler: (e: string) => void
}

export const Dialogs = (props: PropsType) => {

    return <div style={{display: 'flex'}}>

        <div style={{borderRight: '2px solid #34050a',paddingLeft: '30px',paddingTop: '30px,color: #fdfdfd'}}>
            {props.dialogNameData.map(element => {
                return (
                    <DialogItem key={element.id} DialogsDataId={element.id} DialogsDataName={element.name}/>
                )
            })}

        </div>
        <AddMessageForm dialogMassageData={props.dialogMassageData}
                        onClickAddNewPostHandler={props.onClickAddNewPostHandler}
            //onChangeMessageHandler={props.onChangeMessageHandler}
            //newMessageDialog={props.newMessageDialog}
        />

    </div>
}

type AddMessageFormPropsType = {
    dialogMassageData: Array<MessageType>,
    onClickAddNewPostHandler: (e: string) => void,
}

export const AddMessageForm = (props: AddMessageFormPropsType) => {

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            dialogForm: '',
        },
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));

            alert(values.dialogForm)
            props.onClickAddNewPostHandler(values.dialogForm)
            formik.resetForm();
        },
    })

    return <form onSubmit={formik.handleSubmit}>
        <div style={{paddingLeft: '30px',paddingTop: '30px'}}>
            {props.dialogMassageData.map(m => <Message key={m.id} id={m.id} item={m.title}/>)}
            <textarea id={'dialogForm'}
                      name="dialogForm"
                      value={formik.values.dialogForm}
                      onChange={formik.handleChange}
            />
            <PlusCircleOutlined />
            <button type="submit">add massage</button>
        </div>
    </form>
}