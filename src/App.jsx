
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Saludos from "./components/Saludos";

function App() {
 

  return (
    <>
      <section className="container mt-5 mainpage text-center">
    <Saludos enviarProps="My friend!"></Saludos>
    
    
    </section>
    </>
  )
}

export default App
