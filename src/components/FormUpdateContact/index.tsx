import { SetStateAction } from "react"
import { Contact } from "../../pages/dashboard"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactData, contactSchema } from "./validator"
import { api } from "../../services/api"
import { ModalUpdate } from "../ModalUpdate"
import { StyledForm } from "../ModalAddContact/styled"


interface ModalEditContactProps {
    openModal: () => void
    setContacts: React.Dispatch<SetStateAction<Contact[]>>
    contact: Contact | null
    
}

export const FormEditContact = ({ openModal, setContacts, contact}: ModalEditContactProps) => {
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: contact?.name,
            email: contact?.email,
            phone: contact?.phone
        }
    })

    const editContact = async (data: ContactData) => {
        const response = await api.patch(`/contacts/${contact?.id}`, { ...data })
        setContacts(clients => clients.map(client => client.id === response.data.id ? response.data : client))
        openModal()
    };

    return (
        <ModalUpdate openModal={openModal}>
            <StyledForm onSubmit={handleSubmit(editContact)} >
                <label htmlFor="name">Nome</label>
                <input  type="text" id="name" {...register("name")} />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="phone">Celular</label>
                <input type="text" id="phone" {...register("phone")} />

                <button type="submit">Concluir</button>
            </StyledForm>
        </ModalUpdate>
    )
}