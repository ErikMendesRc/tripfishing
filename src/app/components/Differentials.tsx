// src/components/Differentials.tsx
'use client';

import React from 'react';
import { AdjustmentsHorizontalIcon, Cog6ToothIcon, SparklesIcon } from '@heroicons/react/24/solid';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Nossos Diferenciais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experiência Personalizada */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1">
            <AdjustmentsHorizontalIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Experiência Personalizada</h3>
            <p className="text-gray-600 text-lg">
              Adaptamos cada viagem de pesca ao perfil de cada cliente, garantindo uma experiência única e feita sob medida para suas expectativas e habilidades.
            </p>
          </div>
          
          {/* Equipamentos de Alta Qualidade */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1">
            <Cog6ToothIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Equipamentos de Alta Qualidade</h3>
            <p className="text-gray-600 text-lg">
              Utilizamos apenas materiais e equipamentos de ponta, proporcionando maior segurança, conforto e sucesso nas suas aventuras de pesca.
            </p>
          </div>

          {/* Sustentabilidade */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1">
            <SparklesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Sustentabilidade</h3>
            <p className="text-gray-600 text-lg">
              Praticamos uma pesca responsável, respeitando o meio ambiente e promovendo práticas que preservam os ecossistemas onde atuamos, garantindo a sustentabilidade para as gerações futuras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;