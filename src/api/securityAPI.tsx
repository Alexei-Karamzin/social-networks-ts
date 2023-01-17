import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "25b09af8-ff36-4dd1-be5d-fb4aefde5c55"
    }
})

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    },
}