import axios from "axios";
import {LoginPayloadType} from "../Redux/reducer/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    headers: {
        "API-KEY": "db201859-ca8d-43e6-86f0-2e698d4710cf"
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