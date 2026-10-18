'use client';

import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, buildWhatsAppLink, buildEmailLink } from '@/data/companyData';
import {
  IconClose,
  IconWhatsAppFilled,
  IconMail
} from './Icons';
import styles from './OrderModal.module.css';

interface OrderModalProps {
  isOpen: boolean;
  initialItem?: string;
  onClose: () => void;
}

const MATERIAL_OPTIONS = [
  'Agregat 10/10 mm (Batu Split 1x1)',
  'Agregat 10/20 mm (Batu Split 1x2)',
  'Agregat 20/30 mm (Batu Split 2x3)',
  'Agregat 30/50 mm (Batu Split 3x5)',
  'Abu Batu (Stone Dust)',
  'Pasir Alami Konstruksi',
];

const SERVICE_OPTIONS = [
  'Konstruksi Bangunan Gedung (Perkantoran / Komersial / Ruko)',
  'Konstruksi Gudang Industri & Pabrik Rangka Baja',
  'Konstruksi Bangunan Civil (Jalan Raya Aspal & Rigid Beton)',
  'Konstruksi Jembatan & Box Culvert',
  'Pekerjaan Tanah (Cut & Fill / Pematangan Lahan)',
  'Sistem Drainase & Dinding Penahan Tanah (Talud / Retaining Wall)',
];

