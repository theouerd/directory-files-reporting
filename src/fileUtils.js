const fs = require('fs-extra');
const path = require('path');

async function readDirectory(directoryPath) {
  try {
    return await fs.readdir(directoryPath);
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    process.exit(1);
  }
}

async function getFileDetails(directoryPath) {
  const files = await readDirectory(directoryPath);
  const fileDetails = {};

  for (const file of files) {
    const fullPath = path.join(directoryPath, file);
    const stats = await fs.stat(fullPath);

    if (!stats.isFile()) {
      continue;
    }

    const ext = path.extname(file);
    const fileNameWithoutExt = path.basename(file, ext);

    if (!fileDetails[ext]) {
      fileDetails[ext] = [];
    }

    fileDetails[ext].push({
      name: fileNameWithoutExt,
      size: stats.size,
      createdAt: stats.birthtime,
      updatedAt: stats.mtime,
    });
  }

  return fileDetails;
}

module.exports = {
  getFileDetails,
};
