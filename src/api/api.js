import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "59fdeabc-f101-4fcb-a8f7-af7bf9b88127",
  },
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return response.data;
  },
};

export const unfollowAPI = {
  async unfollowApi(id) {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },
};

export const followAPI = {
  async followApi(id) {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
};

export const profileAPI = {
  async profileApi(userId) {
    const response = await instance.get(`profile/` + userId);
    return response.data;
  },
};
export const setStatusAPI = {
  async getProfile(userId) {
    return await instance.get(`profile/` + userId);
  },

  async updateStatus(status) {
    const request = await instance.put(`profile/status`, { status: status });
    return request.data;
  },
  async getStatus(userId) {
    const response = await instance.get(`profile/status/` + userId);
    return response.data;
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email,password,rememberMe = false) {
    return instance.post(`auth/login`,{email,password,rememberMe});
  },
  logout() {
    return instance.post(`auth/logout`);
  },
};
