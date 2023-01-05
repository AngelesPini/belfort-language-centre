import { useState, createContext } from "react";

const ModalContextPrueba = createContext();

const ModalPruebaProvider = (props) =>{
    const [modalPruebaOpen, setModalPruebaOpen] = useState(false);

    const toggleModalPrueba = () =>{
        setModalPruebaOpen(!modalPruebaOpen)
    }
    return(
        <ModalContextPrueba.Provider value={{modalPruebaOpen, toggleModalPrueba}}>
            {props.children}
        </ModalContextPrueba.Provider>
    )
}


export {ModalContextPrueba, ModalPruebaProvider}