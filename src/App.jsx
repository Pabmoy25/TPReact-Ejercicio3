
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Saludos from "./components/Saludos";
import Footer from "./components/Footer";

function App() {
 

  return (
    <>
      <section className="container mt-5 mainpage text-center">
    <Saludos enviarProps="My friend!"></Saludos>
    
    
    </section>
    <Footer></Footer>
    </>
  )
}

export default App
