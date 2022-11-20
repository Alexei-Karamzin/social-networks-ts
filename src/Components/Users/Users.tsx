import {AxiosUsersType} from "../../Redux/reducer/users-reducer";
import styles from "./usersContainer.module.css";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "../../App.module.css";
import {Pagination, Spin} from "antd";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import Avatar from "antd/lib/avatar/avatar";
import {AntDesignOutlined} from '@ant-design/icons';

type UsersPropsType = {
    users: Array<AxiosUsersType>
    toggleFollow: (userID: number) => void
    onPageChanged: (page: number) => void
    currentPage: number
    totalUserCount: number
    pageSize: number
    followingInProgress: any[]
    toggleFollowTC: (userId: number, followed: boolean) => void
}

export const Users = (props: UsersPropsType) => {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    const [currentPage, setCurrentPage] = useState(props.currentPage)
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    /*if(!isInitialized) {
        return  <div className={s.spin}>
            <Spin size="large" />
        </div>
    }*/

    const onChangePaginationHandler = (page: number, pageSize: number) => {
        props.onPageChanged(page)
        setCurrentPage(page)
    }

    return <div className={styles.containerStyle}>
        <div>
            {/*{pages.map(el => <span
                className={props.currentPage === el ? styles.selectedPage : styles.defaultPage}
                onClick={() => props.onPageChanged(el)}
            >
                        {el}
                    </span>)}*/}
            {/*{pages.map(el => paginationHandler)}*/}
            <Pagination current={currentPage}
                //defaultCurrent={1}
                        total={pagesCount}
                        onChange={(page, pageSize) => onChangePaginationHandler(page, pageSize)}
            />
        </div>
        {
            props.users.map(u => <UserCard id={u.id}
                                           key={u.id}
                                           smallPhoto={u.photos.small}
                                           name={u.name}
                                           status={u.status}
                                           followed={u.followed}
                                           followingInProgress={props.followingInProgress}
                                           toggleFollow={props.toggleFollow}
                                           toggleFollowTC={props.toggleFollowTC}
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
    toggleFollow: (userID: number) => void,
    toggleFollowTC: (userId: number, followed: boolean) => void,
}

export const UserCard = (props: UserCardPropsTypes) => {

    return <div key={props.id} className={styles.UserStyle} style={{display: 'flex', maxWidth: '300px'}}>
        <div>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    {props.smallPhoto
                        ? <img src={props.smallPhoto} className={styles.photo}/>
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
                <div>name: {props.name || 'no name'}</div>
                <div>status: {props.status || '----'}</div>
            </div>
            <div>
                <div> country: ?</div>
                <div> citi: ?</div>
            </div>
        </div>
        <div>
            {
                props.followed ?
                    <button disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => props.toggleFollowTC(props.id, props.followed)}
                            className={styles.UnfollowButtonStyle}
                    >
                        Unfollow
                    </button> :
                    <button disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => props.toggleFollowTC(props.id, props.followed)}
                            className={styles.FollowButtonStyle}
                    >
                        Follow
                    </button>
            }
        </div>
    </div>
}
