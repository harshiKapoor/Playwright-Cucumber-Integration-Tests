// cucumber.js
const config = `
  --format json:features/reports/cucumber-html-reporter.json
  --format message:features/reports/cucumber-html-reporter.ndjson
  --format html:features/reports/report.html
  `;

export default config;