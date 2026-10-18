'use client';

import React from 'react';
import { SERVICES_DATA } from '@/data/companyData';
import {
  IconBuilding,
  IconCivil,
  IconCheck,
  IconArrowRight,
  IconShieldCheck
} from './Icons';
import styles from './Services.module.css';

interface ServicesProps {
  onOpenQuoteModal: (initialItem?: string) => void;
}

export function Services({ onOpenQuoteModal }: ServicesProps) {

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

                  {/* Streamlined Actions */}
                  <div className={styles.serviceActions}>
                    <button
                      type="button"
                      className="btn btn-primary btn-shimmer"
                      onClick={() => onOpenQuoteModal(service.title)}
                    >
                      <span>Minta Penawaran &amp; RAB</span>
                      <IconArrowRight size={15} />
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
