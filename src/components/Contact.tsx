'use client';

import React from 'react';
import { COMPANY_INFO, buildWhatsAppLink, buildEmailLink } from '@/data/companyData';
import {
  IconPhone,
  IconMail,
  IconWhatsAppFilled,
  IconClock,
  IconMapPin,
  IconCheck,
  IconArrowRight
} from './Icons';
import styles from './Contact.module.css';

interface ContactProps {
  onOpenQuoteModal: () => void;
}

export function Contact({ onOpenQuoteModal }: ContactProps) {
  const waUrl = buildWhatsAppLink(
    'Halo CV. Tomario Bumi Lestari, saya ingin bertanya mengenai pemesanan material dan jasa konstruksi.'
  );

  const emailUrl = buildEmailLink(
    'Pertanyaan & Penawaran Proyek - CV. Tomario Bumi Lestari',
    `Yth. Manajemen CV. Tomario Bumi Lestari,\n\nSaya ingin menanyakan informasi lebih lanjut mengenai:\n\nNama / Perusahaan:\nKebutuhan:\n\nTerima kasih.`
  );

  return (
    <section id="kontak" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconPhone size={14} />
            <span>Hubungi Kami</span>
          </span>
          <h2 className="section-title">
            Saluran Komunikasi Resmi
          </h2>
          <p className="section-description">
            Siap melayani pertanyaan, permintaan sampel batu agregat, survei lapangan,
            maupun pengajuan penawaran harga resmi (SPH).
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Cards Left */}
          <div className={styles.contactInfoCards}>
            {/* WhatsApp Card */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              title="Kirim Pesan WhatsApp Langsung"
            >
              <div className={styles.contactIconCircle}>
                <IconWhatsAppFilled size={24} color="#15803d" />
              </div>
              <div className={styles.contactCardContent}>
                <span className={styles.contactCardLabel}>WhatsApp Resmi</span>
                <span className={styles.contactCardValue}>{COMPANY_INFO.phoneDisplay}</span>
                <span className={styles.contactCardNote}>
                  Layanan pesan instan untuk konsultasi spesifikasi dan penawaran cepat.
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={emailUrl}
              className={styles.contactCard}
              title="Kirim Surat Penawaran via Email"
            >
              <div className={styles.contactIconCircle}>
                <IconMail size={24} color="#15803d" />
              </div>
              <div className={styles.contactCardContent}>
                <span className={styles.contactCardLabel}>Email Resmi</span>
                <span className={styles.contactCardValue}>{COMPANY_INFO.email}</span>
                <span className={styles.contactCardNote}>
                  Untuk pengiriman dokumen tender, gambar kerja, RAB, atau Purchase Order (PO).
                </span>
              </div>
            </a>

            {/* Operational Hours */}
            <div className={styles.contactCard}>
              <div className={styles.contactIconCircle}>
                <IconClock size={24} color="#15803d" />
              </div>
              <div className={styles.contactCardContent}>
                <span className={styles.contactCardLabel}>Jam Operasional</span>
                <span className={styles.contactCardValue}>{COMPANY_INFO.operationalHours}</span>
                <span className={styles.contactCardNote}>
                  Pemesanan dan pengiriman material beroperasi terjadwal sesuai kontrak kerja.
                </span>
              </div>
            </div>

            {/* Location */}
            <div className={styles.contactCard}>
              <div className={styles.contactIconCircle}>
                <IconMapPin size={24} color="#15803d" />
              </div>
              <div className={styles.contactCardContent}>
                <span className={styles.contactCardLabel}>Alamat Kantor / Operasional</span>
                <span className={styles.contactCardValue}>{COMPANY_INFO.address}</span>
                <span className={styles.contactCardNote}>
                  Melayani pengiriman material dan pelaksanaan konstruksi di Tobelo, Halmahera Utara, dan sekitarnya.
                </span>
              </div>
            </div>
          </div>

          {/* Direct Consultation Box Right */}
          <div className={styles.contactActionBox}>
            <h3 className={styles.actionBoxTitle}>
              Butuh Respon Cepat untuk Proyek Anda?
            </h3>
            <p className={styles.actionBoxDesc}>
              Hubungi langsung customer support kami melalui WhatsApp atau Email. Tim kami
              akan segera memberikan informasi stok material terkini, jadwal muat armada,
              serta estimasi biaya pekerjaan konstruksi secara transparan.
            </p>

            <div className={styles.quickActionButtons}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <IconWhatsAppFilled size={20} />
                <span>Chat via WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
              </a>

              <a
                href={emailUrl}
                className="btn btn-outline-dark btn-lg"
              >
                <IconMail size={20} />
                <span>Kirim Dokumen ke ({COMPANY_INFO.email})</span>
              </a>

              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={onOpenQuoteModal}
              >
                <span>Buka Formulir Pemesanan</span>
                <IconArrowRight size={18} />
              </button>
            </div>

            <div className={styles.guaranteeRow}>
              <div className={styles.guaranteeItem}>
                <IconCheck size={16} color="#15803d" />
                <span>Respon cepat di jam kerja operasional</span>
              </div>
              <div className={styles.guaranteeItem}>
                <IconCheck size={16} color="#15803d" />
                <span>Surat penawaran harga (SPH) resmi bermaterai/stempel</span>
              </div>
              <div className={styles.guaranteeItem}>
                <IconCheck size={16} color="#15803d" />
                <span>Kerahasiaan dokumen teknis proyek Anda terjamin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
