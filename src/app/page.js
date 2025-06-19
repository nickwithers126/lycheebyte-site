import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <section id="home" className="h-screen bg-white flex flex-col justify-center px-10 sm:px-20 md:px-30 relative">

                <div className="text-left leading-tight mb-40">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-black max-w-xl">
                        Innovative<br />
                        and sustainable<br />
                        CMP and<br />
                        cleaning<br />
                        solutions
                    </h1>
                </div>

                <div className="mt-10 absolute bottom-30 right-15 sm:bottom-35 sm:right-35 md:bottom-40 md:right-40 lg:bottom-50 lg:right-50 text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-[#ca2976] leading-relaxed px-4 py-2 inline-block max-w-fit">
                    LycheeByte
                </div>

            </section>

            <section id="competencies" className="scroll-mt-16 bg-gray-200 py-15 px-4 flex flex-col">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center mb-15">
                    Core Competencies
                </h2>

                {/* Venn Diagram */}
                <div className="flex flex-col items-center justify-start">
                    <div className="relative w-[90vw] max-w-[600px] aspect-square">
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

            <section id="contact" className="scroll-mt-22 bg-gray-100 py-15 px-4 flex flex-col">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center mb-15">
                    Contact Us
                </h2>

                <form action="https://api.web3forms.com/submit" method="POST" className="w-1/2 max-w-2xl min-w-[300px] mx-auto space-y-6">

                    {/* Web3Forms Access Key */}
                    <input type="hidden" name="access_key" value="9ca19b9c-b4cd-48aa-ae0f-beb1aaef1e72" />

                    {/* Redirect after success */}
                    <input type="hidden" name="redirect" value="https://lycheebyte-site.vercel.app/?submitted=true" />

                    {/* Optional: Honeypot for spam prevention */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input type="text" id="name" name="name" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64C084]" />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input type="email" id="email" name="email" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64C084]" />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea id="message" name="message" rows="4" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64C084]" />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="block mx-auto bg-[#64C084] text-white px-6 py-2 rounded-md hover:bg-[#4aa368] transition-colors">
                        Submit
                    </button>
                </form>

            </section>
        </main>
    )
}