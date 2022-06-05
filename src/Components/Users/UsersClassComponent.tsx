import React from 'react';
import styles from './usersContainer.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg'
import {AxiosUsersType, UsersType} from "../../Redux/users-reducer";

type PropsType = {
    users: Array<AxiosUsersType>
    toggleFollow: (userID: number) => void
    setUsers: (users: UsersType) => void
}

class UsersClassComponent extends React.Component<PropsType> {

    componentDidMount() {
        console.log('component is Mount')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response.data.items[0]);
                this.props.setUsers(response.data.items)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div className={styles.containerStyle}>
                {
                    this.props.users.map(u => <div key={u.id} className={styles.UserStyle}>
                        <div>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
                            </div>

                        </div>
                        <div>
                            <div>
                                <div>name: {u.name}</div>
                                <div>status: {u.status}</div>
                            </div>
                            <div>
                                <div> country: ?</div>
                                <div> citi: ?</div>
                            </div>
                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        this.props.toggleFollow(u.id)
                                    }} className={styles.UnfollowButtonStyle}>Unfollow</button> :
                                    <button onClick={() => {
                                        this.props.toggleFollow(u.id)
                                    }} className={styles.FollowButtonStyle}>Follow</button>
                            }
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default UsersClassComponent;