import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, loginSchema } from "./validator"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"


export const Login = () => {

    const authContext = useContext(AuthContext)
    
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    })

    const submit = async (data: LoginData) => {
        await authContext.signIn(data);
       
    }

    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(submit)} >
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")} />

                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}