import { Element } from 'react-scroll';
import "./app.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Details from "./components/Details"
import Characteristics from "./components/Characteristics"
import PaymentMethod from "./components/PaymentMethod"
import Ubication from "./components/Ubication"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      
      <Element name="inicio"><Hero /></Element>
      <Element name="detalles"><Details /></Element>
      <Element name="caracteristicas"><Characteristics /></Element>
      <Element name="formas-de-pago"><PaymentMethod /></Element>
      <Element name="ubicacion"><Ubication /></Element>
      <Element name="contacto"><Contact className = "leaflet-container" /></Element>
      <Footer />
    </div>
  )
}

export default App