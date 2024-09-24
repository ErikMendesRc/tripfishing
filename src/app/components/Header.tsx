// src/components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white fixed w-full z-50 shadow-header">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logotipo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:text-secondary transition-colors duration-200">
            <Image
              src="/tripfishing_logo.png"
              alt="TripFishing Logo"
              width={150} // Ajuste conforme necessário
              height={50} // Ajuste conforme necessário
              className="object-contain"
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link href="#sobre-nos" className="hover:text-secondary transition-colors duration-200">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link href="#pacotes" className="hover:text-secondary transition-colors duration-200">
              Nossos Pacotes
            </Link>
          </li>
          <li>
            <Link href="#galeria" className="hover:text-secondary transition-colors duration-200">
              Galeria
            </Link>
          </li>
          <li>
            <Link href="#contato" className="hover:text-secondary transition-colors duration-200">
              Entrar em Contato
            </Link>
          </li>
        </ul>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Alternar Menu"
            className="focus:outline-none focus:ring-2 focus:ring-secondary rounded"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-primary text-white text-center space-y-4 py-4 transition-all duration-300 ease-in-out">
          <li>
            <Link
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="block hover:bg-secondary hover:text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#servicos"
              onClick={() => setIsOpen(false)}
              className="block hover:bg-secondary hover:text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block hover:bg-secondary hover:text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Contato
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;