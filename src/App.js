import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // A component to display user info
import PtoHoursPage from './PtoHoursPage';
import SickHoursPage from './SickHoursPage';
import AddHoursPage from './AddHoursPage';

function App() {
  return (
    <Routes>
      <Route path='/user/:userId' element={<HomePage />} />
      <Route path='/user/:userId/pto' element={<PtoHoursPage />} />
      <Route path='/user/:userId/sick' element={<SickHoursPage />} />
      <Route path='/user/:userId/addHours' element={<AddHoursPage />} />
    </Routes>
  );
}

export default App;
