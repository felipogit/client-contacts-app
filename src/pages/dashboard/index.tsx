import { useEffect, useState } from "react"
import { api } from "../../services/api"
import Card from "../../components/Card"
import { ModalAddContact } from "../../components/ModalAddContact"
import { StyledContainer } from "./styled"
import { ModalUpdate } from "../../components/ModalUpdate"
import { FormEditContact } from "../../components/FormUpdateContact"
import { StyledContainerTop } from "../../styles/flex"

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
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);


    useEffect(() => {
        (
            async () => {
                const response = await api.get<Contact[]>('/contacts')
                setContacts(response.data)

            }
        )()
    }, [])

    const toggleModal = () => setIsOpenModal(!isOpenModal)
    const openModal = () => setIsOpenModalUpdate(!isOpenModalUpdate)

    const handleDeleteContact = async (id: string) => {
        await api.delete(`/contacts/${id}`);
        setContacts((prevContacts) => prevContacts.filter((contact) => String(contact.id) !== id));
    };


    return (
        <StyledContainer>

            <header>
                <h1>Bem vindo</h1>
                <button type="button" onClick={toggleModal}>Criar novo contato</button>
            </header>

            <StyledContainerTop>

                {
                    isOpenModal && <ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />
                }

                {
                    isOpenModalUpdate && <FormEditContact contact={selectedContact} openModal={openModal} setContacts={setContacts} />
                }


                <ul>
                    {contacts.map((contact) => (<Card key={contact.id} contact={contact} openModal={openModal} handleDeleteContact={handleDeleteContact} setSelectedContact={setSelectedContact} />))}
                </ul>
            </StyledContainerTop>
        </StyledContainer >
    )
}