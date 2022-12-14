import { useState, createContext } from "react";

const ModalContext = createContext();

const ModalProvider = (props) =>{
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () =>{
        setModalOpen(!modalOpen)
    }
    return(
        <ModalContext.Provider value={{modalOpen, toggleModal}}>
            {props.children}
        </ModalContext.Provider>
    )
}


export {ModalContext, ModalProvider}