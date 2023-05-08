const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs-extra');
const { performance } = require('perf_hooks');
const fileUtils = require('./fileUtils');

const reportDir = './reporting';

async function generateReport(directoryPath) {
  const startTime = performance.now();
  const fileDetails = await fileUtils.getFileDetails(directoryPath);

  const wb = XLSX.utils.book_new();

  for (const ext in fileDetails) {
    const ws = XLSX.utils.json_to_sheet(fileDetails[ext]);
    XLSX.utils.book_append_sheet(wb, ws, ext.slice(1));
  }

  const summarySheetData = Object.entries(fileDetails).map(
    ([ext, details]) => ({
      extension: ext,
      count: details.length,
    })
  );

  const summaryWs = XLSX.utils.json_to_sheet(summarySheetData);
  XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary');

  const reportName = `report_${path.basename(directoryPath)}_${new Date()
    .toLocaleDateString('en-GB')
    .replace(/\//g, '_')}.xlsx`;

  await fs.ensureDir(reportDir);
  XLSX.writeFile(wb, path.join(reportDir, reportName));

  const endTime = performance.now();
  console.log(`Report generated successfully in ${endTime - startTime} ms`);
}

module.exports = {
  generateReport,
};
