import { createContext, useState } from "react";

export const UserContext = createContext();

 const UserProvider = ({ children }) => {
     // second hall door animation
     const [secondHall, setSecondHall] = useState(false);
     const [moveCamera, setMoveCamera] = useState(false);
     const [showMovie, setShowMovie] = useState(false);
    
    return <UserContext.Provider value = {{ secondHall, setSecondHall, moveCamera, setMoveCamera, showMovie, setShowMovie}}>
        {children }
    </UserContext.Provider>
}


export default UserProvider;