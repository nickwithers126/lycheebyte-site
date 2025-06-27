import Image from 'next/image';

export default function Competencies() {
    return (
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
    )
}