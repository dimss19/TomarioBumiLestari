import type { MetadataRoute } from 'next';
import { PRODUCTS_DATA } from '@/data/companyData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tomariobumilestari.com';
  const currentDate = new Date();

  // Daftar gambar produk utama untuk Google Images SEO
  const productImages = PRODUCTS_DATA.map((product) => `${baseUrl}${product.image}`);
  const allImages = [
    `${baseUrl}/images/hero_quarry.jpg`,
    ...productImages,
    `${baseUrl}/logo.jpg`,
  ];

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: allImages,
    },
  ];
}
