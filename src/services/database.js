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

import firestoreDB from '../config/firestore'
import { updateData } from '../features/weather/weatherSlice'

export const addWeather = async (payload) => {
  try {
    const q = query(
      collection(firestoreDB, 'weatherRecords'),
      where('location.name', '==', payload.location.name),
    )
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      console.log("Matching document's id: ", querySnapshot.docs[0].id)
      console.log('use refresh instead')
    } else {
      const docRef = await addDoc(collection(firestoreDB, 'weatherRecords'), {
        location: {
          name: payload.location.name,
          id: payload.location.id,
        },
        current: {
          temp_c: payload.current.temp_c,
        },
        // ...payload,
      })
      await updateDoc(doc(firestoreDB, 'weatherRecords', docRef.id), {
        doc_id: docRef.id,
      })
      console.log('Document written with ID: ', docRef.id)
    }
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const addWeatherLog = async (payload) => {
  try {
    await addDoc(collection(firestoreDB, 'weatherRecordsLog'), {
      location: {
        name: payload.location.name,
        id: payload.location.id,
      },
      current: {
        temp_c: payload.current.temp_c,
      },
      doc_id: payload.doc_id,
      // ...payload,
    })
    console.log('Log Document written')
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const deleteWeather = async (id) => {
  try {
    await deleteDoc(doc(firestoreDB, 'weatherRecords', id))
    console.log('Document successfully deleted!')
    const q = query(
      collection(firestoreDB, 'weatherRecordsLog'),
      where('doc_id', '==', id),
    )
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref)
      })
    }

    console.log('Log Document successfully deleted!')
  } catch (e) {
    console.error('Error removing document: ', e)
  }
}

export const updateWeather = async (payload) => {
  try {
    await updateDoc(doc(firestoreDB, 'weatherRecords', payload.doc_id), {
      location: {
        name: payload.location.name,
        id: payload.location.id,
      },
      current: {
        temp_c: payload.current.temp_c,
      },
      doc_id: payload.doc_id,
      // ...payload,
    })
    console.log('Document successfully updated!')
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

export const listenData = (dispatch) => {
  const q = query(collection(firestoreDB, 'weatherRecords'))
  onSnapshot(q, (querySnapshot) => {
    const weather = []
    querySnapshot.forEach((doc) => {
      weather.push(doc.data())
    })
    dispatch(updateData(weather))
  })
}
