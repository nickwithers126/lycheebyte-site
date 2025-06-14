export default function Home() {
  return (
    <main className="scroll-smooth">
        <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">Home</h1>
        </section>
        
        <section id="competencies" className="h-screen flex items-center justify-center bg-gray-200">
            <h2 className="text-4xl font-bold">Competencies</h2>
        </section>

        <section id="services"className="h-screen flex items-center justify-center bg-gray-100">
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