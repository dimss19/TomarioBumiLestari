'use client';

import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductItem, COMPANY_INFO, buildWhatsAppLink, buildEmailLink } from '@/data/companyData';
import {
  IconGravel,
  IconCheck,
  IconWhatsAppFilled,
  IconMail,
  IconArrowRight
} from './Icons';
import styles from './Products.module.css';

interface ProductsProps {
  onOpenQuoteModal: (initialItem?: string) => void;
}

export function Products({ onOpenQuoteModal }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const getWaLink = (product: ProductItem) => {
    const text = `Halo CV. Tomario Bumi Lestari,\n\nSaya ingin memesan produk:\n- Material: ${product.name}\n- Ukuran: ${product.fraction}\n\nMohon informasi ketersediaan stok, harga per m3 / ton, dan jadwal pengiriman ke lokasi kami.\n\nTerima kasih.`;
    return buildWhatsAppLink(text);
  };

  const getEmailLink = (product: ProductItem) => {
    const subject = `Permintaan Penawaran - ${product.name} - CV. Tomario Bumi Lestari`;
    const body = `Yth. Tim Penjualan CV. Tomario Bumi Lestari,\n\nSaya tertarik untuk memesan:\nNama Produk: ${product.name}\nUkuran / Fraksi: ${product.fraction}\nEstimasi Kebutuhan (m3 / Ton):\nLokasi Proyek:\n\nMohon dikirimkan surat penawaran harga resmi (SPH).\n\nTerima kasih.`;
    return buildEmailLink(subject, body);
  };

  return (
    <section id="produk" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconGravel size={13} />
            <span>Katalog Material</span>
          </span>
          <h2 className="section-title">
            Produk Agregat Batu Pecah, Abu Batu, &amp; Pasir
          </h2>
          <p className="section-description">
            Diproduksi dari batu andesit/basalt keras melalui mesin pemecah batu modern.
            Gradasi seragam, bersih dari kotoran organik, dan memenuhi spesifikasi teknis SNI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filtersBar}>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeTab === 'all' ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Semua Produk ({PRODUCTS_DATA.length})
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeTab === 'agregat' ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveTab('agregat')}
          >
            Batu Split (10/10, 10/20, 20/30, 30/50)
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeTab === 'abu_batu' ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveTab('abu_batu')}
          >
            Abu Batu
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeTab === 'pasir' ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveTab('pasir')}
          >
            Pasir Konstruksi
          </button>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => {
            const waUrl = getWaLink(product);
            const emailUrl = getEmailLink(product);

            return (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productMediaWrapper}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                    loading="lazy"
                  />
                </div>

                <div className={styles.productCardHeader}>
                  <div className={styles.productHeaderTop}>
                    <span className={styles.sniTag}>Standar SNI 03-2834</span>
                    <span className={styles.stockBadge}>Ready Stock</span>
                  </div>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                </div>

                <div className={styles.productBody}>
                  <p className={styles.productDescription}>{product.description}</p>

                  <div className={styles.specsMatrix}>
                    <div className={styles.specRow}>
                      <span className={styles.specKey}>Densitas</span>
                      <span className={styles.specVal}>{product.density}</span>
                    </div>
                    <div className={styles.specRow}>
                      <span className={styles.specKey}>Kadar Lumpur</span>
                      <span className={styles.specVal}>&lt; 1.0%</span>
                    </div>
                  </div>

                  <div className={styles.appBoxTitle}>Aplikasi Rekomendasi:</div>
                  <ul className={styles.appList}>
                    {product.applications.slice(0, 3).map((app, idx) => (
                      <li key={idx} className={styles.appItem}>
                        <IconCheck size={12} color="#15803d" className={styles.appIcon} />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.productCardFooter}>
                  <button
                    type="button"
                    className={styles.orderBtn}
                    onClick={() => onOpenQuoteModal(product.name)}
                  >
                    <span>Pesan / Minta Penawaran</span>
                    <IconArrowRight size={15} className={styles.orderBtnIcon} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
