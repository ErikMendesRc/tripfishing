import React from 'react';
import Image from 'next/image';
import { FaInstagram} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03314b] text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo da TripFishing e descrição */}
          <div>
            <Image
              src="/tripfishing_logo.png"
              alt="Logo TripFishing"
              width={150}
              height={50}
              className="mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              A TripFishing oferece as melhores experiências de pesca esportiva, com pacotes personalizados, guias experientes e 
              total compromisso com a sustentabilidade. Sua aventura de pesca começa aqui!
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul>
              <li className="mb-2">
                <a href="#sobre-nos" className="text-gray-300 hover:text-white transition">Sobre Nós</a>
              </li>
              <li className="mb-2">
                <a href="#diferenciais" className="text-gray-300 hover:text-white transition">Diferenciais</a>
              </li>
              <li className="mb-2">
                <a href="#pacotes" className="text-gray-300 hover:text-white transition">Pacotes de Pesca</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/tripfishing_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais e Crédito */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2024 TripFishing. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://www.eebtecnologia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              E&B Tecnologia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;