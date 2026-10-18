'use client';

import React from 'react';
import { COMPANY_INFO, buildWhatsAppLink, buildEmailLink } from '@/data/companyData';
import {
  IconMail,
  IconWhatsAppFilled,
  IconClock,
  IconMapPin,
  IconArrowRight,
  IconPhone
} from './Icons';
import styles from './Contact.module.css';

interface ContactProps {
  onOpenQuoteModal: () => void;
}

export function Contact({ onOpenQuoteModal }: ContactProps) {
  const waUrl = buildWhatsAppLink(
    'Halo CV. Tomario Bumi Lestari, saya ingin berkonsultasi mengenai pemesanan material / jasa konstruksi.'
  );

  const emailUrl = buildEmailLink(
    'Permintaan Informasi & Penawaran - CV. Tomario Bumi Lestari',
    `Yth. Tim CV. Tomario Bumi Lestari,\n\nSaya ingin berkonsultasi mengenai:\n\nNama / Perusahaan:\nKebutuhan:\n\nTerima kasih.`
  );

  return (
    <section id="kontak" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconPhone size={13} />
            <span>Kontak Resmi</span>
          </span>
          <h2 className="section-title">
            Informasi Kantor &amp; Layanan
          </h2>
          <p className="section-description">
            Hubungi kami untuk informasi ketersediaan material agregat, jadwal pengiriman,
            survei lokasi, maupun penawaran harga resmi (SPH).
          </p>
        </div>

        {/* Unified 4-Card Contact Grid */}
        <div className={styles.contactGrid}>
          {/* WhatsApp Card */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
            title="Chat WhatsApp Resmi"
          >
            <div className={styles.contactIconCircle}>
              <IconWhatsAppFilled size={22} color="#15803d" />
            </div>
            <div className={styles.contactCardContent}>
              <span className={styles.contactCardLabel}>WhatsApp Resmi</span>
              <span className={styles.contactCardValue}>{COMPANY_INFO.phoneDisplay}</span>
              <span className={styles.contactCardNote}>
                Layanan pesan instan untuk respon cepat dan konsultasi spesifikasi.
              </span>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={emailUrl}
            className={styles.contactCard}
            title="Kirim Email Resmi"
          >
            <div className={styles.contactIconCircle}>
              <IconMail size={22} color="#15803d" />
            </div>
            <div className={styles.contactCardContent}>
              <span className={styles.contactCardLabel}>Email Resmi</span>
              <span className={styles.contactCardValue}>{COMPANY_INFO.email}</span>
              <span className={styles.contactCardNote}>
                Pengiriman dokumen tender, gambar kerja, RAB, atau Purchase Order.
              </span>
            </div>
          </a>

          {/* Operational Hours */}
          <div className={styles.contactCard}>
            <div className={styles.contactIconCircle}>
              <IconClock size={22} color="#15803d" />
            </div>
            <div className={styles.contactCardContent}>
              <span className={styles.contactCardLabel}>Jam Operasional</span>
              <span className={styles.contactCardValue}>{COMPANY_INFO.operationalHours}</span>
              <span className={styles.contactCardNote}>
                Pelayanan kantor dan pengiriman material beroperasi terjadwal.
              </span>
            </div>
          </div>

          {/* Location */}
          <div className={styles.contactCard}>
            <div className={styles.contactIconCircle}>
              <IconMapPin size={22} color="#15803d" />
            </div>
            <div className={styles.contactCardContent}>
              <span className={styles.contactCardLabel}>Alamat Kantor</span>
              <span className={styles.contactCardValue}>{COMPANY_INFO.address}</span>
              <span className={styles.contactCardNote}>
                Melayani wilayah Tobelo, Kabupaten Halmahera Utara, dan sekitarnya.
              </span>
            </div>
          </div>
        </div>

        {/* Single Centered Action Button */}
        <div className={styles.centerCtaWrapper}>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-shimmer"
            onClick={onOpenQuoteModal}
          >
            <span>Buka Formulir Pemesanan &amp; Penawaran</span>
            <IconArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
