import {Routes, Route} from "react-router-dom";
import '../sass/style.scss';


// context
import { ModalProvider } from "../context/modalContext";
import { ModalTestProvider } from "../context/modalContextTest";
import { ModalPruebaProvider } from "../context/modalPrueba";
// routes
import Navbar from "./nav/navbar";
import Form from "./form/form";
import Footer from "./footer/footer";
import Home from "./Home/home";
import Cambridge from "./cambridge/cambridge";
import Idiomas from "./idiomas/idiomas";
import Blog from "./blog/blog";
import CambridgeBlog from "./blog/cambridgeBlog";
import Diezanos from "./blog/diezanos";
import School from "./blog/school";
import Aviso from "./footer/aviso";
import Cookies from "./footer/cookies";
import Privacidad from "./footer/privacidad";
import Whatsappbutton from "./whatsappButton/whatsappbutton";
function App() {
  return (
    <>
    <ModalTestProvider>
    <ModalProvider>
    <ModalPruebaProvider>
    <Navbar/>
    <Whatsappbutton/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path='/cambridge' element={<Cambridge/>}/>
      <Route path='/idiomas' element={<Idiomas/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/school' element={<School/>}/>
      <Route path='/diezanos' element={<Diezanos/>}/>
      <Route path='/cambridgeBlog' element={<CambridgeBlog/>}/>
      <Route path='/aviso' element={<Aviso/>}/>
      <Route path='/cookies' element={<Cookies/>}/>
      <Route path='/privacidad' element={<Privacidad/>}/>
    </Routes>
    <Footer/>
    </ModalPruebaProvider>
    </ModalProvider>
    </ModalTestProvider>
    </>
  );
}

export default App;
