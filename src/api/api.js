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
    follow(userId) {
        return axInstance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return axInstance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        //backward compatibility
        console.warn('Obsolete method. Please use profileApi object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axInstance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return axInstance.get(`profile/status/${userId}`);
    },
    updateStatus(statusText) {
        return axInstance.put(`profile/status/`, {status: statusText});
    }
}

export const authAPI = {
    authMe() {
        return axInstance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return axInstance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return axInstance.delete(`auth/login`)
    },
}

