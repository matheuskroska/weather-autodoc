import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCxiOz3mjAoZb2BV1aa7BLGHKvjH75sOlw',
  authDomain: 'autodoc-weather-238e2.firebaseapp.com',
  databaseURL: 'https://autodoc-weather-238e2-default-rtdb.firebaseio.com',
  projectId: 'autodoc-weather-238e2',
  storageBucket: 'autodoc-weather-238e2.appspot.com',
  messagingSenderId: '721547035671',
  appId: '1:721547035671:web:8a283edbfa16bbd00cc852',
  measurementId: 'G-E24YTQL34K',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
