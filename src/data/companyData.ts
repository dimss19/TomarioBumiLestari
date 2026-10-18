export interface ProductItem {
  id: string;
  name: string;
  category: 'agregat' | 'abu_batu' | 'pasir';
  fraction: string;
  tagline: string;
  description: string;
  density: string;
  specs: string[];
  applications: string[];
  badgeColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'gedung' | 'civil';
  subtitle: string;
  description: string;
  scope: string[];
  image: string;
  highlights: string[];
}

export const COMPANY_INFO = {
  name: "CV. TOMARIO BUMI LESTARI",
  shortName: "Tomario Bumi Lestari",
  tagline: "Solusi Agregat Berkualitas & Kontraktor Konstruksi Handal",
  establishedYear: "2018",
  phoneDisplay: "+62 853-9767-0606",
  phoneRaw: "6285397670606",
  email: "Tomariobule@gmail.com",
  address: "Jln. Raja Bunga Jago, Kecamatan Tobelo, Kabupaten Halmahera Utara",
  operationalHours: "10:00 - 19:00 WIT",
  whatsappDirectUrl: "https://wa.me/6285397670606",
  heroSubtitle:
    "Produsen dan pemasok material batu agregat berkualitas standar SNI, abu batu, pasir cor alam, serta mitra kontraktor berpengalaman untuk proyek bangunan gedung komersial dan infrastruktur teknik sipil.",
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "agregat-10-10",
    name: "Agregat 10/10 mm",
    category: "agregat",
    fraction: "Ukuran 10/10 mm (Batu Split 1x1)",
    tagline: "Agregat halus presisi tinggi untuk finishing & perkerasan beton",
    description:
      "Batu split dengan fraksi seragam 10/10 mm hasil pemecahan stone crusher modern. Memiliki tingkat kebersihan tinggi, bebas lumpur dan tanah, ideal untuk campuran beton presisi dan paving.",
    density: "± 1.45 - 1.55 ton/m³",
    specs: [
      "Fraksi nominal: 10 mm x 10 mm",
      "Kadar lumpur: < 1.0%",
      "Bentuk butiran: Kubikal (tidak pipih)",
      "Kekerasan: Uji abrasi Los Angeles < 20%",
    ],
    applications: [
      "Campuran beton mutu tinggi (K-350 ke atas)",
      "Industri paving block & genteng beton press",
      "Lapisan aus perkerasan aspal (Wearing Course)",
      "Finishing lantai beton dekoratif & exposed aggregate",
    ],
  },
  {
    id: "agregat-10-20",
    name: "Agregat 10/20 mm",
    category: "agregat",
    fraction: "Ukuran 10/20 mm (Batu Split 1x2)",
    tagline: "Standar utama pengecoran struktur beton bertulang & jembatan",
    description:
      "Material agregat kasar paling populer dan serbaguna dalam industri konstruksi. Ukuran butir 10/20 mm memberikan daya ikat semen optimal dan kekuatan tekan struktur terbaik.",
    density: "± 1.40 - 1.50 ton/m³",
    specs: [
      "Fraksi nominal: 10 mm - 20 mm",
      "Gradasi: Sesuai standar SNI 03-2834",
      "Ketahanan cuaca: Sangat baik, berat jenis tinggi",
      "Kandungan zat organik: Nihil",
    ],
    applications: [
      "Pengecoran kolom, balok, dan pelat lantai gedung bertingkat",
      "Struktur jembatan, flyover, dan girder beton pracetak",
      "Beton ready-mix untuk proyek perumahan dan komersial",
      "Rigid pavement jalan raya beban berat",
    ],
  },
  {
    id: "agregat-20-30",
    name: "Agregat 20/30 mm",
    category: "agregat",
    fraction: "Ukuran 20/30 mm (Batu Split 2x3)",
    tagline: "Kekuatan maksimal untuk pondasi masif & infrastruktur berat",
    description:
      "Agregat kasar berukuran 20/30 mm yang kokoh dan tahan tekanan ekstrem. Digunakan pada pengecoran beton massa dan lapisan base course jalan raya.",
    density: "± 1.42 - 1.52 ton/m³",
    specs: [
      "Fraksi nominal: 20 mm - 30 mm",
      "Daya tekan tinggi: Batuan andesit/basalt murni",
      "Gradasi seragam & tidak mudah rapuh",
      "Kadar air terkontrol",
    ],
    applications: [
      "Pengecoran pondasi rakit (raft foundation) & bored pile",
      "Dam/bendungan dan dinding penahan tanah (retaining wall)",
      "Lapisan pondasi atas jalan kelas I (Base Course Kelas A)",
      "Konstruksi dermaga dan fasilitas pelabuhan",
    ],
  },
  {
    id: "agregat-30-50",
    name: "Agregat 30/50 mm",
    category: "agregat",
    fraction: "Ukuran 30/50 mm (Batu Split 3x5)",
    tagline: "Batu kasar pondasi bawah, drainase makro, & bantalan rel kereta",
    description:
      "Fraksi batu pecah besar berukuran 30/50 mm dengan porositas dan interlocking alami. Sangat efektif untuk stabilitas tanah dasar dan pondasi sub-base jalan.",
    density: "± 1.35 - 1.48 ton/m³",
    specs: [
      "Fraksi nominal: 30 mm - 50 mm",
      "Interlocking butiran sangat kokoh",
      "Daya dukung tanah (CBR) superior",
      "Tahan gerusan air dan erosi",
    ],
    applications: [
      "Bantalan rel kereta api (ballast)",
      "Sub-base pondasi jalan raya & landasan kontainer",
      "Sistem drainase resapan besar (french drain)",
      "Rip-rap pemecah gelombang dan perkuatan tebing sungai",
    ],
  },
  {
    id: "abu-batu",
    name: "Abu Batu (Stone Dust)",
    category: "abu_batu",
    fraction: "Ukuran 0 - 5 mm (Screening)",
    tagline: "Material pengisi (filler) premium untuk aspal hotmix & paving",
    description:
      "Hasil sampingan pemecahan batu alam bermutu tinggi berukuran halus 0-5 mm. Mengandung mineral silika murni yang memperkuat kepadatan campuran beton dan aspal.",
    density: "± 1.40 - 1.55 ton/m³",
    specs: [
      "Ukuran partikel: 0 - 5 mm",
      "Kadar debu halus terukur sesuai spesifikasi Bina Marga",
      "Daya ikat tinggi saat dipadatkan",
      "Substitusi efektif pasir dalam industri precast",
    ],
    applications: [
      "Filler campuran aspal hotmix (AC-WC & AC-BC)",
      "Bahan baku utama paving block, batako press, & kanstin",
      "Lapisan leveling / bedding pemasangan paving",
      "Campuran mortar khusus dan plester dinding berkepadatan tinggi",
    ],
  },
  {
    id: "pasir-konstruksi",
    name: "Pasir Alami Konstruksi",
    category: "pasir",
    fraction: "Pasir Cor Beton & Pasir Pasang Berkualitas",
    tagline: "Pasir alam bersih bebas lumpur untuk struktur beton & plesteran",
    description:
      "Pasir alam terpilih yang telah disaring bersih dari kotoran organik dan lumpur berlebih. Menghasilkan adukan semen yang homogen, kuat, dan tidak mudah retak.",
    density: "± 1.40 - 1.60 ton/m³",
    specs: [
      "Modulus kehalusan: 2.3 - 3.1",
      "Kadar lumpur: < 3% (lolos uji standar SNI)",
      "Bebas dari garam dan senyawa sulfat merugikan",
      "Butiran tajam dan bersudut untuk adhesi optimal",
    ],
    applications: [
      "Pengecoran struktur beton bertulang (beton cor)",
      "Pemasangan batu bata, hebel / bata ringan, dan batako",
      "Plesteran dan acian dinding halus tanpa retak rambut",
      "Campuran adukan lantai kerja (screed)",
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bangunan-gedung",
    title: "Konstruksi Bangunan Gedung",
    category: "gedung",
    subtitle: "Solusi Rancang & Bangun Komersial, Residensial, dan Industri",
    description:
      "CV. Tomario Bumi Lestari melayani jasa konstruksi bangunan gedung secara terpadu dari tahap perencanaan, struktur, arsitektural, hingga MEP (Mechanical, Electrical, Plumbing). Didukung tenaga ahli bersertifikat dan standar keselamatan kerja K3 ketat.",
    image: "/images/building_construction.jpg",
    scope: [
      "Pembangunan Gedung Perkantoran & Komersial (Ruko, Mall, Showroom)",
      "Pembangunan Gudang Industri (Warehouse) & Pabrik Rangka Baja",
      "Konstruksi Hunian Residensial, Perumahan, & Villa Mewah",
      "Fasilitas Publik: Sekolah, Rumah Sakit, Tempat Ibadah, & Gedung Olahraga",
      "Renovasi Gedung Skala Besar, Retrofitting, & Perkuatan Struktur",
    ],
    highlights: [
      "Manajemen Proyek Terukur dengan Kurva-S & Laporan Berkala",
      "Pengawasan Mutu Ketat (Quality Assurance & Control)",
      "Pilihan Material Langsung dari Sumber Utama (Cost Efficient)",
      "Garansi Pemeliharaan Pasca Konstruksi",
    ],
  },
  {
    id: "bangunan-civil",
    title: "Konstruksi Bangunan Civil (Teknik Sipil)",
    category: "civil",
    subtitle: "Pembangunan Infrastruktur Jalan, Jembatan, & Rekayasa Lahan",
    description:
      "Spesialis dalam pengerjaan proyek infrastruktur sipil berat yang membutuhkan perhitungan geoteknik akurat dan armada alat berat memadai. Kami siap menangani proyek swasta maupun pengadaan instansi pemerintah.",
    image: "/images/civil_engineering.jpg",
    scope: [
      "Pembangunan & Pengaspalan Jalan Raya (Hotmix & Rigid Pavement Beton)",
      "Konstruksi Jembatan, Box Culvert, & Gorong-Gorong Pracetak",
      "Pekerjaan Tanah (Cut & Fill, Land Clearing, Stripping, & Pemadatan Lahan)",
      "Pembangunan Saluran Drainase Perkotaan & Saluran Irigasi Primer/Sekunder",
      "Konstruksi Dinding Penahan Tanah (Talud, Bronjong, Retaining Wall)",
      "Pematangan Lahan Kawasan Industri & Perumahan Baru",
    ],
    highlights: [
      "Armada Alat Berat Lengkap (Excavator, Bulldozer, Vibro Roller, Paver)",
      "Integrasi Pasokan Material Agregat Mandiri yang Menjamin Jadwal",
      "Standar Spesifikasi Bina Marga & Dinas PUPR",
      "Studi Geoteknik & Analisis Topografi Presisi",
    ],
  },
];

