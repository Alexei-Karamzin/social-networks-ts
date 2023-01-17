import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "25b09af8-ff36-4dd1-be5d-fb4aefde5c55"
    }
})

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append("profile/image", file)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart'
            }
        })
    },
    editProfile(value: any) {
        console.log(instance)
        return instance.put(`profile`, value)
    },
}



