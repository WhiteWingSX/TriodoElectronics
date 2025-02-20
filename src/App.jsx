import { Navbar } from "./components/Navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="*" element={<div>La pagina no Existe</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
