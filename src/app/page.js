import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold">LycheeByte (Labs)</h1>
            </section>

            <section id="competencies" className="min-h-screen bg-gray-200 px-4 flex flex-col">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mt-35">
                    Core Competencies
                </h2>

                {/* Venn Diagram */}
                <div className="flex-grow flex items-center justify-center mb-10">
                    <div className="relative w-[98%] max-w-3xl aspect-square">
                        {/* Top Circle*/}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[62%] aspect-square bg-[#64C084]/30 rounded-full mix-blend-multiply flex items-center justify-center text-center">
                            <span className="text-sm sm:text-xl md:text-2xl font-semibold text-black -translate-y-[50%] relative">
                                Process<br />Development
                            </span>
                        </div>

                        {/* Bottom Left Circle */}
                        <div className="absolute bottom-0 left-0 w-[62%] aspect-square bg-[#64C084]/40 rounded-full mix-blend-multiply flex items-center justify-center text-center">
                            <span className="text-sm sm:text-xl md:text-2xl font-semibold text-black -translate-x-[50%] relative">
                                Product<br />Development
                            </span>
                        </div>

                        {/* Bottom Right Circle */}
                        <div className="absolute bottom-0 right-0 w-[62%] aspect-square bg-[#64C084]/50 rounded-full mix-blend-multiply flex items-center justify-center text-center">
                            <span className="text-sm sm:text-xl md:text-2xl font-semibold text-black translate-x-[50%] relative">
                                Business<br />Development
                            </span>
                        </div>

                        {/* Center Logo */}
                        <div className="absolute left-[50%] top-[54%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <Image src="/logo_white.png" alt="LycheeByte Logo" width={500} height={500} className="w-[18%] h-auto" />
                        </div>
                    </div>
                </div>

            </section>

            <section id="services" className="h-screen flex items-center justify-center bg-gray-100">
                <h2 className="text-4xl font-bold">Services</h2>
            </section>

            <section id="strategies" className="h-screen flex items-center justify-center bg-gray-200">
                <h2 className="text-4xl font-bold">Strategies</h2>
            </section>

            <section id="projects" className="h-screen flex items-center justify-center bg-gray-100">
                <h2 className="text-4xl font-bold">Projects</h2>
            </section>

            <section id="about" className="h-screen flex items-center justify-center bg-gray-200">
                <h2 className="text-4xl font-bold">About</h2>
            </section>

            <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
                <h2 className="text-4xl font-bold">Contact</h2>
            </section>
        </main>
    )
}