import type { User, Book } from "../../../domains"

export type UseArgs = {
    userId: number;
}

export type UseReturn = {
    /**
     * Состояние ошибки
     */
    isError: boolean;

    /**
     * Пользователь
     */
    user: User | null;

    /**
     * Состояние загрузки
     */
    isLoading: boolean;

    /**
     * Повторить запрос
     */
    onRetry: () => void;
}

export type UseRead = {
    
} 