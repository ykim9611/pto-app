import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import HoursRecordRow from './HoursRecordRow';
import styles from './HoursPage.module.css';

function PtoHoursPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [ptoHours, setPtoHours] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPtoHoursRef = collection(db, 'users', userId, 'hours');
    const getPtoHours = async () => {
      const ptoHoursData = await getDocs(getPtoHoursRef);
      const ptoHoursArray = ptoHoursData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPtoHours(ptoHoursArray);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getPtoHours();
  }, [userId]);

  return (
    <div id={styles.hoursContainer}>
      <button
        id={styles.backButton}
        onClick={() => {
          navigate(`/user/${userId}`);
        }}
      >
        Back
      </button>

      <h2 id={styles.title}>PTO Hours</h2>
      {loading ? (
        <div id={styles.imageContainer}>
          <img
            id={styles.loadingTruck}
            src='/loadingTruck.gif'
            alt='loadingTruck'
          />
        </div>
      ) : (
        ptoHours.map((ptoHour) => (
          <HoursRecordRow key={ptoHour.id} hour={ptoHour} hourType='pto' />
        ))
      )}
    </div>
  );
}

export default PtoHoursPage;
