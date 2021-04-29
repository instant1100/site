const fs = require('fs').promises;
const path = require('path');

const rootFolder = './src/';

const searchedExtension = /js/;
const targetExtension = 'tsx';

const processedDir = async (dir) => {
  const list = await fs.readdir(dir);

  list.map(async (fileName) => {
    const original = path.resolve(dir, fileName);
    if (searchedExtension.test(fileName)) {
      const targetFileName = fileName.replace(searchedExtension, targetExtension);
      const target = path.resolve(dir, targetFileName);

      await fs.rename(original, target);
    } else {
      const stat = await fs.lstat(original);
      if (stat.isDirectory()) {
        processedDir(original);
      }
    }
  });
};

processedDir(rootFolder);
