import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from './components/MainLayout';
import Loader from './components/Loader';
import DashboardLayout from './components/admin/DashboardLayout';
import PrivateRoute from './pages/admin/PrivateRoute';
import Movetop from './components/Movetop';

const Register = lazy(() => import('./pages/admin/Register'));
const Login = lazy(() => import('./pages/admin/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const SmartEpp = lazy(() => import('./pages/EPP'));
const HRMS = lazy(() => import('./pages/HRMS'));
const ITMS = lazy(() => import('./pages/ITMS'));
const ITAM = lazy(() => import('./pages/ITAM'));

const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Question = lazy(() => import('./pages/Question'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-out', once: false });
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Toaster position="top-right" />
        <Routes>
          <Route index element={<Home />} />

          {/* Public Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />

          {/* Protected Admin Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
          </Route>

          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/smart-epp" element={<SmartEpp />} />
            <Route path="/hrms" element={<HRMS />} />
            <Route path="/itms" element={<ITMS />} />
            <Route path="/itam" element={<ITAM />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/have-any-question" element={<Question />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Route>
        </Routes>
        <Movetop />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
