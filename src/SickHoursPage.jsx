import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import HoursRecordRow from './HoursRecordRow';
import styles from './HoursPage.module.css';

function SickHoursPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [sickHours, setSickHours] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getSickHoursRef = collection(db, 'users', userId, 'hours');
    const sortedSickHoursSnapshot = query(
      getSickHoursRef,
      orderBy('accruedDate', 'desc')
    );
    const getSickHours = async () => {
      const sickHoursData = await getDocs(sortedSickHoursSnapshot);
      const sickHoursArray = sickHoursData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSickHours(sickHoursArray);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getSickHours();
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

      <h2 id={styles.title}>Sick Hours</h2>
      {loading ? (
        <div id={styles.imageContainer}>
          <img
            id={styles.loadingTruck}
            src='/loadingTruck.gif'
            alt='loadingTruck'
          />
        </div>
      ) : (
        sickHours.map((sickHour) => (
          <HoursRecordRow key={sickHour.id} hour={sickHour} hourType='sick' />
        ))
      )}
    </div>
  );
}

export default SickHoursPage;
