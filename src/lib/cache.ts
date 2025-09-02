// Cache management for Firebase data
interface CacheEntry {
  data: any;
  timestamp: number;
}

class FirebaseCache {
  private cache: Map<string, CacheEntry>;
  private cacheTimeout: number;
  private maxCacheSize: number;

  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
    this.maxCacheSize = 50;
  }

  set(key: string, data: any): void {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): any | null {
    const cached = this.cache.get(key);

    if (!cached) return null;

    // Check if cache is expired
    if (Date.now() - cached.timestamp > this.cacheTimeout) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  clear(): void {
    this.cache.clear();
  }

  // Get cache stats for performance monitoring
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxCacheSize,
      keys: Array.from(this.cache.keys())
    };
  }
}

// Image optimization utilities
export class ImageOptimizer {
  static generateSrcSet(baseUrl: string, widths: number[] = [160, 200, 300, 400]): string {
    if (!baseUrl || !baseUrl.includes('firebase') && !baseUrl.includes('s3')) {
      return baseUrl;
    }

    // For Firebase Storage URLs, append size parameters
    if (baseUrl.includes('firebase')) {
      return widths
        .map(width => `${baseUrl}&w=${width} ${width}w`)
        .join(', ');
    }

    // For S3 or other CDN URLs, you might use different parameters
    // This is a placeholder - adjust based on your CDN capabilities
    return baseUrl;
  }

  static generateSizes(): string {
    return '(max-width: 768px) 160px, (max-width: 1024px) 200px, 300px';
  }

  static createPlaceholderDataUrl(width: number = 200, height: number = 300, color: string = '#e5e7eb'): string {
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${color}"/>
        <circle cx="50%" cy="40%" r="15%" fill="#d1d5db"/>
        <rect x="25%" y="65%" width="50%" height="8%" rx="4%" fill="#d1d5db"/>
        <rect x="30%" y="78%" width="40%" height="6%" rx="3%" fill="#d1d5db"/>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }
}

// Enhanced Firebase data fetching with caching
const firebaseCache = new FirebaseCache();

export async function getCachedTalents() {
  const cacheKey = 'talents';
  const cached = firebaseCache.get(cacheKey);

  if (cached) {
    console.log('📦 Using cached talents data');
    return cached;
  }

  try {
    const { getTalents } = await import('~/lib/talents');
    const talents = await getTalents();
    firebaseCache.set(cacheKey, talents);
    return talents;
  } catch (error) {
    console.error('Failed to fetch talents:', error);
    throw error;
  }
}

export async function getCachedCreatives() {
  const cacheKey = 'creatives';
  const cached = firebaseCache.get(cacheKey);

  if (cached) {
    console.log('📦 Using cached creatives data');
    return cached;
  }

  try {
    const { getCreatives } = await import('~/lib/creatives');
    const creatives = await getCreatives();
    firebaseCache.set(cacheKey, creatives);
    return creatives;
  } catch (error) {
    console.error('Failed to fetch creatives:', error);
    throw error;
  }
}

// Preload critical images
export function preloadCriticalImages(people: any[], count: number = 4): void {
  const criticalImages = people.slice(0, count)
    .filter((person: any) => person.image)
    .map((person: any) => person.image);

  criticalImages.forEach((src: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

export { firebaseCache };
