import React from 'react';

import userPhoto from '../../assets/images/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg'


/*

type PropsType = {
    users: UsersType
    toggleFollow: (userID: number) => void
    setUsers: (users: UsersType) => void
}


const Users = (props: PropsType) => {

    /!*    if(props.users.length===0){
            props.setUsers([
                {id: 1, photoUrl: 'https://sun9-38.userapi.com/s/v1/if2/DKfhcucGVkbIy85O-q5e8Cn-7FozjXXY84tQZfXLz3BhfIbfsG30EkEuWQ1gwMmREiU-qhTdlQVp48J3s-9XkueK.jpg?size=607x1080&quality=96&type=album',
                    followed: true, fullName: 'Alex', status:'good', location: {citi: 'Grodno', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://sun9-87.userapi.com/s/v1/if2/Xxvd9zECwLM9vop7ORy9P4S4I_fmXl2PAi5rYCuJty6idee4Jcc6DA55J5NP96Pv7LIFy9kSmEgy2wrjhwvAQ4OU.jpg?size=864x1080&quality=96&type=album',
                    followed: false, fullName: 'Sasha', status:'I am good too', location: {citi: 'Minsk', country: 'Belarus'}},
                {id: 3, photoUrl: 'https://sun9-54.userapi.com/s/v1/if2/SZxOJFAc7Ij6xySiJczpRAqS_CwCrrs0qlp0groaEyxJs6SfFh1LbU4Yvz1WM_aw6YIw32NW2kIA7Jc3T9VHB2O5.jpg?size=810x1080&quality=96&type=album',
                    followed: true, fullName: 'Tim', status:'hello', location: {citi: 'Gomel', country: 'Belarus'}}
            ])
        }
        *!/

    let getUsers = () => {
        if (props.users.items.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    console.log(response.data.items[0]);
                    props.setUsers(response.data.items)

                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }

    return (

        <div className={styles.containerStyle}>
            <button onClick={getUsers}>get users</button>
            {
                props.users.items.map(u => <div key={u.id} className={styles.UserStyle}>
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
                                    props.toggleFollow(u.id)
                                }} className={styles.UnfollowButtonStyle}>Unfollow</button> :
                                <button onClick={() => {
                                    props.toggleFollow(u.id)
                                }} className={styles.FollowButtonStyle}>Follow</button>
                        }

                    </div>


                </div>)
            }
        </div>
    );
};

export default Users;*/
