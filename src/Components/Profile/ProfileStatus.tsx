import React, {ChangeEvent} from "react";

type PropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status || 'default')
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<ReturnType<any>>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
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
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deActivateEditMode}
                               value={this.state.status || 'default'}
                        />
                    </div>
                }
            </div>
        )
    }
}
