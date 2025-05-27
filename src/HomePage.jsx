import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState({});
  //connection to the db
  useEffect(() => {
    const usersDocumentRef = doc(db, 'users', userId);
    const getUser = async () => {
      const userData = await getDoc(usersDocumentRef);
      setUser({ id: userId, ...userData.data() });
    };
    getUser();
  }, [userId]);

  return (
    <div>
      <div className={styles.mainContainer}>
        <h2>
          Global Expedited Transportation <br />
          Freight Crop.
        </h2>
        <h3>
          Welcome {user.firstName} {user.lastName} 👋
        </h3>
        <div id={styles.hoursButtonsContainer}>
          <button
            className={styles.hoursButton}
            onClick={() => navigate(`/user/${userId}/sick`)}
          >
            Sick Hours
          </button>
          <button
            className={styles.hoursButton}
            onClick={() => navigate(`/user/${userId}/pto`)}
          >
            PTO Hours
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
