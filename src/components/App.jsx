import {Routes, Route} from "react-router-dom";
import '../sass/style.scss';


// context
import { ModalProvider } from "../context/modalContext";
// routes
import Navbar from "./nav/navbar";
import Form from "./form/form";
import Footer from "./footer/footer";
import Home from "./Home/home";
import Cambridge from "./cambridge/cambridge";
import Idiomas from "./idiomas/idiomas";


function App() {
  return (
    <>
    <ModalProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path='/cambridge' element={<Cambridge/>}/>
      <Route path='/idiomas' element={<Idiomas/>}/>
    </Routes>
    <Footer/>
    </ModalProvider>

    </>
  );
}

export default App;
