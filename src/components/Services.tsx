'use client';

import React from 'react';
import { SERVICES_DATA, ServiceItem, COMPANY_INFO, buildWhatsAppLink, buildEmailLink } from '@/data/companyData';
import {
  IconBuilding,
  IconCivil,
  IconCheck,
  IconWhatsAppFilled,
  IconMail,
  IconArrowRight,
  IconShieldCheck
} from './Icons';
import styles from './Services.module.css';

interface ServicesProps {
  onOpenQuoteModal: (initialItem?: string) => void;
}

export function Services({ onOpenQuoteModal }: ServicesProps) {
  const getWaLinkForService = (service: ServiceItem) => {
    const message = `Halo CV. Tomario Bumi Lestari,\n\nSaya ingin berkonsultasi mengenai jasa konstruksi: ${service.title}.\n\nMohon informasi mekanisme kerjasama, pengajuan RAB, dan jadwal pertemuan/survei lokasi proyek.\n\nTerima kasih.`;
    return buildWhatsAppLink(message);
  };

  const getEmailLinkForService = (service: ServiceItem) => {
    const subject = `Konsultasi & Penawaran Proyek: ${service.title} - CV. Tomario Bumi Lestari`;
    const body = `Yth. Manajemen CV. Tomario Bumi Lestari,\n\nKami memiliki rencana proyek pekerjaan:\nLayanan: ${service.title}\nLokasi Proyek:\nPerkiraan Waktu Pelaksanaan:\nRingkasan Lingkup Pekerjaan:\n\nMohon petunjuk untuk pengiriman dokumen teknis / gambar kerja / BOQ untuk estimasi biaya.\n\nTerima kasih.`;
    return buildEmailLink(subject, body);
  };

  return (
    <section id="konstruksi" className="section section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconBuilding size={14} />
            <span>Jasa Konstruksi Umum</span>
          </span>
          <h2 className="section-title">
            Layanan Kontraktor Bangunan Gedung &amp; Civil
          </h2>
          <p className="section-description">
            Didukung sumber daya material mandiri, peralatan berat lengkap, dan manajemen
            teknik berpengalaman untuk merealisasikan infrastruktur berkualitas dan tepat waktu.
          </p>
        </div>

        <div className={styles.servicesStack}>
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;
            const waLink = getWaLinkForService(service);
            const emailLink = getEmailLinkForService(service);

            return (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${isReversed ? styles.serviceCardReverse : ''}`}
              >
                {/* Visual Image */}
                <div
                  className={styles.serviceImageWrapper}
                  style={{ order: isReversed ? 2 : 1 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.serviceOverlayBadge}>
                    <IconShieldCheck size={20} color="#4ade80" />
                    <span>Garansi Mutu &amp; Pengawasan K3 Konstruksi</span>
                  </div>
                </div>

                {/* Content Details */}
                <div
                  className={styles.serviceContent}
                  style={{ order: isReversed ? 1 : 2 }}
                >
                  <div className={styles.serviceCategoryBadge}>
                    {service.category === 'gedung' ? (
                      <IconBuilding size={14} />
                    ) : (
                      <IconCivil size={14} />
                    )}
                    <span>
                      {service.category === 'gedung'
                        ? 'Divisi Konstruksi Gedung'
                        : 'Divisi Teknik Sipil & Infrastruktur'}
                    </span>
                  </div>

                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                  <p className={styles.serviceDescription}>{service.description}</p>

                  <div className={styles.scopeBox}>
                    <span className={styles.scopeTitle}>Cakupan Pekerjaan:</span>
                    <ul className={styles.scopeList}>
                      {service.scope.map((item, idx) => (
                        <li key={idx} className={styles.scopeItem}>
                          <span className={styles.scopeCheck}>
                            <IconCheck size={14} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions to WhatsApp and Email */}
                  <div className={styles.serviceActions}>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      title="Konsultasi via WhatsApp"
                    >
                      <IconWhatsAppFilled size={16} />
                      <span>WhatsApp Kami</span>
                    </a>

                    <a
                      href={emailLink}
                      className="btn btn-outline-dark btn-sm"
                      title="Kirim Dokumen Tender ke Email"
                    >
                      <IconMail size={16} />
                      <span>Kirim Email</span>
                    </a>

                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenQuoteModal(service.title)}
                    >
                      <span>Minta Penawaran / RAB</span>
                      <IconArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
