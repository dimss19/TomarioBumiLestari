import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, buildWhatsAppLink } from '@/data/companyData';
import {
  IconMail,
  IconClock,
  IconMapPin,
  IconWhatsAppFilled,
  IconShieldCheck
} from './Icons';
import styles from './Footer.module.css';

export function Footer() {
  const waUrl = buildWhatsAppLink(
    'Halo CV. Tomario Bumi Lestari, saya ingin bertanya seputar profil dan pemesanan material / jasa konstruksi.'
  );

  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="#beranda" className={styles.brandHeader}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpg"
                alt="Logo CV. Tomario Bumi Lestari"
                className={styles.footerLogo}
              />
              <div className={styles.brandTextGroup}>
                <span className={styles.brandName}>TOMARIO BUMI LESTARI</span>
                <span className={styles.brandTagline}>Quarry &amp; General Contractor</span>
              </div>
            </Link>

            <p className={styles.brandDescription}>
              Produsen agregat batu split berkualitas standar SNI dan kontraktor pelaksana
              konstruksi bangunan gedung serta infrastruktur teknik sipil terpercaya di Tobelo, Halmahera Utara.
            </p>

            <div className={styles.companyBadge}>
              <IconShieldCheck size={16} color="#4ade80" />
              <span>Badan Usaha Resmi • Standar Mutu SNI</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.colNav}>
            <h4 className={styles.footerTitle}>Navigasi</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#beranda" className={styles.footerLink}>
                  Beranda
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#tentang" className={styles.footerLink}>
                  Tentang Perusahaan
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Produk Material Agregat
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#konstruksi" className={styles.footerLink}>
                  Jasa Konstruksi Gedung &amp; Sipil
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#keunggulan" className={styles.footerLink}>
                  Keunggulan Perusahaan
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#kontak" className={styles.footerLink}>
                  Kontak &amp; Lokasi Kantor
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Services */}
          <div className={styles.colProducts}>
            <h4 className={styles.footerTitle}>Produk &amp; Layanan</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Batu Split 10/10 mm (1x1)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Batu Split 10/20 mm (1x2)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Batu Split 20/30 mm (2x3)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Batu Split 30/50 mm (3x5)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Abu Batu (Stone Dust)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Pasir Alami Konstruksi
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#konstruksi" className={styles.footerLink}>
                  Konstruksi Bangunan Gedung
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#konstruksi" className={styles.footerLink}>
                  Konstruksi Bangunan Civil
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact */}
          <div className={styles.colContact}>
            <h4 className={styles.footerTitle}>Kontak Resmi</h4>
            <div className={styles.contactList}>
              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCardItem}
                title="Hubungi via WhatsApp"
              >
                <div className={styles.contactIconBox}>
                  <IconWhatsAppFilled size={18} color="#22c55e" />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>WhatsApp Resmi</span>
                  <span className={styles.contactMainVal}>{COMPANY_INFO.phoneDisplay}</span>
                  <span className={styles.contactSubVal}>Respon cepat konsultasi spesifikasi</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className={styles.contactCardItem}
                title="Kirim Email"
              >
                <div className={styles.contactIconBox}>
                  <IconMail size={18} color="#22c55e" />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Email Dokumen Proyek</span>
                  <span className={styles.contactMainVal}>{COMPANY_INFO.email}</span>
                  <span className={styles.contactSubVal}>Penawaran resmi, RAB &amp; PO</span>
                </div>
              </a>

              {/* Jam Operasional */}
              <div className={styles.contactCardItem}>
                <div className={styles.contactIconBox}>
                  <IconClock size={18} color="#94a3b8" />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Jam Operasional</span>
                  <span className={styles.contactMainVal}>{COMPANY_INFO.operationalHours}</span>
                  <span className={styles.contactSubVal}>Pelayanan kantor &amp; muat armada</span>
                </div>
              </div>

              {/* Alamat Kantor */}
              <div className={styles.contactCardItem}>
                <div className={styles.contactIconBox}>
                  <IconMapPin size={18} color="#94a3b8" />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Lokasi Kantor</span>
                  <span className={styles.contactMainVal}>{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} <strong>CV. Tomario Bumi Lestari</strong>. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className={styles.bottomMeta}>
            <span>Tobelo, Halmahera Utara</span>
            <span className={styles.bottomDivider}>•</span>
            <span>Agregat Batu Pecah SNI</span>
            <span className={styles.bottomDivider}>•</span>
            <span>Kontraktor Konstruksi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
