import { createContext, useState } from "react";

export const UserContext = createContext();

 const UserProvider = ({ children }) => {
    // show modal
    const [showModal, setShowModal] = useState(false);
    
    return <UserContext.Provider value = {{ showModal, setShowModal}}>
        {children }
    </UserContext.Provider>
}


export default UserProvider;