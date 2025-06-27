export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-white flex flex-col justify-center px-10 sm:py-20">
            <div className="w-full max-w-7xl mx-auto">
                <div className="hero-heading relative md:top-30 text-left leading-tight mb-40">
                    <h1 className="hero-heading text-4xl sm:text-6xl md:text-7xl font-semibold text-black max-w-xl">
                        Innovative<br />
                        and sustainable<br />
                        CMP and<br />
                        cleaning<br />
                        solutions
                    </h1>
                </div>

                <div className="flex justify-end">
                    <div className="hero-company mt-10 text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-[#ca2976] leading-relaxed px-4 py-2 inline-block max-w-fit">
                        LycheeByte
                    </div>
                </div>
            </div>
        </section>
    )
}