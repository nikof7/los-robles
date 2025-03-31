import SectionTitle from "./Section";

const Details = () => {
    return (
        <div className="pt-6 pl-6 pr-6">
            <SectionTitle title="Detalles" />
            <div className="mt-4">
                <p>
                    Los Robles Fraccionamiento ofrece <span className="font-bold">financiación directa</span> en Unidades Indexadas, con plazos de hasta <span className="font-bold">6 años</span>.
                </p>
                <p className="mt-3">
                    Con 19 terrenos en una ubicación excelente, ideales para construir tu vivienda, comercio o unidades para renta.
                </p>
            </div>
        </div>
    );
};

export default Details;
