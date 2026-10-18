'use client';

import React from 'react';
import { COMPANY_INFO, buildWhatsAppLink, buildEmailLink } from '@/data/companyData';
import {
  IconWhatsAppFilled,
  IconMail,
  IconCheck,
  IconArrowRight
} from './Icons';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenQuoteModal: (initialItem?: string) => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  const whatsappUrl = buildWhatsAppLink(
    'Halo CV. Tomario Bumi Lestari, saya tertarik memesan material agregat / jasa konstruksi.'
  );

  const emailUrl = buildEmailLink(
    'Permintaan Penawaran Material & Jasa Konstruksi - CV. Tomario Bumi Lestari',
    `Yth. Tim Penjualan CV. Tomario Bumi Lestari,\n\nSaya ingin meminta informasi ketersediaan stok dan penawaran harga resmi (SPH) untuk kebutuhan proyek kami.\n\nProduk / Jasa:\nEstimasi Volume / Kebutuhan:\nLokasi Proyek:\n\nTerima kasih.`
  );

  return (
    <section id="beranda" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Text & Value Proposition */}
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              <span>CV. TOMARIO BUMI LESTARI</span>
            </div>

            <h1 className={styles.heroTitle}>
              Produsen Agregat Berkualitas &amp;{' '}
              <span className={styles.heroTitleHighlight}>Kontraktor Konstruksi</span>{' '}
              Handal
            </h1>

            <p className={styles.heroSubtitle}>
              Penyedia terpercaya batu split berbagai fraksi (10/10, 10/20, 20/30, 30/50),
              abu batu screening, pasir cor alam, serta pelaksana konstruksi bangunan gedung
              dan infrastruktur teknik sipil berstandar SNI.
            </p>

            <div className={styles.heroActions}>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-shimmer"
                onClick={() => onOpenQuoteModal()}
              >
                <span>Minta Penawaran / Pemesanan</span>
                <IconArrowRight size={16} />
              </button>
            </div>

            <div className={styles.trustPoints}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <IconCheck size={16} />
                </span>
                <span>Standar Mutu SNI</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <IconCheck size={16} />
                </span>
                <span>Armada Dump Truck Mandiri</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <IconCheck size={16} />
                </span>
                <span>Timbangan Digital Resmi</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className={styles.heroMedia}>
            <div className={styles.mediaCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero_quarry.jpg"
                alt="Operasional Quarry dan Stone Crushing Plant CV. Tomario Bumi Lestari"
                className={styles.mediaImage}
              />
              <div className={styles.mediaOverlay}>
                <div>
                  <div className={styles.mediaOverlayTitle}>
                    Stone Crushing Plant &amp; Quarry
                  </div>
                  <div className={styles.mediaOverlaySubtitle}>
                    Kapasitas suplai ratusan ton per hari
                  </div>
                </div>
                <div className={styles.mediaOverlayBadge}>
                  Siap Kirim
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className={styles.metricsBar}>
          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>4 Fraksi</span>
            <span className={styles.metricLabel}>Batu Split 10/10, 10/20, 20/30, 30/50</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>100% Bersih</span>
            <span className={styles.metricLabel}>Bebas Lumpur &amp; Tanah Berlebih</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>2 Divisi</span>
            <span className={styles.metricLabel}>Material Tambang &amp; Jasa Konstruksi</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>Respons Cepat</span>
            <span className={styles.metricLabel}>Hotline WhatsApp &amp; Email Aktif</span>
          </div>
        </div>
      </div>
    </section>
  );
}
