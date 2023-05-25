import { fileToBase64 } from '@cv-app/shared/shared-fnc';

export async function saveImageToPublic(file: File) {
  const base64 = await fileToBase64(file);
  return await window.electron.invoke('saveImage', { file: base64, fileName: file.name });
}
