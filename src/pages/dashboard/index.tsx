import { useEffect, useState } from "react"
import { api } from "../../services/api"
import Card from "../../components/Card"
import { ModalAddContact } from "../../components/ModalAddContact"
import { StyledContainer } from "./styled"

export interface Contact {
    id: number
    name: string
    email: string
    phone: string
    registrationDate: string
    clientId: string
}

export const Dashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        (
            async () => {
                const response = await api.get<Contact[]>('/contacts')
                setContacts(response.data)
                console.log(response.data)
            }
        )()
    }, [])

    const toggleModal = () => setIsOpenModal(!isOpenModal)

    return (
        <StyledContainer>
            <header>
                <h1>Dashboard</h1>
                <button type="button" onClick={toggleModal}>Criar novo contato</button>
            </header>

            {
                isOpenModal && <ModalAddContact toggleModal={toggleModal} setContacts={setContacts}/>
            }

            <ul>
            {contacts.map((contact) => (<Card key={contact.id} contact={contact} />))}
            </ul>
        </StyledContainer >
    )
}