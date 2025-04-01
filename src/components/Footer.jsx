const Footer = () => {
    return (
        <div className="grid grid-cols-2 h-full p-6 bg-linear-to-b from-white to-[#593c1681]">
            <div className="flex justify-center items-center">
                <img src="/logo.png" alt="Logo" className="w-52" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-row items-center">
                    <i className="bx bxl-creative-commons pr-1 text-xs" />
                    <p className="text-[0.6rem]">Derechos reservados</p>
                </div>
            </div>
        </div>

    );
};
export default Footer;