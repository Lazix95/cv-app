const fs = require('fs');
const path = require('path');

exports.saveImage = async (base64String, basePath, imageName, { replace } = {}) => {
  const imageBasePath = path.join(basePath, 'lib', 'images');
  const [newImagePath, newName] = await generateUniqueImagePath(imageBasePath, imageName, replace);
  createFoldersForBasePath(imageBasePath);
  const fileData = Buffer.from(base64String, 'base64');
  await fs.promises.writeFile(newImagePath, fileData);
  return Promise.resolve({ path: newImagePath, name: newName });
};

exports.saveOrUpdateJSON = async (basePath, fileName, payload) => {
  const jsonBasePath = path.join(basePath, 'lib', 'json');
  const filePath = path.join(jsonBasePath, fileName);
  let data = {};

  createFoldersForBasePath(jsonBasePath);

  if (fs.existsSync(filePath)) {
    const existingData = await fs.promises.readFile(filePath, 'utf8');
    try {
      if (existingData) data = JSON.parse(existingData);
    } catch (error) {
      console.error('Error parsing JSON file:', error);
      return;
    }
  }

  data = { ...data, ...payload };
  const updatedData = JSON.stringify(data, null, 2);
  await fs.promises.writeFile(filePath, updatedData, 'utf8');
  return Promise.resolve(data);
};

const generateUniqueImagePath = async (basePath, imageName, replace = false) => {
  const extension = path.extname(imageName);
  let nameWithoutExtension = path.basename(imageName, extension);
  let newName;

  let imagePath = path.join(basePath, imageName);
  let count = 1;

  if (replace && (await fileExists(imagePath))) {
    fs.unlinkSync(imagePath);
    return imagePath;
  }

  while (await fileExists(imagePath)) {
    newName = `${nameWithoutExtension}_${count}${extension}`;
    imagePath = path.join(basePath, newName);
    count++;
  }

  return [imagePath, newName];
};

const fileExists = async (filePath) => {
  return new Promise((resolve) => {
    fs.access(filePath, fs.constants.F_OK, (error) => {
      resolve(!error);
    });
  });
};

async function removeFile(filePath) {
  if (await fileExists(filePath)) {
    fs.unlinkSync(filePath);
  }
}

function createFoldersForBasePath(basePath) {
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }
}

exports.addExportStatement = async (basePath, fileName, type) => {
  const filePath = path.join(basePath, 'index.ts');
  const extension = path.extname(fileName);
  const nameWithoutExtension = path.basename(fileName, extension);
  let exportStatement = '';

  if (type === 'images') {
    exportStatement = `export * as ${nameWithoutExtension} from './lib/${type}/${fileName}';`;
  }

  if (type === 'json') {
    exportStatement = `export { default as ${nameWithoutExtension} } from './lib/${type}/${fileName}';`;
  }

  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  const updatedContent = `${fileContent}\n${exportStatement}`;
  return fs.promises.writeFile(filePath, updatedContent, 'utf8');
};

exports.removeFile = removeFile;
