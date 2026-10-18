'use client';

import React, { useState } from 'react';
import { COMPANY_INFO, buildWhatsAppLink, buildEmailLink } from '@/data/companyData';
import {
  IconCalculator,
  IconWhatsAppFilled,
  IconMail,
  IconArrowRight
} from './Icons';
import styles from './Calculator.module.css';

interface MaterialOption {
  id: string;
  name: string;
  density: number; // ton / m3
}

const MATERIAL_OPTIONS: MaterialOption[] = [
  { id: 'agregat-10-10', name: 'Agregat 10/10 mm (Batu Split 1x1)', density: 1.5 },
  { id: 'agregat-10-20', name: 'Agregat 10/20 mm (Batu Split 1x2)', density: 1.45 },
  { id: 'agregat-20-30', name: 'Agregat 20/30 mm (Batu Split 2x3)', density: 1.45 },
  { id: 'agregat-30-50', name: 'Agregat 30/50 mm (Batu Split 3x5)', density: 1.42 },
  { id: 'abu-batu', name: 'Abu Batu (Stone Dust)', density: 1.48 },
  { id: 'pasir', name: 'Pasir Alami Konstruksi', density: 1.5 },
];

export function Calculator() {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('agregat-10-20');
  const [length, setLength] = useState<number>(10);
  const [width, setWidth] = useState<number>(5);
  const [thicknessCm, setThicknessCm] = useState<number>(15);

  const selectedMaterial =
    MATERIAL_OPTIONS.find((m) => m.id === selectedMaterialId) || MATERIAL_OPTIONS[1];

  // Calculations:
  // Volume (m3) = length (m) * width (m) * (thicknessCm / 100)
  const volumeM3 = Math.max(0, length * width * (thicknessCm / 100));
  // Tonnage (ton) = volume * density
  const tonnage = volumeM3 * selectedMaterial.density;
  // Estimated dump trucks (standard dump truck is approx 6 m3)
  const estimatedTrucks = Math.ceil(volumeM3 / 6);

  const formattedVolume = volumeM3.toFixed(2);
  const formattedTonnage = tonnage.toFixed(2);

  const waMessage = `Halo CV. Tomario Bumi Lestari,\n\nSaya telah menghitung estimasi kebutuhan material melalui website resmi Anda:\n\n- Material: ${selectedMaterial.name}\n- Dimensi Proyek: ${length} m x ${width} m x ${thicknessCm} cm\n- Estimasi Volume: ${formattedVolume} m3\n- Estimasi Tonase: ${formattedTonnage} Ton (± ${estimatedTrucks} Rit Dump Truck 6 m3)\n\nMohon informasi ketersediaan armada, harga material, dan ongkos kirim ke lokasi saya.\n\nTerima kasih.`;
  const waUrl = buildWhatsAppLink(waMessage);

  const emailSubject = `Estimasi Kebutuhan Material: ${selectedMaterial.name} (${formattedVolume} m3)`;
  const emailBody = `Yth. Tim Logistik CV. Tomario Bumi Lestari,\n\nBerikut rincian estimasi material yang kami butuhkan:\n\nMaterial: ${selectedMaterial.name}\nDimensi: Panjang ${length} m, Lebar ${width} m, Tebal ${thicknessCm} cm\nTotal Volume: ${formattedVolume} m3\nTotal Tonase: ${formattedTonnage} Ton\nLokasi Pengiriman:\n\nMohon diterbitkan penawaran harga resmi.\n\nTerima kasih.`;
  const emailUrl = buildEmailLink(emailSubject, emailBody);

  return (
    <section id="kalkulator" className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconCalculator size={14} />
            <span>Kalkulator Material</span>
          </span>
          <h2 className="section-title">
            Estimasi Kebutuhan Volume &amp; Tonase
          </h2>
          <p className="section-description">
            Hitung perkiraan kebutuhan agregat, abu batu, atau pasir untuk perkerasan
            jalan, pelat lantai, atau pondasi Anda, lalu kirim hasilnya langsung ke WhatsApp kami.
          </p>
        </div>

        <div className={styles.calcCard}>
          {/* Input Form */}
          <div className={styles.calcForm}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="material-select" className={styles.formLabel}>
                Pilih Jenis Material:
              </label>
              <select
                id="material-select"
                className={styles.formSelect}
                value={selectedMaterialId}
                onChange={(e) => setSelectedMaterialId(e.target.value)}
              >
                {MATERIAL_OPTIONS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="input-length" className={styles.formLabel}>
                  Panjang Area (P)
                </label>
                <input
                  id="input-length"
                  type="number"
                  min="0"
                  step="0.5"
                  className={styles.formInput}
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                />
                <span className={styles.unitHint}>Satuan: Meter (m)</span>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="input-width" className={styles.formLabel}>
                  Lebar Area (L)
                </label>
                <input
                  id="input-width"
                  type="number"
                  min="0"
                  step="0.5"
                  className={styles.formInput}
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                />
                <span className={styles.unitHint}>Satuan: Meter (m)</span>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="input-thickness" className={styles.formLabel}>
                  Ketebalan / Kedalaman (T)
                </label>
                <input
                  id="input-thickness"
                  type="number"
                  min="0"
                  step="1"
                  className={styles.formInput}
                  value={thicknessCm}
                  onChange={(e) => setThicknessCm(parseFloat(e.target.value) || 0)}
                />
                <span className={styles.unitHint}>Satuan: Centimeter (cm)</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: '#6b7280' }}>
              * Perhitungan menggunakan faktor konversi densitas standar {selectedMaterial.density} Ton/m3.
              Kebutuhan aktual dapat dipengaruhi oleh faktor pemadatan lapangan.
            </div>
          </div>

          {/* Result Output Panel */}
          <div className={styles.calcResultPanel}>
            <div>
              <div className={styles.resultHeader}>
                <h3 className={styles.resultTitle}>Hasil Perhitungan Estimasi</h3>
                <p className={styles.resultSubtitle}>{selectedMaterial.name}</p>
              </div>

              <div className={styles.resultStats}>
                <div className={styles.resultStatRow}>
                  <span className={styles.resultStatLabel}>Volume Material:</span>
                  <span className={styles.resultStatValue}>{formattedVolume} m3</span>
                </div>

                <div className={styles.resultStatRow}>
                  <span className={styles.resultStatLabel}>Perkiraan Tonase:</span>
                  <span className={styles.resultStatValue}>{formattedTonnage} Ton</span>
                </div>

                <div className={styles.resultStatRow}>
                  <span className={styles.resultStatLabel}>Estimasi Rit Dump Truck (6 m3):</span>
                  <span className={styles.resultStatValue}>± {estimatedTrucks} Rit</span>
                </div>
              </div>

              <p className={styles.resultNote}>
                Kirim data perhitungan ini secara instan ke kontak resmi CV. Tomario Bumi Lestari
                untuk pengecekan stok dan penawaran ongkos kirim ke lokasi Anda.
              </p>
            </div>

            <div className={styles.resultActions}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <IconWhatsAppFilled size={18} />
                <span>Kirim Hasil ke WhatsApp</span>
              </a>

              <a
                href={emailUrl}
                className="btn btn-outline-dark"
                style={{ width: '100%', borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
              >
                <IconMail size={18} />
                <span>Kirim Hasil ke Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
