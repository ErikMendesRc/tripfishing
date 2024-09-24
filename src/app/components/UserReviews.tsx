import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image'; // Importando o componente Image do Next.js

interface Review {
  id: number;
  name: string;
  city: string;
  avatar: string;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Kelly Oliveira',
    city: 'São Paulo',
    avatar: '/avatars/female.png',
    comment: 'Super organizado, pescaria incrível!',
  },
  {
    id: 2,
    name: 'João Souza',
    city: 'Minas Gerais',
    avatar: '/avatars/male.png',
    comment: 'Muito bom, superou minhas expectativas!',
  },
  {
    id: 3,
    name: 'Ana Pereira',
    city: 'Rio Grande do Sul',
    avatar: '/avatars/female.png',
    comment: 'A experiência foi incrível! Atendimento impecável.',
  },
  {
    id: 4,
    name: 'Carlos Oliveira',
    city: 'Paraná',
    avatar: '/avatars/male.png',
    comment: 'Serviço de alta qualidade. Estou muito satisfeito.',
  },
  {
    id: 5,
    name: 'Fernando Lima',
    city: 'Santa Catarina',
    avatar: '/avatars/male.png',
    comment: 'Adorei! Atendimento rápido e eficiente.',
  },
  {
    id: 6,
    name: 'Pedro Martins',
    city: 'São Paulo',
    avatar: '/avatars/male.png',
    comment: 'Excelente atendimento e ótimo resultado!',
  },
];

const UserReviews: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          O que nossos clientes dizem
        </h2>
        <Marquee speed={30} gradient={false} pauseOnHover>
          <div className="flex space-x-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-[300px] md:w-[350px] mx-4"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48} // Definindo largura (48px)
                    height={48} // Definindo altura (48px)
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-primary">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.city}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 
                            1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.286 
                            3.97c.3.921-.755 1.688-1.54 
                            1.118l-3.386-2.46a1 1 0 00-1.176 
                            0l-3.386 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 
                            1 0 00-.364-1.118L2.34 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 
                            0 00.95-.69l1.286-3.97z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default UserReviews;