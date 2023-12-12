import React from "react";
import { Contact } from "../../pages/dashboard";
import { StyledContainer } from "./styled";

interface CardProps {
    contact: Contact;
    openModal: () => void
    setSelectedContact: React.Dispatch<React.SetStateAction<Contact | null>>
    handleDeleteContact: (id: string) => void
}
const Card: React.FC<CardProps > = ({ contact, openModal, setSelectedContact, handleDeleteContact }) => {
    

    const openModalUpdate = () => {
        setSelectedContact(contact)
        openModal()
    }

    return (
        <StyledContainer>
            <h3> Nome: {contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Telefone: {contact.phone}</p>
            <p>Criado em: {contact.registrationDate}</p>

            <div>
                <button onClick={openModalUpdate} >Editar</button>
                <button onClick={() => handleDeleteContact(String(contact.id))}>excluir</button>
            </div>
            

            
        </StyledContainer>
    );
};

export default Card;
