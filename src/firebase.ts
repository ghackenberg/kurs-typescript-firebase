import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Konfiguration des Firebase-Client-SDK
const firebaseConfig = {
    apiKey: 'AIzaSyA7UXljSYp_R2hIMOU8y95-ruermTJiv8k',
    authDomain: 'kurs-typescript-firebase-aa0a7.firebaseapp.com',
    projectId: 'kurs-typescript-firebase-aa0a7',
    storageBucket: 'kurs-typescript-firebase-aa0a7.firebasestorage.app',
    messagingSenderId: '684993575499',
    appId: '1:684993575499:web:305be4a79c053dcf6f2bce'
}

// Initialisierung des Firebase-Client-SDK
export const firebase = initializeApp(firebaseConfig)

// Initialisierung des Firestore-Client
export const firestore = getFirestore(firebase)