import axios from "axios";
import {LoginPayloadType} from "../Redux/reducer/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    headers: {
        "API-KEY": "25b09af8-ff36-4dd1-be5d-fb4aefde5c55"
    }
})

export const authAPI = {
    authMe() {
        return instance.get('me')
    },
    login(data: LoginPayloadType) {
        return instance.post('login', data)
    },
    logout() {
        return instance.delete('login')
    }
}

