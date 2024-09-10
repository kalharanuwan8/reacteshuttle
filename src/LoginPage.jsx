import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
// import HomePage from './HomePage';  // Comment it out if HomePage doesn't exist yet

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
