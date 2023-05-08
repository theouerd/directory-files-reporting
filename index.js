const reportGenerator = require('./src/reportGenerator');

if (process.argv.length < 3) {
  console.error('Please provide a directory path as an argument');
  process.exit(1);
}

const directoryPath = process.argv[2];
reportGenerator.generateReport(directoryPath);
