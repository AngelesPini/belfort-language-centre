import { useState, createContext } from "react";

const ModalContextTest = createContext();

const ModalTestProvider = (propsTest) =>{
    const [modalOpenTest, setModalOpenTest] = useState(false);

    const toggleModalTest = () =>{
        setModalOpenTest(!modalOpenTest)
    }
    return(
        <ModalContextTest.Provider value={{modalOpenTest, toggleModalTest}}>
            {propsTest.children}
        </ModalContextTest.Provider>
    )
}


export {ModalContextTest, ModalTestProvider}