import React, {useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = ({status, updateStatus}: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>('')

    useEffect(() => {
        setNewStatus(status)
    }, [status])

    const deactivateEditModeHandler = () => {
        setEditMode(false)
        updateStatus(newStatus)
    }

    const onStatusChangeHandler = (value: string) => {
        setNewStatus(value)
    }

    return (
        <div>
            Status:
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={(e) => onStatusChangeHandler(e.currentTarget.value)}
                        autoFocus={true}
                        onBlur={deactivateEditModeHandler}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}
