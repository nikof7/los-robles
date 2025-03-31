import SectionTitle from "./Section";
import MapView from "./MapView"

const Ubication = () => {
    return (
        <div className="pt-6 pl-6 pr-6">
            <SectionTitle title="Ubicación" />
            <div className="mt-4">
                <p>
                En Las Piedras, por calle <span className="font-bold">Dr. Pouey</span>, casi J. Ortiz.
                </p>
                <p className="mt-3 mb-4">
                Posee buena frecuencia de ómnibus hacia y desde Montevideo y Canelones.
                </p>
            </div>
            <MapView/>
        </div>
    );
};

export default Ubication;
