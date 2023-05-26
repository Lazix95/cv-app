import { fileToBase64 } from '@cv-app/shared/shared-fnc';

export async function saveImageToPublic(file: File) {
  const base64 = await fileToBase64(file);
  return await window.electron.invoke('saveImage', { file: base64, fileName: file.name });
}

type FileNames = 'landingPage.json';

export async function saveJsonData(fileName: FileNames, payload: Record<string, unknown>) {
  return await window.electron.invoke('saveJson', { payload, fileName: fileName });
}
