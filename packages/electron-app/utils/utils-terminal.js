const { exec } = require('child_process');
const { ipcMain } = require('electron');
const { saveImage, saveOrUpdateJSON, addOrRemoveExportStatement: addOrRemoveExportStatement, removeImage } = require('./utils-files.js');
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

ipcMain.handle('saveImage', async (event, { file, fileName, folderName }) => {
  let saveImageRes;
  try {
    saveImageRes = await saveImage(file, basePath, fileName, { folderName });
    await addOrRemoveExportStatement(basePath, saveImageRes.name, 'images', { folderName });
    return Promise.resolve({ success: true, data: { path: saveImageRes.path, name: saveImageRes.name } });
  } catch (err) {
    if (saveImageRes?.name) await removeImage(basePath, folderName, saveImageRes.name);
    return Promise.reject(err);
  }
});

ipcMain.handle('updateImage', async (event, { file, fileName, folderName }) => {
  let saveImageRes;
  try {
    saveImageRes = await saveImage(file, basePath, fileName, { replace: true, folderName });
    await addOrRemoveExportStatement(basePath, saveImageRes.name, 'images');
    return Promise.resolve({ success: true, data: { Path: saveImageRes.path, name: saveImageRes.name } });
  } catch (error) {
    if (saveImageRes?.path) await removeImage(basePath, folderName, saveImageRes.name);
    return Promise.reject({ success: false, error });
  }
});

ipcMain.handle('saveJson', async (event, { payload, fileName }) => {
  try {
    const data = await saveOrUpdateJSON(basePath, fileName, payload);
    return Promise.resolve({ success: true, data });
  } catch (error) {
    return Promise.reject({ success: false, error });
  }
});

ipcMain.handle('removeImage', async (event, { fileName, folderName }) => {
  try {
    await removeImage(basePath, folderName, fileName);
    await addOrRemoveExportStatement(basePath, fileName, 'images', { remove: true });
    return Promise.resolve({ success: true });
  } catch (error) {
    return Promise.reject({ success: false, error });
  }
});
