import SectionTitle from "./Section";
import ZoomableImage from "./ZoomableImage";


const Characteristics = () => {
    return (
        <div className="p-6">
            <SectionTitle title="Características" />
            <div className="mt-4">
                <ul className="grid grid-cols-2 list-disc list-inside">
                    <li>Hasta 320 metros cuadrados.</li>
                    <li>Hasta 19 metros de frente</li>
                    <li>Cuenta con área verde común</li>
                    <li>Calle propia, sin salida</li>
                </ul>
            </div>
            <div className="p-6">
                <ZoomableImage src="/src/assets/lots.png" alt="Mapa del Fraccionamiento" />
            </div>
        </div>
    );
};

export default Characteristics;
