'use client';

import React from 'react';
import { COMPANY_INFO, buildWhatsAppLink } from '@/data/companyData';
import { IconWhatsAppFilled } from './Icons';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  const waUrl = buildWhatsAppLink(
    'Halo CV. Tomario Bumi Lestari, saya ingin bertanya seputar pemesanan agregat / konsultasi konstruksi.'
  );

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingWrapper}
      aria-label={`Hubungi kami via WhatsApp ${COMPANY_INFO.phoneDisplay}`}
      title={`WhatsApp: ${COMPANY_INFO.phoneDisplay}`}
    >
      <div className={styles.floatingButton}>
        <IconWhatsAppFilled size={30} />
      </div>
    </a>
  );
}
