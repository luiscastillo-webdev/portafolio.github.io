import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Portafolio from "./components/Portafolio.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Contacto from "./components/Contacto.jsx";
import NoEncontrado from "./components/NoEncontrado.jsx";
 

 

function App() {  

  return (
     
    <BrowserRouter>      
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/portafolio" element={<Portafolio/>}/>
        <Route exact path="/about" element={<About/>}/>            
        <Route exact path="/contacto" element={<Contacto/>}/> 
        <Route exact path="*" element={<NoEncontrado/>}/>      
      </Routes>     
      <Footer/>    
    </BrowserRouter>    
         
     
  )
}

export default App
