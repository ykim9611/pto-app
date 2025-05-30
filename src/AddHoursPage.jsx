import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';

function AddHoursPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState({});
  return <div>AddHoursPage</div>;
}

export default AddHoursPage;
