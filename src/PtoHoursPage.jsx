import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import './PtoHoursPage.css'

function PtoHoursPage() {
  const {userId} = useParams();
  const navigate = useNavigate();
  const [ptoHours, setPtoHours] = useState([]);
  useEffect(()=> {
    const getPtoHoursRef = collection(db, 'users', userId, 'ptoHours');
    const getPtoHours = async ()=> {
      const ptoHoursData = await getDocs(getPtoHoursRef);
      const ptoHoursArray = ptoHoursData.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(ptoHoursArray)
      setPtoHours(ptoHoursArray);
    }
    getPtoHours();
  }, [userId])

  return (
    <div>
      <button onClick={() => {navigate(`/user/${userId}`)}}>Back</button>
      <div>PtoPage</div>
      {ptoHours.map(ptoHour => {
        let convertedTimestamp = new Timestamp(ptoHour.date.seconds, ptoHour.date.nanoseconds);
        let date = convertedTimestamp.toDate().toLocaleDateString();
        return (
          <div className="pto-row" key={ptoHour.id}>
            <div>Date: {date}</div>
            <div>Accrued Hours: {ptoHour.accruedHours}</div>
            <div>Total Hours: {ptoHour.totalHours}</div>
          </div>
        )
      })}
    </div>
  )
}

export default PtoHoursPage