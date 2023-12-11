import { ReactNode, useEffect, useState } from "react";
import { ModalError } from "../ModalError";
import axios from "axios";

interface AxiosInterceptorProps {
    children: ReactNode
}

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
    const [ isOpenModal, setIsOpenModal ] = useState(false)

    useEffect(() => {
        const errorInterceptor = (error: Error) => {
            if(!axios.isAxiosError(error)) {
                return Promise.reject(error)
            }

            if(error.response?.status === 401) {
                setIsOpenModal(true)
            }

            return Promise.reject(error)
        }
    }, [])

    return (
        <>
            {isOpenModal && <ModalError toggleModal={() => setIsOpenModal(!isOpenModal)} />}
            {children}
        </>
    )
}