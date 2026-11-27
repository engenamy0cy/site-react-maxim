import type { AxiosInstance } from "axios";
import type { User, Book } from "../../domains";

export type ApiServiceType = {
    /**
     * Глобальный экземпляр
     */
    readonly apiClient: AxiosInstance;

    /**
     * Получить данные пользователя
     * 
     * @param id идентификатор пользователя
     */

    getUser: (id: number) => Promise<User>;
    getBook: (name: string) => Promise<Book>;
}