import type { Page } from "playwright";

export const getPerformanceMetrics = async (page: Page) => {
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as any;

    return {
      domContentLoaded:
        navigation.domContentLoadedEventEnd - navigation.startTime,

      loadTime:
        navigation.loadEventEnd - navigation.startTime,
    };
  });

  return metrics;
};