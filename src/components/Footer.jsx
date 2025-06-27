import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-center py-5 text-sm text-gray-500">
      <a
        href="https://www.linkedin.com/company/lycheebyte-labs/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-[#0077B5] hover:text-[#004182] transition"
      >
        <FaLinkedin size={24}/>
      </a>
      <p className="mt-2">© 2025 LycheeByte</p>
    </footer>
  );
}
