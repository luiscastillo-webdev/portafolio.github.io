import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Portafolio from "./components/Portafolio.jsx";
import About from "./components/About.jsx";

 

function App() {  

  return (
     
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/portafolio" element={<Portafolio/>}/>
        <Route exact path="/about" element={<About/>}/>
        
      </Routes>    
    </BrowserRouter>    
         
     
  )
}

export default App
