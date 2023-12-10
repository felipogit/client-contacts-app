import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const { loading } = useContext(AuthContext)
    
    if(loading) {
        return <h1>Carregando...</h1>
    }

    return <Outlet />
}