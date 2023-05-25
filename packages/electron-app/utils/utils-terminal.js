const { exec } = require('child_process');
const { ipcMain } = require('electron');
const { saveImage, saveOrUpdateJSON, addExportStatement, removeFile } = require('./utils-files.js');
const path = require('path');

const basePath = path.join(__dirname, '..', '..', 'shared', 'content', 'src');

ipcMain.handle('run-command', async (event, command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ success: false, error: error.message });
        return;
      }
      if (stderr) {
        resolve({ success: false, error: stderr });
        return;
      }
      resolve({ success: true, data: stdout });
    });
  });
});

ipcMain.handle('saveImage', async (event, { file, fileName }) => {
  let saveImageRes;
  try {
    saveImageRes = await saveImage(file, basePath, fileName);
    await addExportStatement(basePath, saveImageRes.name, 'images');
    return Promise.resolve({ success: true, data: { imagePath: saveImageRes.path } });
  } catch (err) {
    if (saveImageRes?.path) await removeFile(saveImage.path);
    throw err;
  }
});

ipcMain.handle('updateImage', async (event, { file, fileName }) => {
  const res = await saveImage(file, basePath, fileName, { replace: true });
});

ipcMain.handle('saveJson', async (event, { payload, fileName }) => {
  const res = await saveOrUpdateJSON(basePath, fileName, payload);
});