export function OrderModal({ isOpen, initialItem, onClose }: OrderModalProps) {
  const [orderType, setOrderType] = useState<'material' | 'jasa'>('material');
  const [selectedItem, setSelectedItem] = useState<string>(MATERIAL_OPTIONS[1]);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [projectLocation, setProjectLocation] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (initialItem) {
      if (initialItem.toLowerCase().includes('bangunan') || initialItem.toLowerCase().includes('civil')) {
        setOrderType('jasa');
        const match = SERVICE_OPTIONS.find((s) => s.toLowerCase().includes(initialItem.toLowerCase()));
        if (match) setSelectedItem(match);
      } else {
        setOrderType('material');
        const match = MATERIAL_OPTIONS.find((m) => m.toLowerCase().includes(initialItem.toLowerCase()));
        if (match) setSelectedItem(match);
      }
    }
  }, [initialItem]);

  if (!isOpen) return null;

  const currentOptions = orderType === 'material' ? MATERIAL_OPTIONS : SERVICE_OPTIONS;

  const handleSendWhatsApp = () => {
    const lines = [
      `Halo CV. Tomario Bumi Lestari,`,
      ``,
      `Saya ingin mengajukan permintaan penawaran / pesanan resmi:`,
      `- Kategori: ${orderType === 'material' ? 'Material Tambang / Agregat' : 'Jasa Konstruksi'}`,
      `- Item: ${selectedItem}`,
      customerName ? `- Nama Pemesan: ${customerName}` : '',
      customerPhone ? `- Kontak: ${customerPhone}` : '',
      quantity ? `- Estimasi Jumlah / Volume: ${quantity}` : '',
      projectLocation ? `- Lokasi Proyek: ${projectLocation}` : '',
      notes ? `- Catatan Khusus: ${notes}` : '',
      ``,
      `Mohon informasi harga, ketersediaan jadwal, dan prosedur pemesanan selanjutnya.`,
      `Terima kasih.`
    ].filter(Boolean).join('\n');

    const url = buildWhatsAppLink(lines);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    const subject = `Permintaan Penawaran: ${selectedItem} - CV. Tomario Bumi Lestari`;
    const body = [
      `Yth. Tim CV. Tomario Bumi Lestari,`,
      ``,
      `Berikut rincian permintaan pesanan / penawaran kami:`,
      `Kategori: ${orderType === 'material' ? 'Material Tambang / Agregat' : 'Jasa Konstruksi'}`,
      `Item / Layanan: ${selectedItem}`,
      `Nama Pemohon / Perusahaan: ${customerName || '-'}`,
      `Nomor Kontak / WhatsApp: ${customerPhone || '-'}`,
      `Estimasi Volume / Kuantitas: ${quantity || '-'}`,
      `Lokasi Pengiriman / Proyek: ${projectLocation || '-'}`,
      `Catatan Tambahan: ${notes || '-'}`,
      ``,
      `Mohon dapat dikirimkan Surat Penawaran Harga (SPH) resmi atau dihubungi lebih lanjut.`,
      ``,
      `Hormat kami,`,
      customerName || 'Calon Mitra'
    ].join('\n');

    const url = buildEmailLink(subject, body);
    window.location.href = url;
  };

  return (
    <div className={`${styles.modalOverlay} ${styles.modalOverlayOpen}`} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {/* Header */}
        <div className={styles.modalHeader}>
          <div>
            <h3 className={styles.modalTitle}>Formulir Pemesanan &amp; Penawaran</h3>
            <p className={styles.modalSubtitle}>CV. Tomario Bumi Lestari - WhatsApp &amp; Email Direct</p>
          </div>
          <button
            type="button"
            className={styles.modalCloseBtn}
            onClick={onClose}
            aria-label="Tutup Formulir"
          >
            <IconClose size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className={styles.modalBody}>
          {/* Type Selector */}
          <div className={styles.typeSelector}>
            <button
              type="button"
              className={`${styles.typeBtn} ${orderType === 'material' ? styles.typeBtnActive : ''}`}
              onClick={() => {
                setOrderType('material');
                setSelectedItem(MATERIAL_OPTIONS[0]);
              }}
            >
              Material (Agregat / Abu Batu / Pasir)
            </button>
            <button
              type="button"
              className={`${styles.typeBtn} ${orderType === 'jasa' ? styles.typeBtnActive : ''}`}
              onClick={() => {
                setOrderType('jasa');
                setSelectedItem(SERVICE_OPTIONS[0]);
              }}
            >
              Jasa Konstruksi (Gedung &amp; Civil)
            </button>
          </div>

          <div className={styles.formRow}>
            <label htmlFor="modal-item" className={styles.formLabel}>
              Pilihan {orderType === 'material' ? 'Produk Material' : 'Layanan Jasa'}:
            </label>
            <select
              id="modal-item"
              className={styles.formSelect}
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
            >
              {currentOptions.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formRow}>
            <label htmlFor="modal-quantity" className={styles.formLabel}>
              {orderType === 'material' ? 'Estimasi Kebutuhan (m3 / Ton / Rit)' : 'Perkiraan Luas Bangunan / Panjang Pekerjaan'}
            </label>
            <input
              id="modal-quantity"
              type="text"
              className={styles.formInput}
              placeholder={orderType === 'material' ? 'Contoh: 100 Ton atau 50 m3' : 'Contoh: Gedung 3 Lantai (1200 m2) / Jalan 2 Km'}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="modal-location" className={styles.formLabel}>
              Lokasi Pengiriman / Lokasi Proyek:
            </label>
            <input
              id="modal-location"
              type="text"
              className={styles.formInput}
              placeholder="Contoh: Makassar / Gowa / Maros / Sekitarnya"
              value={projectLocation}
              onChange={(e) => setProjectLocation(e.target.value)}
            />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="modal-name" className={styles.formLabel}>
              Nama Pemesan / Nama Perusahaan (Opsional):
            </label>
            <input
              id="modal-name"
              type="text"
              className={styles.formInput}
              placeholder="Contoh: Bapak Hendra / PT. Konstruksi Maju"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="modal-phone" className={styles.formLabel}>
              Nomor WhatsApp / Kontak Anda (Opsional):
            </label>
            <input
              id="modal-phone"
              type="tel"
              className={styles.formInput}
              placeholder="Contoh: 0812xxxxxxxx"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="modal-notes" className={styles.formLabel}>
              Catatan Khusus / Spesifikasi Tambahan:
            </label>
            <textarea
              id="modal-notes"
              className={styles.formTextarea}
              placeholder="Contoh: Butuh sampel material sebelum pengiriman, jadwal pengiriman minggu depan..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className={styles.modalFooter}>
          <div className={styles.targetInfo}>
            Pesan akan diteruskan ke kontak resmi: WhatsApp {COMPANY_INFO.phoneDisplay} &amp; Email {COMPANY_INFO.email}
          </div>

          <div className={styles.actionGrid}>
            <button
              type="button"
              className="btn btn-whatsapp"
              onClick={handleSendWhatsApp}
            >
              <IconWhatsAppFilled size={18} />
              <span>Kirim via WhatsApp</span>
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSendEmail}
            >
              <IconMail size={18} />
              <span>Kirim via Email</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
