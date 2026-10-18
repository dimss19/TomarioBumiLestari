import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { IconCheck, IconShieldCheck, IconGravel, IconBuilding, IconTruck } from './Icons';
import styles from './About.module.css';

export function About() {
  return (
    <section id="tentang" className="section section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconShieldCheck size={14} />
            <span>Tentang Perusahaan</span>
          </span>
          <h2 className="section-title">
            Profil CV. Tomario Bumi Lestari
          </h2>
          <p className="section-description">
            Komitmen kami adalah menghadirkan pasokan material agregat berkualitas
            tertinggi serta solusi rancang-bangun konstruksi gedung & infrastruktur
            sipil yang kokoh, tepat waktu, dan berorientasi pada keberlanjutan.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Left Description & Values */}
          <div className={styles.aboutContent}>
            <p className={styles.aboutLead}>
              <strong>{COMPANY_INFO.name}</strong> bergerak di bidang industri pengolahan
              material batu andesit/basalt (stone crusher) dan kontraktor pelaksana
              konstruksi umum.
            </p>
            <p className={styles.aboutText}>
              Dengan pengalaman operasional yang matang, kami memasok berbagai fraksi
              batu split (10/10, 10/20, 20/30, 30/50), abu batu super halus, dan pasir cor
              alam berkualitas untuk berbagai proyek strategis: pembangunan jalan tol,
              jembatan, bandara, kawasan perumahan, hingga gedung komersial bertingkat.
            </p>
            <p className={styles.aboutText}>
              Di samping itu, divisi jasa konstruksi kami siap mengeksekusi proyek bangunan
              gedung komersial maupun pekerjaan teknik sipil dengan dukungan armada alat
              berat mandiri serta tenaga ahli teknik berlisensi.
            </p>

            <div className={styles.valuesList}>
              <div className={styles.valueCard}>
                <div className={styles.valueTitle}>
                  <IconCheck size={18} color="#15803d" />
                  <span>Kualitas Mutu SNI</span>
                </div>
                <p className={styles.valueDesc}>
                  Batu andesit keras dengan tingkat abrasi rendah dan kadar lumpur minimal,
                  memenuhi spesifikasi teknis Dinas PUPR.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueTitle}>
                  <IconCheck size={18} color="#15803d" />
                  <span>Transparansi Timbangan</span>
                </div>
                <p className={styles.valueDesc}>
                  Setiap pengiriman ditimbang menggunakan jembatan timbang digital bersertifikat
                  legalitas tera resmi.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueTitle}>
                  <IconCheck size={18} color="#15803d" />
                  <span>Tepat Waktu & Amanah</span>
                </div>
                <p className={styles.valueDesc}>
                  Didukung armada logistik dump truck terpadu sehingga jadwal pengecoran dan
                  konstruksi tidak tertunda.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueTitle}>
                  <IconCheck size={18} color="#15803d" />
                  <span>Berwawasan Lingkungan</span>
                </div>
                <p className={styles.valueDesc}>
                  Mengedepankan prinsip &apos;Bumi Lestari&apos; dengan tata kelola pertambangan ramah
                  lingkungan dan reklamasi terencana.
                </p>
              </div>
            </div>
          </div>

          {/* Right Showcase Cards */}
          <div className={styles.aboutShowcase}>
            <div className={styles.showcaseCard}>
              <span className={styles.showcaseBadge}>Divisi 01</span>
              <h3 className={styles.showcaseTitle}>
                <IconGravel size={22} color="#15803d" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Produsen & Pemasok Material Tambang
              </h3>
              <p className={styles.showcaseDesc}>
                Mengoperasikan fasilitas stone crusher modern untuk memproduksi agregat
                batu split berbagai fraksi presisi, abu batu screening, dan penyediaan
                pasir beton pilihan. Kapasitas pasokan kami siap memenuhi kebutuhan proyek
                skala kecil hingga mega proyek.
              </p>
              <div className={styles.showcaseHighlights}>
                <span className={styles.tagPill}>Batu Split 10/10 mm</span>
                <span className={styles.tagPill}>Batu Split 10/20 mm</span>
                <span className={styles.tagPill}>Batu Split 20/30 mm</span>
                <span className={styles.tagPill}>Batu Split 30/50 mm</span>
                <span className={styles.tagPill}>Abu Batu</span>
                <span className={styles.tagPill}>Pasir Cor</span>
              </div>
            </div>

            <div className={styles.showcaseCard}>
              <span className={styles.showcaseBadge}>Divisi 02</span>
              <h3 className={styles.showcaseTitle}>
                <IconBuilding size={22} color="#15803d" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Jasa Kontraktor Gedung & Teknik Sipil
              </h3>
              <p className={styles.showcaseDesc}>
                Pelaksana jasa konstruksi profesional dengan cakupan pengerjaan gedung perkantoran,
                gudang industri, serta proyek infrastruktur sipil mencakup pengaspalan jalan, jembatan,
                pekerjaan cut & fill, dan saluran drainase kota.
              </p>
              <div className={styles.showcaseHighlights}>
                <span className={styles.tagPill}>Bangunan Gedung</span>
                <span className={styles.tagPill}>Infrastruktur Sipil</span>
                <span className={styles.tagPill}>Pengaspalan Jalan</span>
                <span className={styles.tagPill}>Drainase & Talud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
