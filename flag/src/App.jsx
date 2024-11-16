import { useContext } from "react";
import CanvasPage from "./components/CanvasPage"
import Header from "./components/Header"
import { UserContext } from "./context/userContext";
import Modal from "./components/Modal";


function App() {
  const {showModal }  = useContext(UserContext);

  return (
    <>
    <Header />
     <CanvasPage />
   {showModal && <div className="absolute top-[20rem] -right-[25rem] w-[60rem] ">
        <Modal />
    </div>}

    </>
  )
}

export default App
