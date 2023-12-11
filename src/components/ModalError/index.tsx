import { useNavigate } from "react-router-dom"
import { Modal } from "../Modal"

interface ModalErrorProps {
    toggleModal: () => void
}

export const ModalError = ({ toggleModal }: ModalErrorProps) => {
    const navigate = useNavigate()

    const handleCloseAndRedirect = () => {
        toggleModal()
        navigate('/')
    }

    return (
        <Modal toggleModal={toggleModal} blockClosing >
            <p>Você não está autenticado!!</p>
            <button onClick={handleCloseAndRedirect}>Clique aqui para voltar</button>
        </Modal>
    )
}