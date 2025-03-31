import SectionTitle from "./Section";
import ZoomableImage from "./ZoomableImage";

const PaymentMethod = () => {
    return (
        <div className="p-6">
            <SectionTitle title="Formas de pago" />
            <div className="mt-4 flex flex-col gap-1">
                <p>
                    <span className="font-bold">Financiación directa con el dueño:</span> Sin necesidad de trámites bancarios. En Unidades Indexadas y en un periodo de hasta 6 años.
                </p>
                <p>
                <span className="font-bold">Financiación:</span> Entrega inicial + cuotas.
                </p>
                <p><span className="font-bold">Al contado: </span> Pague directamente el valor total.</p>
            </div>
                <p className="pt-6">Consulta los distintos planes en la siguiente tabla <span className="text-sm">(U$S: dólares americanos)</span>.</p>
            <div className="p-6">
                <ZoomableImage src="/table.png" alt="Tabla" />
            </div>
        </div>
    );
};

export default PaymentMethod;
