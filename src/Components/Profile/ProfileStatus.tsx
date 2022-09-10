import React from "react";
import {profileAPI} from "../../api/profileAPI";

type PropsType = {
    status: string
    userId: number
}

export class ProfileStatus extends React.Component<PropsType, any> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deActivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}></input>
                    </div>
                }
                <div>{profileAPI.getStatus(this.props.userId)}</div>
            </div>
        )
    }
}
