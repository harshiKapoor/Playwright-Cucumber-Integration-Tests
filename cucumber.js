export default {
  format: [
    'html:reports/cucumber-report.html',
    'json:reports/cucumber-report.json',
    'rerun:@rerun.txt'
  ],
  parallel: 2
}
