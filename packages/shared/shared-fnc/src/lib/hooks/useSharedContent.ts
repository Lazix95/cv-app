// import { useEffect, useState } from 'react';
// import { getAsyncContent, StorageNames, saveOrUpdateContent } from '../electronUtils';
// // eslint-disable-next-line @nx/enforce-module-boundaries
// import { Content } from '@cv-app/shared/content';

// export function useSharedContent() {
//   const [content, setContent] = useState<Content | null>(null);

//   async function refreshContent() {
//     const newContent = await getAsyncContent();
//     setContent(newContent);
//   }

//   useEffect(() => {
//     refreshContent();
//   }, []);

//   async function saveContent(
//     storageName: StorageNames,
//     payload: SaveContentPayload,
//     { update }: SaveContentOptions = {}
//   ): Promise<{ ok: boolean }> {
//     const { image, ...restOfData } = payload;

//     await saveOrUpdateContent(storageName, { image, json: restOfData as Record<string, string | boolean | number> }, { update });
//     await refreshContent();

//     return { ok: true };
//   }

//   return { content, saveContent };
// }

export interface SaveContentPayload extends Record<string, string | number | boolean | File> {
  image: File;
}

export interface SaveContentOptions {
  update?: boolean;
}
