import * as axios from "axios";
//DAL file

//instance of axios with settings
const axInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2973541a-efc3-4f33-b1ea-6cbea2c6f270'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    follow(userId){
        return axInstance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return axInstance.delete(`follow/${userId}`)
    }
}

//profile API

//follow/unfollow API