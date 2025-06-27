import Carousel from '../../components/Carousel';

export default function Projects() {
    return (
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
    )
}