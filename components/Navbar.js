export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2	w-[98%] bg-white shadow z-50 rounded-xl">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
                <div className="text-lg font-bold text-black">
                    <a href="#home">
                        LycheeByte
                    </a>
                </div>

                <ul className="flex gap-6 text-sm font-medium text-black">
                    <li><a href="#home" className="hover:text-[#ca2976]">Home</a></li>
                    <li><a href="#competencies" className="hover:text-[#ca2976]">Competencies</a></li>
                    <li><a href="#services" className="hover:text-[#ca2976]">Services</a></li>
                    <li><a href="#strategies" className="hover:text-[#ca2976]">Strategies</a></li>
                    <li><a href="#projects" className="hover:text-[#ca2976]">Projects</a></li>
                    <li><a href="#about" className="hover:text-[#ca2976]">About</a></li>
                    <li><a href="#contact" className="hover:text-[#ca2976]">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}