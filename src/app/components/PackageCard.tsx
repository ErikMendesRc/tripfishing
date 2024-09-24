'use client';

import React from 'react';
import { CalendarIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'; // Importação do componente Image do Next.js

interface PackageCardProps {
  destination: string;
  image: string;
  description: string;
  duration: string;
  price: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ destination, image, description, duration, price }) => {
  const whatsappNumber = '5547988436733';

  // Mensagem personalizada incluindo o destino
  const customMessage = `Olá, estou interessado no pacote ${destination} que vi no site da Trip Fishing`;
  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={image}
        alt={`Destino: ${destination}`}
        width={600} // Defina a largura da imagem
        height={224} // Defina a altura da imagem
        className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-primary mb-2">{destination}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="flex items-center mb-2">
          <CalendarIcon className="h-5 w-5 text-primary mr-2" />
          <span className="text-gray-700">{duration}</span>
        </div>
        <div className="flex items-center mb-4">
          <UserGroupIcon className="h-5 w-5 text-primary mr-2" />
          <span className="text-gray-700">Valores: {price}</span>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white text-lg font-semibold py-2 px-6 rounded-full shadow-md hover:bg-primary-dark transition-colors duration-300"
        >
          Reserve Agora
        </a>
      </div>
    </div>
  );
};

export default PackageCard;