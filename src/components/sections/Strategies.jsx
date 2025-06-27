import { Repeat, Box, Handshake } from 'lucide-react'

export default function Strategies() {
    return (
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
    )
}