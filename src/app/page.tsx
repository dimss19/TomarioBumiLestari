'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Services } from '@/components/Services';
import { Calculator } from '@/components/Calculator';
import { Advantages } from '@/components/Advantages';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { OrderModal } from '@/components/OrderModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (initialItem?: string) => {
    setModalItem(initialItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalItem(undefined);
  };

  return (
    <main>
      {/* Sticky Header & Navigation */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* About Company Section */}
      <About />

      {/* Products Catalog: Agregat 10/10, 10/20, 20/30, 30/50, Abu Batu, Pasir */}
      <Products onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Construction Services: Bangunan Gedung & Bangunan Civil */}
      <Services onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Material Calculator */}
      <Calculator />

      {/* Company Advantages & Core Strengths */}
      <Advantages />

      {/* Contact & Direct Communication Section */}
      <Contact onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Order & RFQ Modal */}
      <OrderModal
        isOpen={isModalOpen}
        initialItem={modalItem}
        onClose={handleCloseModal}
      />
    </main>
  );
}
