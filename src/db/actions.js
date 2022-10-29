import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  where,
  getDocs,
  query,
  onSnapshot,
} from 'firebase/firestore'

import { db } from '../config/firebase'

export const addWeather = async (payload) => {
  try {
    const q = query(
      collection(db, 'weatherRecords'),
      where('location.name', '==', payload.location.name),
    )
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      console.log("Mathcing document's id: ", querySnapshot.docs[0].id)
      // await updateDoc(doc(db, 'weatherRecords', querySnapshot.docs[0].id), {
      //   ...payload,
      // })
      console.log('use refresh instead')
    } else {
      const docRef = await addDoc(collection(db, 'weatherRecords'), {
        ...payload,
      })
      await updateDoc(doc(db, 'weatherRecords', docRef.id), {
        id: docRef.id,
      })
      console.log('Document written with ID: ', docRef.id)
    }
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const deleteWeather = async (id) => {
  try {
    await deleteDoc(doc(db, 'weatherRecords', id))
    console.log('Document successfully deleted!')
  } catch (e) {
    console.error('Error removing document: ', e)
  }
}
