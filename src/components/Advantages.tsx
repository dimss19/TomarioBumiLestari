import React from 'react';
import { ADVANTAGES_DATA } from '@/data/companyData';
import {
  IconShieldCheck,
  IconBuilding,
  IconTruck,
  IconScale,
  IconGravel,
  IconPhone
} from './Icons';
import styles from './Advantages.module.css';

export function Advantages() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'quality':
        return <IconShieldCheck size={24} />;
      case 'contractor':
        return <IconBuilding size={24} />;
      case 'truck':
        return <IconTruck size={24} />;
      case 'scale':
        return <IconScale size={24} />;
      case 'price':
        return <IconGravel size={24} />;
      case 'support':
        return <IconPhone size={24} />;
      default:
        return <IconShieldCheck size={24} />;
    }
  };

  return (
    <section id="keunggulan" className="section section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconShieldCheck size={14} />
            <span>Nilai Unggul Kami</span>
          </span>
          <h2 className="section-title">
            Mengapa Memilih CV. Tomario Bumi Lestari
          </h2>
          <p className="section-description">
            Integritas pasokan material dan profesionalisme konstruksi yang teruji
            menjadikan kami mitra andalan bagi pengembang swasta maupun instansi pemerintah.
          </p>
        </div>

        <div className={styles.advantagesGrid}>
          {ADVANTAGES_DATA.map((adv, index) => (
            <div key={index} className={styles.advantageCard}>
              <div className={styles.advantageIconWrapper}>
                {getIcon(adv.icon)}
              </div>
              <h3 className={styles.advantageTitle}>{adv.title}</h3>
              <p className={styles.advantageDescription}>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
