import React from 'react';
import { Timestamp } from 'firebase/firestore';
import styles from './HoursRecordRow.module.css';

function HoursRecordRow({ hour }) {
  console.log(hour);
  let convertedTimestamp = new Timestamp(
    hour.date.seconds,
    hour.date.nanoseconds
  );
  let date = convertedTimestamp.toDate().toLocaleDateString();
  return (
    <div className={styles.hoursRecordRow}>
      <div>Date: {date}</div>
      <div>Accrued Hours: {hour.accruedHours}</div>
      <div>Total Hours: {hour.totalHours}</div>
    </div>
  );
}

export default HoursRecordRow;
