const {exec} = require("child_process");
const { ipcMain } = require('electron');

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
