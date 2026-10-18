'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO, buildWhatsAppLink } from '@/data/companyData';
import {
  IconPhone,
  IconMail,
  IconClock,
  IconWhatsApp,
  IconMenu,
  IconClose,
  IconArrowRight
} from './Icons';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenQuoteModal: (initialItem?: string) => void;
}

export function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Produk Material', href: '#produk' },
    { label: 'Jasa Konstruksi', href: '#konstruksi' },
    { label: 'Kalkulator', href: '#kalkulator' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const quickWaLink = buildWhatsAppLink(
    'Halo CV. Tomario Bumi Lestari, saya ingin berkonsultasi mengenai kebutuhan material / jasa konstruksi.'
  );

  return (
    <header className={styles.headerWrapper}>
      {/* Main Navbar */}
      <div className={styles.navBar}>
        <div className={`container ${styles.navContainer}`}>
          {/* Logo & Brand Identity */}
          <Link href="#beranda" className={styles.brand} onClick={closeMobileMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpg"
              alt="Logo CV. Tomario Bumi Lestari"
              className={styles.logoImage}
            />
            <div className={styles.brandInfo}>
              <span className={styles.brandName}>TOMARIO BUMI LESTARI</span>
              <span className={styles.brandTagline}>Quarry &amp; General Contractor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Navigasi Utama">
            <ul className={styles.navLinks}>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className={styles.navActions}>
            <button
              type="button"
              className={`${styles.quoteBtn} btn-shimmer`}
              onClick={() => onOpenQuoteModal()}
            >
              <span>Minta Penawaran</span>
              <IconArrowRight size={14} />
            </button>

            <button
              type="button"
              className={styles.hamburgerBtn}
              onClick={toggleMobileMenu}
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              <IconMenu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={closeMobileMenu}
      >
        <div
          className={styles.mobileDrawer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileDrawerHeader}>
            <div className={styles.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpg"
                alt="Logo CV. Tomario Bumi Lestari"
                className={styles.logoImage}
              />
              <div className={styles.brandInfo}>
                <span className={styles.brandName}>TOMARIO</span>
                <span className={styles.brandTagline}>BUMI LESTARI</span>
              </div>
            </div>
            <button
              type="button"
              className={styles.hamburgerBtn}
              onClick={closeMobileMenu}
              aria-label="Tutup navigasi"
            >
              <IconClose size={20} />
            </button>
          </div>

          <ul className={styles.mobileNavList}>
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '1.5rem' }}
            onClick={() => {
              closeMobileMenu();
              onOpenQuoteModal();
            }}
          >
            <span>Minta Penawaran</span>
            <IconArrowRight size={16} />
          </button>

          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.8125rem' }}>
            <div style={{ fontWeight: 700, color: '#090d10', marginBottom: '0.5rem' }}>Kontak Resmi:</div>
            <div style={{ color: '#475569', marginBottom: '0.25rem' }}>{COMPANY_INFO.phoneDisplay}</div>
            <div style={{ color: '#475569' }}>{COMPANY_INFO.email}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
