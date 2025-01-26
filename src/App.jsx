import { Navbar } from "./components/Navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";

function App() {

  return (
    <>
      <Navbar/>
        <ItemListContainer message='mensage por medio de props, Página en construcción'/>
    </>
  )
}

export default App
