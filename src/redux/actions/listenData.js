import { db } from '../../config/firebase'
import { updateData } from '../reducers/weatherSlice'
import { collection, query, onSnapshot } from 'firebase/firestore'

export const listenData = (dispatch) => {
  const q = query(collection(db, 'weatherRecords'))
  onSnapshot(q, (querySnapshot) => {
    const weather = []
    querySnapshot.forEach((doc) => {
      weather.push(doc.data())
    })
    dispatch(updateData(weather))
  })
}
