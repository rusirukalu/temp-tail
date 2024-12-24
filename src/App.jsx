import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import Login from './pages/Login';

const LandingPage = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Suspense>
      <GoToTop />
      <Footer />
    </Router>
  );
}

export default App;