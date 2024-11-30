import { createContext, useState } from "react";

export const UserContext = createContext();

 const UserProvider = ({ children }) => {
     // second hall door animation
     const [secondHall, setSecondHall] = useState(false);
    
    return <UserContext.Provider value = {{ secondHall, setSecondHall}}>
        {children }
    </UserContext.Provider>
}


export default UserProvider;