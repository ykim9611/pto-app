import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function SickHoursPage() {
  const {userId} = useParams();
  const navigate = useNavigate();
  console.log(userId);
  return (
    <div>
      <button onClick={() => {navigate(`/user/${userId}`)}}>Back</button>
      <div>SickHoursPage</div>
    </div>
  )
}

export default SickHoursPage