export default function Contact() {
    return (
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
    )
}