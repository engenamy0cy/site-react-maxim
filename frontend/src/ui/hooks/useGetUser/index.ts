import { useEffect, useState } from "react"
import { apiService } from "../../../adapters/api";
import type { UseArgs, UseReturn } from "./types";




export function useGetUser(args: UseArgs): UseReturn {
    const {
        userId,
    } = args;

    const [user, setUser] = useState<UseReturn['user']>(null);
    const [isError, setIsError] = useState<UseReturn['isError']>(false);
    const [isLoading, setIsLoading] = useState<UseReturn['isLoading']>(false);

    const getData = async () => {
    setUser(null);
    setIsLoading(true);
    try{
        const data = await apiService.getUser(userId)
        setUser(data);
        setIsError(false);
    } catch (error){
        setIsError(true)
    }finally{
        setIsLoading(false);
    }
    }

    useEffect(() => {
    getData();
    }, []);


    return{
        isError,
        isLoading,
        onRetry: getData,
        user,
    }
}