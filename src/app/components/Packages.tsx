// src/components/Packages.tsx
'use client';

import React from 'react';
import PackageCard from './PackageCard';

interface Package {
  id: number;
  destination: string;
  image: string;
  description: string;
  duration: string;
  price: string;
}

const packagesData: Package[] = [
  {
    id: 1,
    destination: 'Amazônia',
    image: '/images/amazonia.jpg',
    description: 'Experimente a pesca esportiva nas águas ricas da Amazônia, com vistas deslumbrantes e um custo beneficio ótimo.',
    duration: 'Verificar datas disponíveis',
    price: 'A Definir',
  },
  {
    id: 2,
    destination: 'Litoral Catarinense',
    image: '/images/litoral.png',
    description: 'Experimente a pescaria costeira e oceânica no belo Litoral Catarinense, aproveitando as águas ricas em diversas espécies marinhas.',
    duration: 'Verificar datas disponíveis',
    price: 'A Definir',
  },
  {
    id: 3,
    destination: 'Rio Iguaçu',
    image: '/images/rio-iguacu.jpg',
    description: 'Descubra as águas desafiadoras do Rio Iguaçu em busca dos poderosos Dourados, combinando pesca esportiva com paisagens deslumbrantes.',
    duration: 'Verificar datas disponíveis',
    price: 'A Definir',
  },
  // Adicione mais pacotes conforme necessário
];

const Packages: React.FC = () => {
  return (
    <section id="pacotes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-5xl font-extrabold text-center text-primary mb-12">
          Pacotes de Destinos
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {packagesData.map((pkg) => (
            <PackageCard
              key={pkg.id}
              destination={pkg.destination}
              image={pkg.image}
              description={pkg.description}
              duration={pkg.duration}
              price={pkg.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;