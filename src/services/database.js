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
  writeBatch,
} from 'firebase/firestore'

import firestoreDB from '../config/firestore'
// import { updateData } from '../features/weather/weatherSlice'

/* Just a constant that is used to reference the collection and the document id. */
const WEATHER_COLLECTION = 'weatherRecords'
const WEATHER_COLLECTION_LOG = 'weatherRecordsLog'
const DOCUMENT_ID = 'doc_id'
const CITY_NAME = 'location.name'

export const addWeather = async (payload) => {
  /**
   * It checks if a document exists in a collection, if it doesn't, it creates a new document in the
   * collection and then updates the document with a new field.
   * @param payload - {
   */
  try {
    const querySnapshot = await hasOnCollection(
      weatherRecordsRef,
      CITY_NAME,
      payload.location.name,
    )
    if (querySnapshot.empty) {
      const docRef = await addDoc(weatherRecordsRef, {
        ...payload,
      })
      await updateDoc(doc(firestoreDB, WEATHER_COLLECTION, docRef.id), {
        doc_id: docRef.id,
      })
      await addWeatherLog({ ...payload, doc_id: docRef.id })
    }
  } catch (e) {}
}

/**
 * It takes a payload, and adds it to a collection in Firestore.
 * @param payload
 */
export const addWeatherLog = async (payload) => {
  try {
    await addDoc(weatherRecordsLogRef, {
      ...payload,
    })
  } catch (e) {}
}

/**
 * Delete a weather record and if it exists, delete the corresponding weather record log.
 * @param id - the id of the document to be deleted
 */
export const deleteWeather = async (id) => {
  try {
    await deleteDoc(doc(firestoreDB, WEATHER_COLLECTION, id))

    const querySnapshot = await hasOnCollection(
      weatherRecordsLogRef,
      DOCUMENT_ID,
      id,
    )

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref)
      })
    }
  } catch (e) {}
}

export const deleteAllWeather = async () => {
  try {
    const querySnapshot = await getDocs(weatherRecordsRef)
    const querySnapshot2 = await getDocs(weatherRecordsLogRef)

    let batch = writeBatch(firestoreDB)
    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref)
    })
    querySnapshot2.forEach((doc) => {
      batch.delete(doc.ref)
    })
    await batch.commit()
  } catch (e) {
    console.log(e)
  }
}

/**
 * It updates a document in a collection in a database.
 * @param payload - {
 */
export const updateWeather = async (payload) => {
  // console.log(payload)
  try {
    await updateDoc(doc(firestoreDB, WEATHER_COLLECTION, payload.doc_id), {
      ...payload,
    })
    addWeatherLog({ ...payload, doc_id: payload.doc_id })
  } catch (e) {}
}

/* Creating a reference to the collection in the database. */
export const weatherRecordsRef = collection(firestoreDB, WEATHER_COLLECTION)
export const weatherRecordsLogRef = collection(
  firestoreDB,
  WEATHER_COLLECTION_LOG,
)

/**
 * It returns true if the collection has a document with the specified field and value
 * @param collection - The collection you want to query
 * @param field - the field you want to check
 * @param value - the value you want to check for
 * @returns A promise that resolves to a boolean.
 */

export const hasOnCollection = async (collection, field, value) => {
  const q = query(collection, where(field, '==', value))
  const querySnapshot = await getDocs(q)
  return querySnapshot
}

/**
 * Listen to the data in the collection and dispatch the action with the data as the payload.
 * @param dispatch - the dispatch function from the store
 * @param collection - the collection you want to listen to
 * @param action - The action to dispatch
 */
export const listenData = (dispatch, collection, action) => {
  onSnapshot(query(collection), (querySnapshot) => {
    const weather = []
    querySnapshot.forEach((doc) => {
      weather.push(doc.data())
    })
    dispatch(action(weather))
  })
}
