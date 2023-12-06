import { createContext, useState, useContext } from "react";
const myContext = createContext()

export const MyContextProvider = ({children}) =>{
    const [modal,setModal] = useState(null)

    const openModal = (name) => {
        setModal(name);
    }

    const closeModal = () => setModal(null)

    return (
        <myContext.Provider value={{modal,openModal, closeModal}}>
            {children}
        </myContext.Provider>
    )
}

export const useModal = () => useContext(myContext)