import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // A component to display user info
import PtoHoursPage from './PtoHoursPage';
import SickHoursPage from './SickHoursPage';

function App() {
  return (
    <Routes>
      <Route path='/user/:userId' element={<HomePage />} />
      <Route path='/user/:userId/pto' element={<PtoHoursPage />} />
      <Route path='/user/:userId/sick' element={<SickHoursPage />} />
    </Routes>
  );
}

export default App;
