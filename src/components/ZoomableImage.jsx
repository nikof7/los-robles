import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomableImage = ({ src, alt }) => {
    return (
        <div className="flex justify-center">
            <Zoom>
                <img
                    src={src}
                    alt={alt}
                    className="w-full max-w-xs md:max-w-md lg:max-w-lg cursor-pointer"
                />
                <span className="text-sm">Toca la imagen para aumentar tamaño.</span>
            </Zoom>
        </div>
    );
};

export default ZoomableImage;
