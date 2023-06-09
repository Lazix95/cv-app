// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, CollectionReference, DocumentReference, setDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { EntityKeys } from './constants/entitiesAndFoldersNames';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDEh6oBqcdHQ-LB5fLKpHvvhO8M6P-GFxY',
  authDomain: 'cv-app-28733.firebaseapp.com',
  projectId: 'cv-app-28733',
  storageBucket: 'cv-app-28733.appspot.com',
  messagingSenderId: '270691133858',
  appId: '1:270691133858:web:18eb81dbd28763fb62aafb',
  measurementId: 'G-QRQ098R6BQ',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);

export async function storeImage({ image, name, folder }: { image: File; name: string; folder: 'other' | 'basicInfo' }) {
  const imageRef = storageRef(firebaseStorage, `images/${folder}/${name}`);
  const uploadedImage = await uploadBytes(imageRef, image);
  return await getDownloadURL(uploadedImage.ref);
}

export async function getImageLink({ folder, name }: { name: string; folder: 'other' | 'basicInfo' }) {
  const imageRef = storageRef(firebaseStorage, `images/${folder}/${name}`);
  return await getDownloadURL(imageRef);
}

type GenericPayload = {
  [key in EntityKeys]?: DocumentReference[];
} & {
  [key: string]: unknown;
};

export async function storeEntity<T extends GenericPayload>({ entity, payload }: { entity: EntityKeys; payload: T }) {
  const entityCollection = collection(firebaseDB, entity) as CollectionReference<T>;
  const entityRef = await addDoc(entityCollection, payload);
  const docRef = doc(firebaseDB, entity, entityRef.id);
  const res = await getDoc(docRef);
  return res;
}

export async function getEntities<T = unknown>(entity: EntityKeys): Promise<T[]> {
  let results: T[] = [];
  const query = await getDocs(collection(firebaseDB, entity));
  query.forEach((entity) => (results = [...results, entity.data() as T]));
  return results;
}

export async function getEntityById<T = unknown>(entity: EntityKeys, id: string): Promise<T> {
  const docRef = doc(firebaseDB, entity, `${id}`);
  const docSnap = await getDoc(docRef);
  return docSnap.data() as T;
}

export async function deleteEntity(entity: EntityKeys, id: string): Promise<void> {
  const docRef = doc(firebaseDB, entity, `${id}`);
  await deleteDoc(docRef);
}

export async function storeDocument<T = object>(folder: string, docName: string, payload: Partial<T>): Promise<T> {
  const docRef = doc(firebaseDB, folder, docName);
  await setDoc(docRef, payload, { merge: true });
  const docSnap = await getDoc(docRef);
  return docSnap.data() as T;
}

export async function replaceDocument<T = object>(folder: string, docName: string, payload: Partial<T>): Promise<T> {
  const docRef = doc(firebaseDB, folder, docName);
  await setDoc(docRef, payload, { merge: true });
  const docSnap = await getDoc(docRef);
  return docSnap.data() as T;
}

export async function getDocument<T = object>(folder: string, docName: string): Promise<T> {
  const docRef = doc(firebaseDB, folder, docName);
  const docSnap = await getDoc(docRef);
  return docSnap.data() as T;
}
