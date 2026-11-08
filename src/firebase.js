import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração pública do aplicativo Web SinopMix.
// Não coloque credenciais privadas ou service accounts neste arquivo.
const firebaseConfig = {
  apiKey: "AIzaSyDHZwgcreSKv3PKX0gSwIrw2MiRTCFxV_U",
  authDomain: "sinopmix.firebaseapp.com",
  projectId: "sinopmix",
  storageBucket: "sinopmix.firebasestorage.app",
  messagingSenderId: "910376976621",
  appId: "1:910376976621:web:6830c8938c7fff3a76cce4",
};

export const isFirebaseConfigured = true;

export const firebaseApp = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
