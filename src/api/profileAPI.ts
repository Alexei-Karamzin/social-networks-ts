import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
    headers: {
        "API-KEY": "db201859-ca8d-43e6-86f0-2e698d4710cf"
    }
})

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`status`, {
            status: status
        })
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append("image", file)

        return instance.put('photo', formData, {
            headers: {
                'Content-Type': 'multipart'
            }
        })
    },
}



