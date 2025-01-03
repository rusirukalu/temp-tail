import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import WardrobeGrid from './pages/WardrobeGrid';
import Profile from './components/Profile';
import Logout from './components/Logout';
import SettingsComponent from './components/SettingsComponent';

const LandingPage = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          } />
          <Route path="/login" element={
            <MainLayout>
              <Login />
            </MainLayout>
            } />
          <Route path="/userdashboard" element={
              <UserDashboard />
          } />
          <Route path="/wardrobegrid" element={
            <MainLayout>
              <WardrobeGrid />
            </MainLayout>
          } />
          <Route path="/profile" element={
              <Profile />
          } />
          <Route path="/logout" element={
            <MainLayout>
              <Logout />
            </MainLayout>
          } />
          <Route path="/settingscomponent" element={
              <SettingsComponent />
          } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
