// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBw4VrCMUvNDNLiv0_Pph89u2jijm3gluA',
  authDomain: 'fuse-website-3ce69.firebaseapp.com',
  databaseURL: 'https://fuse-website-3ce69-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fuse-website-3ce69',
  storageBucket: 'fuse-website-3ce69.appspot.com',
  messagingSenderId: '408482382592',
  appId: '1:408482382592:web:7fa81951438caef22c29e5',
  measurementId: 'G-Y7FVN1L41T'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
// const db = getFirestore(app)
const database = getDatabase(app)

export { database }

export default app
