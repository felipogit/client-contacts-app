// import { SetStateAction } from "react"
// import { Contact } from "../../pages/dashboard"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { ContactData, contactSchema } from "./validator"
// import { api } from "../../services/api"
// import { Modal } from "../Modal"

// interface ModalEditContactProps {
//     toggleModal: () => void
//     setContacts: React.Dispatch<SetStateAction<Contact[]>>
//     selectedContact: Contact | null; // Adicionando a propriedade para o contato selecionado
//     setSelectedContact: React.Dispatch<SetStateAction<Contact | null>>;
//     contacts: Contact[]
// }

// export const ModalEditContact = ({ toggleModal, setContacts, selectedContact, setSelectedContact, contacts }: ModalEditContactProps) => {
//     const { register, handleSubmit } = useForm<ContactData>({
//         resolver: zodResolver(contactSchema),
//         defaultValues: {
//             name: selectedContact?.name,
//             email: selectedContact?.email,
//             phone: selectedContact?.phone,
            
//         }
//     })

//     const editContact = async (data: ContactData, event?: React.BaseSyntheticEvent) => {
//         const response = await api.patch(`/contacts/${postId}`, data);
//         const filterContacts = contacts.filter(contact => contact.id.toString() !== postId);
//         setContacts([...filterContacts, response.data]);
//     };

//     return (
//         <Modal toggleModal={toggleModal} >
//             <form onSubmit={(e) => handleSubmit((data) => editContact(data, e))} >
//                 <label htmlFor="name">Nome</label>
//                 <input type="text" id="name" {...register("name")} />

//                 <label htmlFor="email">E-mail</label>
//                 <input type="email" id="email" {...register("email")} />

//                 <label htmlFor="phone">Celular</label>
//                 <input type="text" id="phone" {...register("phone")} />

//                 <button type="submit">Cadastrar</button>
//             </form>
//         </Modal>
//     )
// }