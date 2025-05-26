import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { doc, getDoc } from 'firebase/firestore';

function HomePage() {
  const navigate = useNavigate();
  const {userId} = useParams();
  const [user, setUser] = useState({});
  //connection to the db
  useEffect(() => {
    const usersDocumentRef = doc(db, 'users', userId);
    const getUser = async () => {
      const userData = await getDoc(usersDocumentRef);
      setUser({ id: userId, ...userData.data()});
    };
    getUser();
  }, [userId]);

  return (
    <div className='home-page'>
      <div className='main-container'>
        <div>Global Expedited Transportation Freight Crop.</div>
        <div>Welcome {user.firstName} {user.lastName} 👋</div>
        <div>
          <button onClick={() => navigate(`/user/${userId}/sick`)}>Sick Hours</button>
          <button onClick={() => navigate(`/user/${userId}/pto`)}>PTO Hours</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage