import {AxiosUsersType} from "../../Redux/reducer/users-reducer";
import styles from "./usersContainer.module.css";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Pagination} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import {AntDesignOutlined} from '@ant-design/icons';

type UsersPropsType = {
    users: Array<AxiosUsersType>
    onPageChanged: (page: number) => void
    currentPage: number
    totalUserCount: number
    pageSize: number
    followingInProgress: any[]
    toggleFollowTC: (userId: number, followed: boolean) => void
}

export const Users = (
    {
        toggleFollowTC,
        users,
        currentPage,
        followingInProgress,
        totalUserCount,
        pageSize,
        onPageChanged
    }: UsersPropsType) => {

    const [page, setCurrentPage] = useState(currentPage)
    let pagesCount = Math.ceil(totalUserCount / pageSize)

    const onChangePaginationHandler = (page: number, pageSize: number) => {
        onPageChanged(page)
        setCurrentPage(page)
    }

    return <div className={styles.containerStyle}>
        <div>
            <Pagination current={currentPage}
                        //defaultCurrent={1}
                        total={pagesCount}
                        onChange={(page, pageSize) => onChangePaginationHandler(page, pageSize)}
            />
        </div>
        {
            users.map(u => <UserCard id={u.id}
                                     key={u.id}
                                     smallPhoto={u.photos.small}
                                     name={u.name}
                                     status={u.status}
                                     followed={u.followed}
                                     followingInProgress={followingInProgress}
                                     toggleFollowTC={toggleFollowTC}
            />)
        }
    </div>
}

type UserCardPropsTypes = {
    id: number,
    smallPhoto: any,
    name: string,
    status: string,
    followed: boolean,
    followingInProgress: any[],
    toggleFollowTC: (userId: number, followed: boolean) => void,
}

export const UserCard = (
    {
        toggleFollowTC,
        followingInProgress,
        id,
        followed,
        status,
        name,
        smallPhoto
    }: UserCardPropsTypes) => {

    return <div key={id} className={styles.UserStyle} style={{display: 'flex', maxWidth: '300px'}}>
        <div>
            <div>
                <NavLink to={'/profile/' + id}>
                    {smallPhoto
                        ? <img src={smallPhoto} className={styles.photo}/>
                        : <Avatar
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                            icon={<AntDesignOutlined/>}
                        />}
                </NavLink>
            </div>

        </div>
        <div>
            <div>
                <div>name: {name || 'no name'}</div>
                <div>status: {status || '----'}</div>
            </div>
            <div>
                <div> country: ?</div>
                <div> citi: ?</div>
            </div>
        </div>
        <div>
            {
                followed ?
                    <button disabled={followingInProgress.some(id => id === id)}
                            onClick={() => toggleFollowTC(id, followed)}
                            className={styles.UnfollowButtonStyle}
                    >
                        Unfollow
                    </button> :
                    <button disabled={followingInProgress.some(id => id === id)}
                            onClick={() => toggleFollowTC(id, followed)}
                            className={styles.FollowButtonStyle}
                    >
                        Follow
                    </button>
            }
        </div>
    </div>
}
