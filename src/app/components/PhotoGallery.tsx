// components/PhotoGallery.tsx

import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/galeria/2.jpg',
    alt: 'Tucunaré Azul',
  },
  {
    id: 2,
    src: '/images/galeria/3.jpg',
    alt: 'Tucunaré Açu',
  },
  {
    id: 3,
    src: '/images/galeria/4.jpg',
    alt: 'Tucunaré Pinima',
  },
  {
    id: 4,
    src: '/images/galeria/5.jpg',
    alt: 'Tucunaré Pinima',
  },
  {
    id: 5,
    src: '/images/galeria/6.jpg',
    alt: 'Amazônia',
  },
  {
    id: 6,
    src: '/images/galeria/7.jpg',
    alt: 'Dourado',
  },
  {
    id: 7,
    src: '/images/galeria/8.jfif',
    alt: 'Tucunaré Azul',
  },
  {
    id: 8,
    src: '/images/galeria/9.jfif',
    alt: 'Tucunaré Açu',
  },
  {
    id: 9,
    src: '/images/galeria/10.jfif',
    alt: 'Tucunaré Pinima',
  },
  {
    id: 10,
    src: '/images/galeria/11.jfif',
    alt: 'Tucunaré Pinima',
  },
  {
    id: 11,
    src: '/images/galeria/12.jfif',
    alt: 'Amazônia',
  },
  {
    id: 12,
    src: '/images/galeria/13.jfif',
    alt: 'Dourado',
  },
  {
    id: 13,
    src: '/images/galeria/14.jfif',
    alt: 'Amazônia',
  },
  {
    id: 14,
    src: '/images/galeria/15.jfif',
    alt: 'Dourado',
  },
  // Adicione mais fotos conforme necessário
];

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="galeria" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          Nossa Galeria de Fotos
        </h2>
        <Marquee speed={30} gradient={false} pauseOnHover>
          <div className="flex">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="min-w-[200px] mr-10 cursor-pointer" // Espaçamento fixo de 40px (mr-10)
                onClick={() => openModal(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={200}
                  height={150}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-4 max-w-3xl w-full mx-4">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;