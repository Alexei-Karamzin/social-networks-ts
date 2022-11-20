import React, {useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('')

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateEditModeHandler = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChangeHandler = (value: string) => {
        setStatus(value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={(e) => onStatusChangeHandler(e.currentTarget.value)}
                        autoFocus={true}
                        onBlur={deactivateEditModeHandler}
                        value={status || ''}
                    />
                </div>
            }
        </div>
    )
}
