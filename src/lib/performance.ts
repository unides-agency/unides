// Performance monitoring utility for talent page
interface PerformanceMetrics {
  pageLoadStart: number;
  firstImageLoad: number | null;
  allImagesLoaded: number | null;
  firebaseLoadTime: number | null;
  renderTime: number | null;
}

declare global {
  interface Window {
    talentPagePerformance?: TalentPagePerformance;
  }
}

class TalentPagePerformance {
  private metrics: PerformanceMetrics;
  private imageLoadCount: number;
  private totalImages: number;

  constructor() {
    this.metrics = {
      pageLoadStart: performance.now(),
      firstImageLoad: null,
      allImagesLoaded: null,
      firebaseLoadTime: null,
      renderTime: null
    };

    this.imageLoadCount = 0;
    this.totalImages = 0;
    this.init();
  }

  private init(): void {
    // Monitor page load performance
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
    } else {
      this.onDOMReady();
    }

    // Monitor window load
    window.addEventListener('load', () => this.onWindowLoad());
  }

  private onDOMReady(): void {
    this.metrics.renderTime = performance.now() - this.metrics.pageLoadStart;
    this.setupImageTracking();
    this.logMetric('DOM Ready', this.metrics.renderTime);
  }

  private onWindowLoad(): void {
    const totalLoadTime = performance.now() - this.metrics.pageLoadStart;
    this.logMetric('Window Load', totalLoadTime);
    this.generateReport();
  }

  private setupImageTracking(): void {
    const images = document.querySelectorAll('.talent-image');
    this.totalImages = images.length;

    images.forEach((img, index) => {
      // Track first image
      img.addEventListener('load', () => {
        if (!this.metrics.firstImageLoad) {
          this.metrics.firstImageLoad = performance.now() - this.metrics.pageLoadStart;
          this.logMetric('First Image Load', this.metrics.firstImageLoad);
        }

        this.imageLoadCount++;

        // Track when all images are loaded
        if (this.imageLoadCount === this.totalImages) {
          this.metrics.allImagesLoaded = performance.now() - this.metrics.pageLoadStart;
          this.logMetric('All Images Loaded', this.metrics.allImagesLoaded);
        }
      });

      // Track image errors
      img.addEventListener('error', () => {
        console.warn(`Failed to load image for talent at index ${index}`);
        this.imageLoadCount++;
      });
    });
  }

  // Track Firebase load time
  setFirebaseLoadTime(loadTime: number): void {
    this.metrics.firebaseLoadTime = loadTime;
    this.logMetric('Firebase Load', loadTime);
  }

  private logMetric(name: string, time: number): void {
    const timeInSeconds = (time / 1000).toFixed(2);
    console.log(`🚀 Performance: ${name} - ${timeInSeconds}s`);

    // Visual performance indicator in development
    if (import.meta.env?.DEV) {
      this.showPerformanceIndicator(name, parseFloat(timeInSeconds));
    }
  }

  private showPerformanceIndicator(metric: string, time: number): void {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: ${time < 1 ? '#10b981' : time < 3 ? '#f59e0b' : '#ef4444'};
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 10000;
      transition: opacity 0.3s;
    `;
    indicator.textContent = `${metric}: ${time}s`;
    document.body.appendChild(indicator);

    setTimeout(() => {
      indicator.style.opacity = '0';
      setTimeout(() => indicator.remove(), 300);
    }, 2000);
  }

  private generateReport() {
    const report = {
      summary: 'Talent Page Performance Report',
      metrics: this.metrics,
      recommendations: this.getRecommendations()
    };

    console.group('🎯 Performance Report');
    console.table(this.metrics);
    console.log('📊 Recommendations:', report.recommendations);
    console.groupEnd();

    return report;
  }

  private getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.firebaseLoadTime && this.metrics.firebaseLoadTime > 2000) {
      recommendations.push('Consider caching Firebase data or implementing pagination');
    }

    if (this.metrics.firstImageLoad && this.metrics.firstImageLoad > 3000) {
      recommendations.push('Implement image optimization or CDN');
    }

    if (this.metrics.allImagesLoaded && this.metrics.allImagesLoaded > 10000) {
      recommendations.push('Consider virtual scrolling for large image sets');
    }

    return recommendations.length ? recommendations : ['Performance looks good! 🎉'];
  }

  // Method to track custom metrics
  trackCustomMetric(name: string, startTime: number): number {
    const duration = performance.now() - startTime;
    this.logMetric(name, duration);
    return duration;
  }
}

// Initialize performance tracking
if (typeof window !== 'undefined') {
  window.talentPagePerformance = new TalentPagePerformance();
}

export default TalentPagePerformance;
