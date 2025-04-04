export default function ContactForm() {
  return (
    <form action="https://formsubmit.co/94f2b8d618d0e78fd3c75ace353cf0bd " method="POST" className="max-w-md mx-auto mt-6 space-y-4 relative z-50">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md "
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md "
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md "
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        required
        className="w-full p-2 border border-[var(--primary-color)] rounded-md h-24 resize-none "
      ></textarea>
      <button type="submit" className="p-3 text-white py-2 rounded-lg bg-[var(--primary-color)]">
        Enviar mensaje
      </button>
    </form>
  );
}
