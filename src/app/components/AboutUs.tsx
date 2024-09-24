import React from 'react';
import { FaFish, FaLeaf, FaUsers } from 'react-icons/fa';
import Image from 'next/image'; // Importação do componente Image do Next.js

const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-5xl font-extrabold text-center text-primary mb-12">
          Sobre a TripFishing
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem Representativa */}
          <div className="flex justify-center">
            <Image
              src="/images/logo.png" // O caminho precisa começar com '/'
              alt="Aventuras de pesca com a TripFishing"
              width={400} // Substitua com o valor correto
              height={400} // Substitua com o valor correto
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Conteúdo */}
          <div>
            {/* Nossa História */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaFish className="text-blue-500 text-3xl mr-3" />
                <h3 className="text-3xl font-semibold text-gray-800 text-primary">Nossa História</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A TripFishing nasceu da paixão por conectar pescadores com os melhores destinos de pesca esportiva do Brasil. 
                Fundada com o objetivo de proporcionar experiências únicas em meio à natureza, nossa jornada começou com pequenos
                grupos de pescadores que, como nós, buscavam momentos inesquecíveis em águas ricas e desafiadoras. Com o tempo,
                expandimos nossos pacotes, sempre focados em oferecer aventuras personalizadas e de alta qualidade.
              </p>
            </div>

            {/* Missão e Valores */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-green-500 text-3xl mr-3" />
                <h3 className="text-3xl font-semibold text-gray-800 text-primary">Missão e Valores</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa missão é oferecer experiências de pesca esportiva que vão além das expectativas. Valorizamos a sustentabilidade,
                o respeito pela natureza e o compromisso com a preservação dos ecossistemas em que operamos. Acreditamos que a pesca
                esportiva deve ser uma atividade responsável, onde o impacto ambiental seja minimizado e a fauna local preservada.
                Cada um de nossos pacotes é cuidadosamente planejado para oferecer aventura, segurança e respeito ao meio ambiente.
              </p>
            </div>

            {/* Nossa Equipe */}
            <div>
              <div className="flex items-center mb-4">
                <FaUsers className="text-yellow-500 text-3xl mr-3" />
                <h3 className="text-3xl font-semibold text-gray-800 text-primary">Nossa Equipe</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa equipe é formada por guias locais experientes, apaixonados pela pesca esportiva e conhecedores profundos dos 
                melhores pontos de pesca. Com anos de experiência, nossos guias não apenas levam você até os locais mais promissores, 
                mas também garantem que sua aventura seja segura, educativa e divertida. Seja você um pescador iniciante ou veterano,
                nossa equipe está pronta para oferecer o suporte necessário e garantir uma experiência inesquecível.
              </p>
            </div>
          </div>
        </div>

        {/* Chamada para Ação */}
        <div className="mt-16 text-center">
          <a
            href="#pacotes"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Explore Nossos Pacotes
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;