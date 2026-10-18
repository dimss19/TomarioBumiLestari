import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, buildWhatsAppLink } from '@/data/companyData';
import {
  IconPhone,
  IconMail,
  IconClock,
  IconMapPin,
  IconWhatsAppFilled
} from './Icons';
import styles from './Footer.module.css';

export function Footer() {
  const waUrl = buildWhatsAppLink(
    'Halo CV. Tomario Bumi Lestari, saya ingin bertanya seputar profil dan layanan perusahaan.'
  );

  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="#beranda" className={styles.brandHeader}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpg"
                alt="Logo CV. Tomario Bumi Lestari"
                className={styles.footerLogo}
              />
              <div>
                <span className={styles.brandName}>TOMARIO BUMI LESTARI</span>
                <span className={styles.brandTagline}>Quarry &amp; General Contractor</span>
              </div>
            </Link>

            <p className={styles.brandDescription}>
              Perusahaan penyedia agregat batu split berbagai ukuran (10/10, 10/20, 20/30, 30/50),
              abu batu, pasir cor, serta kontraktor terpercaya pembangunan gedung dan infrastruktur
              sipil berstandar nasional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
                  Produk Material Tambang
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#konstruksi" className={styles.footerLink}>
                  Jasa Konstruksi
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#keunggulan" className={styles.footerLink}>
                  Keunggulan Kami
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#kontak" className={styles.footerLink}>
                  Kontak &amp; Pemesanan
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className={styles.footerTitle}>Produk &amp; Layanan</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Agregat 10/10 mm (Split 1x1)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Agregat 10/20 mm (Split 1x2)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Agregat 20/30 mm (Split 2x3)
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk" className={styles.footerLink}>
                  Agregat 30/50 mm (Split 3x5)
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

          {/* Contact Details */}
          <div>
            <h4 className={styles.footerTitle}>Kontak Resmi</h4>
            <div className={styles.contactList}>
              <div className={styles.contactRow}>
                <IconWhatsAppFilled size={18} color="#4ade80" />
                <div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactRowLink}
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                    Chat WhatsApp Pemesanan Cepat
                  </div>
                </div>
              </div>

              <div className={styles.contactRow}>
                <IconMail size={18} color="#4ade80" />
                <div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className={styles.contactRowLink}
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                    Email Penawaran &amp; Dokumen Proyek
                  </div>
                </div>
              </div>

              <div className={styles.contactRow}>
                <IconClock size={18} color="#9ca3af" />
                <div>
                  <div>{COMPANY_INFO.operationalHours}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                    Operasional Pengiriman Terjadwal
                  </div>
                </div>
              </div>

              <div className={styles.contactRow}>
                <IconMapPin size={18} color="#9ca3af" />
                <div>
                  <div>{COMPANY_INFO.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            &copy; {new Date().getFullYear()} CV. Tomario Bumi Lestari. Seluruh Hak Cipta Dilindungi.
          </div>
          <div>
            Profil Perusahaan Resmi • Agregat Batu Pecah &amp; Jasa Konstruksi
          </div>
        </div>
      </div>
    </footer>
  );
}
