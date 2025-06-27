import Image from 'next/image';
import { Repeat, Box, Handshake } from 'lucide-react'
import Carousel from '../../components/Carousel';

export default function Home() {
    return (
        <main>
            <section id="home" className="min-h-screen bg-white flex flex-col justify-center px-10 sm:py-20">

                <div className="w-full max-w-7xl mx-auto">
                    <div className="hero-heading text-left leading-tight mb-40">
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

            <section id="competencies" className="scroll-mt-16 bg-[#ca2976] py-15 px-4 flex flex-col">

                {/* Header Area */}
                <div className="w-full max-w-7xl px-4 mx-auto mb-15 text-left">
                    <div className="inline-block bg-black text-white text-xs font-bold tracking-wide px-3 py-1">
                        / / CORE COMPETENCIES / /
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mt-5 max-w-4xl text-white">
                        Driving innovation through the seamless integration of product, process, and business development
                    </h2>
                </div>

                {/* Venn Diagram */}
                <div className="flex flex-col items-center justify-start">
                    <div className="relative w-[90vw] max-w-[600px] aspect-square">

                        {/* Top Circle*/}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[62%] aspect-square bg-black/20 rounded-full ring-2 ring-white flex items-center justify-center text-center" />

                        {/* Top Text */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[20%] text-center">
                            <span className="text-sm sm:text-xl md:text-2xl font-semibold text-white">
                                Process<br />Development
                            </span>
                        </div>

                        {/* Bottom Left Circle */}
                        <div className="absolute bottom-0 left-0 w-[62%] aspect-square bg-black/20 rounded-full ring-2 ring-white flex items-center justify-center text-center" />

                        {/* Bottom Left Text */}
                        <div className="absolute bottom-[25%] left-[20%] text-center -translate-x-1/2">
                            <span className="text-sm sm:text-xl md:text-2xl font-semibold text-white">
                                Product<br />Development
                            </span>
                        </div>

                        {/* Bottom Right Circle */}
                        <div className="absolute bottom-0 right-0 w-[62%] aspect-square bg-black/20 rounded-full ring-2 ring-white flex items-center justify-center text-center" />

                        {/* Bottom Right Text */}
                        <div className="absolute bottom-[25%] right-[20%] text-center translate-x-1/2">
                            <span className="text-sm sm:text-xl md:text-2xl font-semibold text-white">
                                Business<br />Development
                            </span>
                        </div>

                        {/* Center Logo */}
                        <div className="absolute left-[50%] top-[54%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <Image src="/logo_white.png" alt="LycheeByte Logo" width={500} height={500} className="w-[18%] h-auto" />
                        </div>

                        {/* Intersection: Process + Product (Left Overlap) */}
                        <div className="absolute left-[33%] top-[46%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="text-white text-xl font-bold">1</span>
                        </div>

                        {/* Intersection: Process + Business (Right Overlap) */}
                        <div className="absolute left-[67%] top-[46%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="text-white text-xl font-bold">2</span>
                        </div>

                        {/* Intersection: All Three (Center Overlap) */}
                        <div className="absolute left-1/2 top-[74%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="text-white text-xl font-bold">3</span>
                        </div>
                    </div>
                </div>

                {/* Intersection Info Cards */}
                <div className="mt-12 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Product + Process */}
                    <div className="bg-white text-black shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            1. Process <span className="text-xl font-bold">∩</span> Product
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Capital equipment selection</li>
                            <li>Quality management system development</li>
                            <li>Lean manufacturing</li>
                        </ul>
                    </div>

                    {/* Process + Business */}
                    <div className="bg-white text-black shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            2. Process <span className="text-xl font-bold">∩</span> Business
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Supply chain management</li>
                            <li>Contract-toll manufacturing setup</li>
                            <li>Business continuity planning</li>
                        </ul>
                    </div>

                    {/* Product + Business */}
                    <div className="bg-white text-black shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            3. Product <span className="text-xl font-bold">∩</span> Business
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Value proposition development</li>
                            <li>Go-to-market strategy</li>
                            <li>Pathfinding</li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="strategies" className="scroll-mt-16 py-15 px-4 bg-gray-200">

                {/* Header Area */}
                <div className="max-w-7xl mx-auto mb-15">
                    <div className="inline-block bg-[#ca2976] text-white text-xs font-bold tracking-wide px-3 py-1">
                        / / DEVELOPMENT STRATEGIES / /
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mt-5 max-w-4xl">
                        Strategic frameworks that scale ideas into impact — from design to delivery
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

                    {/* Process Card */}
                    <div className="bg-white text-black border-t-4 border-[#ca2976] p-6 shadow-sm">
                        <div className="mb-4 flex justify-center">
                            <Repeat className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-semibold mb-3">Process</h3>
                        <ul className="list-disc pl-5 text-sm md:text-base space-y-1">
                            <li>Structured and systematic</li>
                            <li>Designed for manufacturability (DFM)</li>
                            <li>Biased for automation and technology adaptation</li>
                        </ul>
                    </div>

                    {/* Product Card */}
                    <div className="bg-white text-black border-t-4 border-[#ca2976] p-6 shadow-sm">
                        <div className="mb-4 flex justify-center">
                            <Box className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-semibold mb-3">Product</h3>
                        <ul className="list-disc pl-5 text-sm md:text-base space-y-1">
                            <li>Customer-driven innovation</li>
                            <li>Iterative development and rapid prototyping</li>
                            <li>Prioritization of reliability, sustainability, and IP protection</li>
                        </ul>
                    </div>

                    {/* Business Card */}
                    <div className="bg-white text-black border-t-4 border-[#ca2976] p-6 shadow-sm">
                        <div className="mb-4 flex justify-center">
                            <Handshake className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-semibold mb-3">Business</h3>
                        <ul className="list-disc pl-5 text-sm md:text-base space-y-1">
                            <li>Open collaboration and strategic partnerships</li>
                            <li>Brand building and technical marketing</li>
                            <li>Global mindset for international adoption and expansion</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section id="projects" className="scroll-mt-16 py-15 px-4 bg-black">

                {/* Header Area */}
                <div className="max-w-7xl mx-auto mb-15">
                    <div className="inline-block bg-[#64C084] text-black text-xs font-bold tracking-wide px-3 py-1">
                        / / PROJECTS / /
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mt-5 max-w-4xl text-white">
                        A snapshot of our impact across the CMP and cleaning ecosystem
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto">
                    <Carousel />
                </div>

            </section>

            <section id="about" className="scroll-mt-16 py-15 px-4 bg-[#64C084]">

                <div className="max-w-7xl mx-auto">
                    {/* Section Tag */}
                    <div className="inline-block bg-[#ca2976] text-white text-xs font-bold tracking-wide px-3 py-1 mb-15">
                        / / ABOUT US / /
                    </div>

                    {/* Content */}
                    <div className="bg-white text-black p-8 text-md md:text-lg border-l-4 border-[#ca2976] shadow-md leading-relaxed md:leading-loose">
                        <p>
                            We are a semiconductor consulting firm with deep roots in materials science, process engineering, and technology development. 
                            With over 30 years of experience across capital equipment OEMs, device manufacturers, and consumable suppliers, we understand how all elements of the ecosystem interact—and why that matters. 
                            Our team brings a unique blend of technical depth and business insight, supporting clients with innovation strategy, process optimization, and product development across global markets. 
                            Whether you&#39;re scaling a new technology or refining an existing one, we help bridge the gaps between engineering, manufacturing, and market success.
                        </p>
                        <Image src="/logo_black.png" alt="LycheeByte Logo" width={100} height={100} className="w-[50px] h-auto mt-4 ml-auto pr-2" />
                    </div>
                </div>

            </section>

            <section id="contact" className="scroll-mt-16 bg-white py-15 px-4 flex flex-col">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center mb-15">
                    Contact Us
                </h2>

                <form action="https://api.web3forms.com/submit" method="POST" className="w-1/2 max-w-2xl min-w-[300px] mx-auto space-y-6">

                    {/* Web3Forms Access Key */}
                    <input type="hidden" name="access_key" value="af71db1c-ffba-4604-8267-14a1cd275801" />

                    {/* Redirect after success */}
                    <input type="hidden" name="redirect" value="https://lycheebyte-site.vercel.app/?submitted=true" />

                    {/* Optional: Honeypot for spam prevention */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            Name
                        </label>
                        <input type="text" id="name" name="name" required className="mt-1 w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64C084]" />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email
                        </label>
                        <input type="email" id="email" name="email" required className="mt-1 w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64C084]" />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black">
                            Message
                        </label>
                        <textarea id="message" name="message" required className="mt-1 w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64C084] h-40 sm:h-48 md:h-56" />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="block mx-auto bg-[#64C084] text-[white] px-6 py-2 hover:bg-[#4aa368] transition-colors">
                        Submit
                    </button>
                </form>

            </section>
            
        </main>
    )
}