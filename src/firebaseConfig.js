import { initializeApp } from 'firebase/app'
import { getDatabase, ref as databaseRef, get } from 'firebase/database' // Ref de DB con alias
import { getStorage, ref as storageReference, getDownloadURL } from 'firebase/storage' // Ref de Storage con alias

const firebaseConfig = {
  apiKey: 'AIzaSyBVLIKCj05PqxgKOQ5gEtvnq_3mq1RLP6k',
  authDomain: 'portafolio-fa2fb.firebaseapp.com',
  databaseURL: 'https://portafolio-fa2fb-default-rtdb.firebaseio.com',
  projectId: 'portafolio-fa2fb',
  storageBucket: 'portafolio-fa2fb.appspot.com',
  messagingSenderId: '296981180422',
  appId: '1:296981180422:web:215d9c01486ca2b57b5387',
  measurementId: 'G-D3NFCSKRX1',
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)

// Exporta las referencias con nombres corregidos
export { app, database, databaseRef, get, storage, storageReference, getDownloadURL }
