import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 text-[#1f2937] dark:text-white font-sans">
      {/* Logo */}
      <div className="text-center">
        <img src="./assets/logo.png" alt="Logo" className="w-36 mx-auto mb-2 dark:hidden" />
        <img src="./assets/logo_dark.png" alt="Logo" className="w-36 mx-auto mb-2 hidden dark:block" />

        {/* Email */}
        <div className="w-max flex items-center gap-2 mx-auto mb-4">
          <img src="./assets/mail_icon.png" alt="Correo" className="w-5 dark:hidden" />
          <img src="./assets/mail_icon_dark.png" alt="Correo" className="w-5 hidden dark:block" />
          <a href="mailto:edgarromerocuc94@gmail.com" className="hover:underline">
            edgarromerocuc94@gmail.com
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.youtube.com/@edukuk" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-6 h-6 hover:text-[#FF0000] transition-colors" />
          </a>
          <a href="https://www.facebook.com/edukuk" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-[#1877F2] transition-colors" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-black transition-colors" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-[#C13584] transition-colors" />
          </a>
        </div>
      </div>

      {/* Pie de página */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p>
          © {new Date().getFullYear()} <a href="https://edukuk.com" className="hover:underline">Edukuk</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
