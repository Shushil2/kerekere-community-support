
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RequestListingPage from './pages/RequestListingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/requests" element={<RequestListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;