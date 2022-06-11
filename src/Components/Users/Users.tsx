import {AxiosUsersType} from "../../Redux/users-reducer";
import styles from "./usersContainer.module.css";
import userPhoto
    from "../../assets/images/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg";
import React from "react";

type UsersPropsType = {
    users: Array<AxiosUsersType>
    toggleFollow: (userID: number) => void
    onPageChanged: (page: number) => void
    currentPage: number
    totalUserCount: number
    pageSize: number
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.containerStyle}>
        <div>
            {pages.map(el => <span
                className={props.currentPage === el ? styles.selectedPage : styles.defaultPage}
                onClick={() => props.onPageChanged(el)}
            >
                        {el}
                    </span>)}
        </div>
        {
            props.users.map(u => {
                return <div key={u.id} className={styles.UserStyle}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.photo}/>
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
                </div>
            } )
        }
    </div>
}