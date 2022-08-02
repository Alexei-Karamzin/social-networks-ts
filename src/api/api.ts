import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "96046ba6-9b48-4795-a1b7-d5bee23b9ce7"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    }

}


