export const imageFolders = {
  others: 'others',
  basicInfo: 'basicInfo',
} as const;

type ImageFoldersKeys = keyof typeof imageFolders;

export type ImageFoldres = (typeof imageFolders)[ImageFoldersKeys];

export const entities = {
  users: 'users',
  projects: 'projects',
  partners: 'partners',
} as const;

type EntitiesKeys = keyof typeof entities;

export type EntityKeys = (typeof entities)[EntitiesKeys];
