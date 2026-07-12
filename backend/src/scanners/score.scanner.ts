export const calculateWebsiteScore = (report: any) => {
  let performance = 100;
  let accessibility = 100;
  let seo = 100;
  let bestPractices = 100;

  if (report.consoleMessages?.length > 0) {
    bestPractices -= 10;
  }

  if (report.failedRequests?.length > 0) {
    performance -= 15;
  }

  if (report.jsErrors?.length > 0) {
    bestPractices -= 15;
  }

  if (report.images > 20) {
    performance -= 10;
  }

  if (report.links < 5) {
    seo -= 15;
  }

  if (report.accessibilityIssues?.length > 0) {
    accessibility -= report.accessibilityIssues.length * 5;
  }

  performance = Math.max(0, performance);
  accessibility = Math.max(0, accessibility);
  seo = Math.max(0, seo);
  bestPractices = Math.max(0, bestPractices);

  const overall = Math.round(
    (performance + accessibility + seo + bestPractices) / 4
  );

  return {
    overall,
    performance,
    accessibility,
    seo,
    bestPractices,
  };
};