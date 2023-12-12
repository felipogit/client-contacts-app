import { ReactNode, useEffect, useRef } from "react"
import { Container } from "./styled"
import { createPortal } from "react-dom"

interface ModalUpdateProps {
    openModal: () => void
    blockClosing?: boolean
    children: ReactNode
}

export const ModalUpdate = ({ openModal, blockClosing, children }: ModalUpdateProps) => {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) {
                return
            }

            if (!event.target) {
                return
            }

            if (!ref.current.contains(event.target as HTMLElement)) {
                openModal()
            }
        }

        window.addEventListener("mousedown", handleClick)

        return () => {
            window.removeEventListener("mousedown", handleClick)
        }
    }, [openModal])

    return createPortal(
        <Container>
            <div ref={blockClosing ? null : ref}>
                {children}
            </div>
        </Container>,
        document.body
    )
}


 