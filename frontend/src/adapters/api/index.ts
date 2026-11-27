import axios from "axios";
import type { ApiServiceType } from "./types";
import type { User, Book } from "../../domains";

const apiClient: ApiServiceType['apiClient'] = axios.create({
    baseURL: 'https://my.site.ru/api/v1',
    headers:{
        'Content-Type': 'application/json',
    },
    timeout: 15000,
    withCredentials: true,
});

/**
 * Сервис по работе с API
 */
export const apiService: ApiServiceType = {
    apiClient,

    getUser: async (id) => {
        const response = await apiClient.get<User>(`/users/${id}`);
        // const response = await apiClient.get<User>('/user.json');
        return response.data
    },
    getBook: async (name) => {
        const response = await apiClient.get<Book>(`/books/${name}`);
        return response.data
    }
};