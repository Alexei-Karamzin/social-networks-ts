import React from 'react';
import styles from './usersContainer.module.css'
import {InitialStateUsersType, UserType} from "../../Redux/users-reducer";

type PropsType = {
    users: Array<UserType>
    toggleFollow: (userID: number) => void
    setUsers: (users: InitialStateUsersType) => void
}

const Users = (props: PropsType) => {

/*    if(props.users.length===0){
        props.setUsers([
            {id: 1, photoUrl: 'https://sun9-38.userapi.com/s/v1/if2/DKfhcucGVkbIy85O-q5e8Cn-7FozjXXY84tQZfXLz3BhfIbfsG30EkEuWQ1gwMmREiU-qhTdlQVp48J3s-9XkueK.jpg?size=607x1080&quality=96&type=album',
                followed: true, fullName: 'Alex', status:'good', location: {citi: 'Grodno', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://sun9-87.userapi.com/s/v1/if2/Xxvd9zECwLM9vop7ORy9P4S4I_fmXl2PAi5rYCuJty6idee4Jcc6DA55J5NP96Pv7LIFy9kSmEgy2wrjhwvAQ4OU.jpg?size=864x1080&quality=96&type=album',
                followed: false, fullName: 'Sasha', status:'I am good too', location: {citi: 'Minsk', country: 'Belarus'}},
            {id: 3, photoUrl: 'https://sun9-54.userapi.com/s/v1/if2/SZxOJFAc7Ij6xySiJczpRAqS_CwCrrs0qlp0groaEyxJs6SfFh1LbU4Yvz1WM_aw6YIw32NW2kIA7Jc3T9VHB2O5.jpg?size=810x1080&quality=96&type=album',
                followed: true, fullName: 'Tim', status:'hello', location: {citi: 'Gomel', country: 'Belarus'}}
        ])
    }
    */

    return (
        <div className={styles.containerStyle}>
            {
                props.users.map(u => <div key={u.id} className={styles.UserStyle}>
                    <div>
                        <div>
                            <img src={u.photoUrl} className={styles.photo}/>
                        </div>

                    </div>
                    <div>
                        <div>
                            <div>name: {u.fullName}</div>
                            <div>status: {u.status}</div>
                        </div>
                        <div>
                            <div> country: {u.location.country}</div>
                            <div> citi: {u.location.citi}</div>
                        </div>
                    </div>
                    <div>
                        {
                            u.followed ?
                            <button onClick={()=>{props.toggleFollow(u.id)}} className={styles.UnfollowButtonStyle}>Unfollow</button> :
                            <button onClick={()=>{props.toggleFollow(u.id)}} className={styles.FollowButtonStyle}>Follow</button>
                        }

                    </div>



                </div>)
            }
        </div>
    );
};

export default Users;