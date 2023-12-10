import React from "react";
import { Contact } from "../../pages/dashboard";
import { StyledContainer } from "./styled";

interface CardProps {
    contact: Contact;
}
const Card: React.FC<CardProps> = ({ contact }) => {
    return (
        <StyledContainer>
            <h3> Nome: {contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Telefone: {contact.phone}</p>
            <p>Criado em: {contact.registrationDate}</p>

            <div>
                <button>Editar</button>
            </div>
        </StyledContainer>
    );
};

export default Card;
