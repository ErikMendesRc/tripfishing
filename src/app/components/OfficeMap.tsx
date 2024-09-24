// components/OfficeMap.tsx

import React from 'react';

const OfficeMap: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          Nossa Localização
        </h2>
        <div className="w-full h-96">
          <iframe
            title="Localização do Escritório"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4101182868774!2d-51.60585218458918!3d-27.21256098283125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95277c8bb7e8f7d3%3A0x7b3b4e2a5e5a5d1a!2sRua%207%20de%20Setembro%20276%2C%20Centro%2C%20Porto%20Uni%C3%A3o%20-%20SC%2C%2080000-000!5e0!3m2!1spt-BR!2sbr!4v1695645891234!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OfficeMap;