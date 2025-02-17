import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { Footer }from './components/Footer';
import {Home} from './pages/Home';
import { Features } from "./pages/Features.jsx";
import Dashboard from './pages/Dashboard';
import {SignIn} from './pages/SignIn';
import Signup from './pages/signup';
import {VideoConsultation} from './pages/VideoConsult';
import FindDoctors from './pages/FindDoctors';  // ✅ Correct Import
import LabTests from './pages/LabTests';
import HealthRecords from './pages/healthrecords';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/video-consultation" element={<VideoConsultation />} />
                  <Route path="/book-appointment" element={<FindDoctors />} />  {/* ✅ Fixed Route */}
                  <Route path="/lab-tests" element={<LabTests />} />
                  <Route path="/health-records" element={<HealthRecords />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
