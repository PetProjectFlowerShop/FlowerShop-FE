import {apiClient} from "./axios";

export interface User {
    id: string,
    name: string,
    email: string
}

export const usersApi = {
    getAll: () => apiClient.get<User[]>('/users'),
    getById: (id: string) => apiClient.get<User>(`/users/${id}`),
}