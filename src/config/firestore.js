import { getFirestore } from '@firebase/firestore'
import firebaseDB from './firebase'

const firestoreDB = getFirestore(firebaseDB)
export default firestoreDB
