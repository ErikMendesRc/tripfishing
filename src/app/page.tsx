// src/pages/Home.tsx
'use client';

import React from 'react';
import Header from "./components/Header"; // Importa o Header
import Hero from "./components/Hero"; // Importa o Hero
import AboutUs from "./components/AboutUs"; // Importa a Seção Sobre Nós
import Packages from "./components/Packages"; // Importa a Seção Pacotes
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import UserReviews from './components/UserReviews';
import OfficeMap from './components/OfficeMap';
import PhotoGallery from './components/PhotoGallery';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header fixo no topo */}
      <Header />

      {/* Corpo da página com a Seção Hero, Sobre Nós e Pacotes */}
      <main className="flex-grow">
        <Hero />
        <AboutUs /> {/* Seção Sobre Nós */}
        <Packages /> {/* Seção Pacotes de Destinos */}
        <Differentials/>
        <UserReviews/>
        <PhotoGallery/>
        <OfficeMap/>
      </main>

      <Footer/>
    </div>
  );
}
