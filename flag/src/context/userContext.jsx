import { createContext, useState } from "react";

export const UserContext = createContext();

 const UserProvider = ({ children }) => {
    // show modal
    const [showModal, setShowModal] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#608BC1');

    // change colors
    const changeColors = (color) => {
     setSelectedColor(color);
    }
    
    return <UserContext.Provider value = {{ showModal, setShowModal, selectedColor, setSelectedColor, changeColors}}>
        {children }
    </UserContext.Provider>
}


export default UserProvider;