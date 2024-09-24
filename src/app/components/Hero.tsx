import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  name: string;
}

const slides: Slide[] = [
  { image: '/images/amazonia.jpg', name: 'Amazônia' },
  { image: '/images/litoral.png', name: 'Litoral' },
  { image: '/images/rio-iguacu.jpg', name: 'Rio Iguaçu' },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // Função para alternar para o próximo slide
  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 500); // Temporizador da transição
  };

  // Função para alternar para o slide anterior
  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 500); // Temporizador da transição
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Troca o slide a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Imagem de Fundo */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].name}
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Nome do Destino no Canto Inferior Esquerdo */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full text-left px-8 pb-8">
        <p className="text-lg md:text-2xl text-white font-bold bg-opacity-60 bg-gray-900 px-4 py-2 rounded-lg shadow-lg">
          {slides[currentSlide].name}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 mt-4">
          A Aventura de Pesca dos Seus Sonhos Começa Aqui
        </h1>
        <p className="text-md md:text-xl text-white mb-4">
          Explore os melhores destinos de pesca esportiva com a Tripfishing
        </p>
        <a
          href={`https://wa.me/5547988436733?text=${encodeURIComponent('Olá, vi seus pacotes no TripFishing e gostaria de saber mais sobre eles!')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 transition"
        >
          Entre em Contato
        </a>
      </div>

      {/* Indicadores do Carrossel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      {/* Botões de Navegação do Carrossel */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={prevSlide}
        aria-label="Slide Anterior"
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={nextSlide}
        aria-label="Próximo Slide"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Hero;