import SectionTitle from "./Section";
import ContactForm from "./ContactForm"


const Contact = () => {
    return (
        <div className="p-6">
            <SectionTitle title="Contacto" />
            <p>Escribinos para responder todas tus dudas, coordinar una visita o reunión.</p>
            <ContactForm />
            <div className="grid grid-cols-2 pl-6 mt-6">
            {/* Contenedor de los enlaces */}
            <div className="flex flex-col space-y-4">
                <a href="mailto:inmobiliaria.ariel@gmail.com" className="flex items-center space-x-1" aria-label="Enviar correo a inmobiliaria.ariel@gmail.com">
                    <i className="bx bx-envelope text-xl" />
                    <span className="text-sm">inmobiliaria.ariel@gmail.com</span>
                </a>
                <a href="https://wa.me/598092964972" className="flex items-center space-x-1" aria-label="Contactar vía WhatsApp">
                    <i className="bx bxl-whatsapp text-xl" />
                    <span className="text-sm">092 964 972</span>
                </a>
                <a href="https://www.instagram.com/arielfernandez.uy" className="flex items-center space-x-1" aria-label="Visitar Instagram de @arielfernandez.uy">
                    <i className="bx bxl-instagram text-xl" />
                    <span className="text-sm">@arielfernandez.uy</span>
                </a>
            </div>

            {/* Contenedor de la imagen */}
            <div className="flex justify-center items-center">
                <img src="/src/assets/logo_af.png" alt="Logo de la inmobiliaria" className="h-16" />
            </div>
            </div>
        </div>
    );
};

export default Contact;
