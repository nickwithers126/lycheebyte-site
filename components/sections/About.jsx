import Image from 'next/image';

export default function About() {
    return (
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
    )
}