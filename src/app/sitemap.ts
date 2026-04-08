import { MetadataRoute } from 'next';
import { experiences } from '@/data/experience';
import { profile } from '@/data/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carlostangarife.com';
  
  // Helper para crear slugs
  const createSlug = (company: string, role: string): string => {
    const cleanCompany = company.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    const cleanRole = role.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    return `${cleanCompany}-${cleanRole}`;
  };

  // Páginas principales
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Páginas de experiencias dinámicas
  const experiencePages = experiences.map((exp) => ({
    url: `${baseUrl}/experience/${createSlug(exp.company, exp.role)}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...experiencePages];
}