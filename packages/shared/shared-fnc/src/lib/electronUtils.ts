// eslint-disable-next-line @nx/enforce-module-boundaries
import { Content } from '@cv-app/shared/content';
import { fileToBase64 } from './SharedHelpers';

declare global {
  interface Window {
    electron: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      invoke: (str: string, command: any) => Promise<ElectronImageFunctionResponse | ElectronJsonFunctionResponse>;
    };
  }
}

export async function removeImage(folderName: StorageNames, fileName: string): Promise<ElectronRemoveImageFunctionResponse> {
  return (await window.electron.invoke('removeImage', { fileName, folderName })) as ElectronRemoveImageFunctionResponse;
}

export async function saveImage(file: File, folderName: StorageNames): Promise<ElectronImageFunctionResponse> {
  const base64 = await fileToBase64(file);
  return (await window.electron.invoke('saveImage', { file: base64, fileName: file.name, folderName })) as ElectronImageFunctionResponse;
}

export async function updateImage(file: File, folderName: StorageNames): Promise<ElectronImageFunctionResponse> {
  const base64 = await fileToBase64(file);
  return (await window.electron.invoke('updateImage', { file: base64, fileName: file.name, folderName })) as ElectronImageFunctionResponse;
}

export async function saveJsonData(fileName: StorageNames, payload: Record<string, unknown>): Promise<ElectronJsonFunctionResponse> {
  return await window.electron.invoke('saveJson', { payload, fileName: fileName });
}

export async function saveOrUpdateContent(
  folderName: StorageNames,
  { image, json }: SaveOrUpdatePayload,
  { update }: SaveOrUpdateOptions = {}
): SaveOrUpdateContentResponse {
  let savedImage: ElectronImageFunctionResponse | undefined;
  let savedJson;

  try {
    if (image) savedImage = update ? await updateImage(image, folderName) : await saveImage(image, folderName);
    if (json) savedJson = await saveJsonData(folderName, json);

    return {
      image: savedImage,
      json: savedJson,
    };
  } catch (err) {
    if (savedImage) await removeImage(folderName, savedImage?.data?.name);
    throw err;
  }
}

export async function getAsyncContent(): Promise<Content> {
  const module: Record<string, unknown> = (await import('@cv-app/shared/content')).default;
  const payload = Object.keys(module).reduce<Record<string, unknown>>((acc, key) => {
    acc[key] = module[key];
    return acc;
  }, {});
  return payload as Content;
}

export type JsonPayload = Record<string, string | number | boolean>;

export type StorageNames = 'landingPage';

export interface ElectronImageFunctionResponse {
  success: true;
  data: { path: string; name: string };
}

export interface ElectronRemoveImageFunctionResponse {
  success: true;
}

export interface ElectronJsonFunctionResponse<T = unknown> {
  success: true;
  data: Record<string, T>;
}

export interface SaveOrUpdateOptions {
  update?: boolean;
}

export interface SaveOrUpdatePayload {
  image?: File;
  json?: JsonPayload;
}

export type SaveOrUpdateContentResponse = Promise<{
  image: ElectronImageFunctionResponse | undefined;
  json: ElectronJsonFunctionResponse | undefined;
}>;