export const ADVANTAGES_DATA = [
  {
    title: "Kualitas Agregat Standar SNI",
    description:
      "Semua material batu split, abu batu, dan pasir melalui uji gradasi dan abrasi untuk memastikan kekuatan beton optimal.",
    icon: "quality",
  },
  {
    title: "Kontraktor Berpengalaman",
    description:
      "Tim insinyur sipil dan tenaga lapangan bersertifikasi dengan portofolio proyek gedung dan infrastruktur terpercaya.",
    icon: "contractor",
  },
  {
    title: "Armada Pengiriman Siap Kirim",
    description:
      "Didukung armada dump truck terawat untuk memastikan pengiriman material tepat waktu langsung ke lokasi proyek Anda.",
    icon: "truck",
  },
  {
    title: "Timbangan Digital Akurat",
    description:
      "Jaminan transparansi tonase dan kubikasi dengan fasilitas timbangan jembatan digital berkalibrasi resmi.",
    icon: "scale",
  },
  {
    title: "Harga Langsung Sumber (Produsen)",
    description:
      "Dapatkan penawaran harga paling kompetitif tanpa perantara untuk pembelian proyek eceran maupun kontrak skala besar.",
    icon: "price",
  },
  {
    title: "Respons Cepat & Konsultasi Gratis",
    description:
      "Konsultasikan kebutuhan material atau tender konstruksi Anda langsung ke nomor hotline WhatsApp dan Email resmi.",
    icon: "support",
  },
];

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encoded}`;
}

export function buildEmailLink(subject: string, body: string): string {
  const encSubject = encodeURIComponent(subject);
  const encBody = encodeURIComponent(body);
  return `mailto:${COMPANY_INFO.email}?subject=${encSubject}&body=${encBody}`;
}
