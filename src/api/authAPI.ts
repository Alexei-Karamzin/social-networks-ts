import axios from "axios";

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
    login(email: string, password: string, /*rememberMe: boolean, captcha: boolean*/) {
        return instance.post('login', {
            email: email,
            password: password,
            rememberMe: true,
            captcha: true
        })
    }
}