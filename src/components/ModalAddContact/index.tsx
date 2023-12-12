import { SetStateAction } from "react"
import { Contact } from "../../pages/dashboard"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactData, contactSchema } from "./validator"
import { api } from "../../services/api"
import { Modal } from "../Modal"
import { StyledForm } from "./styled"

interface ModalAddContactProps {
    toggleModal: () => void
    setContacts: React.Dispatch<SetStateAction<Contact[]>>
    
}

export const ModalAddContact = ({ toggleModal, setContacts }: ModalAddContactProps) => {
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(contactSchema)
    })

    const createContact = async (data: ContactData) => {
        const response = await api.post('/contacts', { ...data })
        setContacts(clients => [response.data, ...clients,])
        toggleModal()
    }

    return (
        <Modal toggleModal={toggleModal} >
            <StyledForm onSubmit={handleSubmit(createContact)} >
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" {...register("name")} />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="phone">Celular</label>
                <input type="text" id="phone" {...register("phone")} />

                <button type="submit">Cadastrar</button>
            </StyledForm>
        </Modal>
    )
}