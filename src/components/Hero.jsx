function Hero() {
    return (
        <div>
            <div className="min-h-[calc(100vh-96px)] bg-[url('/hero.png')] bg-cover bg-center flex flex-col justify-around items-center">
                <div className="grid grid-cols-3">
                    <div className="flex justify-center text-white font-bold col-span-1 relative">
                        <span className="absolute left-1/2 -translate-x-1/2 top-[-15px] text-7xl opacity-25 z-0">
                            19
                        </span>
                        <span className="text-8xl relative z-10">13</span>
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-white text-4xl font-bold font-title">TERRENOS DISPONIBLES</h1>
                        <h2 className="text-white text-sm "> ¡Con opciones <span className="italic">flexibles</span> de financiación!</h2>
                        <button className="bg-amber-400 hover:bg-amber-600 text-white font-bold pt-1 pb-1 px-4 rounded mt-3"> CONSULTE AHORA </button>
                        <p className="text-white flex items-center text-lg mt-3">
                            <i className="bx bxl-whatsapp pr-1"></i>
                            092 964 972
                        </p>
                    </div>
                </div>

                <i className='bx bxs-chevrons-down text-white text-4xl opacity-55 motion-safe:animate-bounce'></i>
            </div>

        </div>
    );
}

export default Hero;
