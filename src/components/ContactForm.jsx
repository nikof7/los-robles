import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", form, "TU_USER_ID")
      .then(() => alert("Mensaje enviado con éxito"))
      .catch(() => alert("Error al enviar el mensaje"));
  };

  return (
    <form action="https://formsubmit.co/wjuice7@gmail.com" method="POST" className="max-w-md mx-auto mt-6 space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
      ></textarea>
      <button type="submit" className="p-3 text-white py-2 rounded-lg bg-[var(--primary-color)]">
        Enviar mensaje
      </button>
    </form>
  );
}
