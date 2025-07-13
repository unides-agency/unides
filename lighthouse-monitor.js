#!/usr/bin/env node

/**
 * Lighthouse Performance Monitor
 * Monitors Core Web Vitals: LCP, CLS, TBT
 * Usage: node lighthouse-monitor.js [url]
 */

import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    onlyAudits: [
      'largest-contentful-paint',
      'cumulative-layout-shift',
      'total-blocking-time',
      'first-contentful-paint',
      'speed-index'
    ],
  },
};

// Performance thresholds
const thresholds = {
  lcp: { good: 2500, needsImprovement: 4000 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  tbt: { good: 200, needsImprovement: 600 }
};

function getRating(value, thresholds) {
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function runLighthouse(url) {
  const chrome = await launch({ chromeFlags: ['--headless'] });
  
  try {
    const runnerResult = await lighthouse(url, {
      port: chrome.port,
      disableStorageReset: false,
    }, config);

    const { lhr } = runnerResult;
    const audits = lhr.audits;

    // Extract Core Web Vitals
    const lcp = audits['largest-contentful-paint'].numericValue;
    const cls = audits['cumulative-layout-shift'].numericValue;
    const tbt = audits['total-blocking-time'].numericValue;
    const fcp = audits['first-contentful-paint'].numericValue;
    const si = audits['speed-index'].numericValue;

    // Performance score
    const performanceScore = lhr.categories.performance.score * 100;

    // Generate report
    const report = {
      url,
      timestamp: new Date().toISOString(),
      performance: {
        score: Math.round(performanceScore),
        rating: performanceScore >= 90 ? 'good' : performanceScore >= 50 ? 'needs-improvement' : 'poor'
      },
      metrics: {
        lcp: {
          value: Math.round(lcp),
          rating: getRating(lcp, thresholds.lcp),
          unit: 'ms'
        },
        cls: {
          value: Math.round(cls * 1000) / 1000,
          rating: getRating(cls, thresholds.cls),
          unit: 'score'
        },
        tbt: {
          value: Math.round(tbt),
          rating: getRating(tbt, thresholds.tbt),
          unit: 'ms'
        },
        fcp: {
          value: Math.round(fcp),
          unit: 'ms'
        },
        si: {
          value: Math.round(si),
          unit: 'ms'
        }
      },
      opportunities: [],
      diagnostics: []
    };

    // Add performance opportunities
    const opportunities = [
      'unused-css-rules',
      'unused-javascript',
      'render-blocking-resources',
      'unminified-css',
      'unminified-javascript',
      'efficient-animated-content',
      'uses-optimized-images',
      'uses-webp-images',
      'uses-responsive-images'
    ];

    opportunities.forEach(auditId => {
      if (audits[auditId] && audits[auditId].details) {
        const audit = audits[auditId];
        if (audit.score < 1) {
          report.opportunities.push({
            id: auditId,
            title: audit.title,
            description: audit.description,
            score: audit.score,
            savings: audit.details.overallSavingsMs || 0
          });
        }
      }
    });

    // Add diagnostics
    const diagnostics = [
      'mainthread-work-breakdown',
      'dom-size',
      'critical-request-chains',
      'uses-long-cache-ttl'
    ];

    diagnostics.forEach(auditId => {
      if (audits[auditId]) {
        const audit = audits[auditId];
        report.diagnostics.push({
          id: auditId,
          title: audit.title,
          description: audit.description,
          score: audit.score,
          displayValue: audit.displayValue || ''
        });
      }
    });

    return report;
  } finally {
    await chrome.kill();
  }
}

function printReport(report) {
  console.log('\n🚀 Lighthouse Performance Report');
  console.log('================================');
  console.log(`URL: ${report.url}`);
  console.log(`Timestamp: ${report.timestamp}`);
  console.log(`Performance Score: ${report.performance.score}/100 (${report.performance.rating})`);
  
  console.log('\n📊 Core Web Vitals');
  console.log('-------------------');
  
  const getEmoji = (rating) => {
    switch (rating) {
      case 'good': return '✅';
      case 'needs-improvement': return '⚠️';
      case 'poor': return '❌';
      default: return '❓';
    }
  };

  console.log(`LCP: ${getEmoji(report.metrics.lcp.rating)} ${report.metrics.lcp.value}${report.metrics.lcp.unit} (${report.metrics.lcp.rating})`);
  console.log(`CLS: ${getEmoji(report.metrics.cls.rating)} ${report.metrics.cls.value} (${report.metrics.cls.rating})`);
  console.log(`TBT: ${getEmoji(report.metrics.tbt.rating)} ${report.metrics.tbt.value}${report.metrics.tbt.unit} (${report.metrics.tbt.rating})`);
  
  console.log('\n📈 Additional Metrics');
  console.log('---------------------');
  console.log(`FCP: ${report.metrics.fcp.value}${report.metrics.fcp.unit}`);
  console.log(`Speed Index: ${report.metrics.si.value}${report.metrics.si.unit}`);

  if (report.opportunities.length > 0) {
    console.log('\n🔧 Performance Opportunities');
    console.log('----------------------------');
    report.opportunities
      .sort((a, b) => b.savings - a.savings)
      .slice(0, 5)
      .forEach(opp => {
        console.log(`• ${opp.title} (${opp.savings}ms savings)`);
      });
  }

  if (report.diagnostics.length > 0) {
    console.log('\n🔍 Diagnostics');
    console.log('-------------');
    report.diagnostics
      .filter(diag => diag.score < 1)
      .slice(0, 3)
      .forEach(diag => {
        console.log(`• ${diag.title} ${diag.displayValue ? `(${diag.displayValue})` : ''}`);
      });
  }

  // Animation deferring recommendations
  console.log('\n🎨 Animation Recommendations');
  console.log('----------------------------');
  
  if (report.metrics.tbt.rating === 'poor') {
    console.log('❌ High TBT detected - Consider deferring animations');
    console.log('   → Implement animation deferring based on performance');
    console.log('   → Use simpler animations or reduce duration');
  }
  
  if (report.metrics.cls.rating === 'poor') {
    console.log('❌ High CLS detected - Optimize layout stability');
    console.log('   → Add explicit dimensions to images');
    console.log('   → Reserve space for dynamic content');
  }
  
  if (report.metrics.lcp.rating === 'poor') {
    console.log('❌ High LCP detected - Optimize content loading');
    console.log('   → Set loading="eager" for above-the-fold images');
    console.log('   → Use fetchpriority="high" for critical resources');
  }

  console.log('\n');
}

async function saveReport(report, filename) {
  const reportPath = join(__dirname, 'lighthouse-reports', filename);
  const dir = dirname(reportPath);
  
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  
  writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Report saved to: ${reportPath}`);
}

// Main execution
async function main() {
  const url = process.argv[2] || 'http://localhost:4321';
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  console.log(`🔍 Running Lighthouse audit on: ${url}`);
  console.log('This may take a moment...\n');
  
  try {
    const report = await runLighthouse(url);
    printReport(report);
    await saveReport(report, `lighthouse-${timestamp}.json`);
    
    // Exit with appropriate code based on performance
    const hasIssues = report.metrics.lcp.rating === 'poor' || 
                     report.metrics.cls.rating === 'poor' || 
                     report.metrics.tbt.rating === 'poor';
    
    process.exit(hasIssues ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Error running Lighthouse:', error.message);
    process.exit(1);
  }
}

// Handle CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { runLighthouse, printReport, saveReport };
