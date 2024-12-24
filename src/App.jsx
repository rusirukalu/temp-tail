import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

const LandingPage = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </Suspense>
      <GoToTop />
      <Footer />
    </Router>
  );
}

export default App;