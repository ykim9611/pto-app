import React from 'react';
import { Timestamp } from 'firebase/firestore';
import styles from './HoursRecordRow.module.css';

function HoursRecordRow({ hour, hourType }) {
  console.log(hour);
  console.log(hourType);
  let convertedTimestamp = new Timestamp(
    hour.accruedDate.seconds,
    hour.accruedDate.nanoseconds
  );
  let date = convertedTimestamp.toDate().toLocaleDateString();

  return (
    <div className={styles.hoursRecordRow}>
      <div>Date: {date}</div>
      {hourType === 'pto' ? (
        <>
          <div>Accrued Hours: {hour.accruedPtoHours}</div>
          <div>Total Hours: {hour.totalAvailablePtoHours}</div>
        </>
      ) : (
        <>
          <div>Accrued Hours: {hour.accruedSickHours}</div>
          <div>Total Hours: {hour.totalAvailableSickHours}</div>
        </>
      )}
    </div>
  );
}

export default HoursRecordRow;
