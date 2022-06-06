export type usersActionType = toggleFollowActionType | setUsersActionType

export type toggleFollowActionType = {
    type: 'TOGGLE_FOLLOW',
    userID: number
}
export type setUsersActionType = {
    type: 'SET_USERS',
    users: any
}

export type InitialStateUsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        citi: string
        country: string
    }
}

export type UsersType = {
    users: Array<AxiosUsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export type AxiosUsersType = {
    name: string
    id: number
    photos: PhotoType
    status: string
    followed: boolean
}

export type PhotoType = {
    small: string
    large: string
}


const initialState: UsersType /*InitialStateUsersType*/ = {
    users: [
        /*{id: 1, photoUrl: 'https://sun9-38.userapi.com/s/v1/if2/DKfhcucGVkbIy85O-q5e8Cn-7FozjXXY84tQZfXLz3BhfIbfsG30EkEuWQ1gwMmREiU-qhTdlQVp48J3s-9XkueK.jpg?size=607x1080&quality=96&type=album',
        followed: true, fullName: 'Alex', status:'good', location: {citi: 'Grodno', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://sun9-87.userapi.com/s/v1/if2/Xxvd9zECwLM9vop7ORy9P4S4I_fmXl2PAi5rYCuJty6idee4Jcc6DA55J5NP96Pv7LIFy9kSmEgy2wrjhwvAQ4OU.jpg?size=864x1080&quality=96&type=album',
            followed: false, fullName: 'Sasha', status:'I am good too', location: {citi: 'Minsk', country: 'Belarus'}},
        {id: 3, photoUrl: 'https://sun9-54.userapi.com/s/v1/if2/SZxOJFAc7Ij6xySiJczpRAqS_CwCrrs0qlp0groaEyxJs6SfFh1LbU4Yvz1WM_aw6YIw32NW2kIA7Jc3T9VHB2O5.jpg?size=810x1080&quality=96&type=album',
            followed: true, fullName: 'Tim', status:'hello', location: {citi: 'Gomel', country: 'Belarus'}}*/
    ],
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1
}


export const usersReducer = (state: UsersType /*InitialStateUsersType*/ = initialState, action: usersActionType): UsersType/*InitialStateUsersType*/ => {
    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const toggleFollowAC = (userID: number): toggleFollowActionType => {
    return {type: 'TOGGLE_FOLLOW', userID}
}
export const setUsersAC = (users: any): setUsersActionType => {
    return {type: 'SET_USERS', users}
}

/*
export const AddPostAC = (): addPostActionType => {
    return {type: 'ADD-POST'}
}*/
