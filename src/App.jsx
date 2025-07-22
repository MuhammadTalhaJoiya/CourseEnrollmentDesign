import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardLayout from './components/DashboardLayout'
import AdminLayout from './admin/components/AdminLayout'
import ThemeDemo from './components/ThemeDemo'
import { useTheme } from './contexts/ThemeContext';

// Public pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import ForgotPassword from './pages/auth/ForgotPassword'
import EmailVerification from './pages/auth/EmailVerification'

// Dashboard pages
import Dashboard from './pages/dashboard/Dashboard'
import CoursePlayer from './pages/dashboard/CoursePlayer'
import Certificates from './pages/dashboard/Certificates'
import Settings from './pages/dashboard/Settings'

// Admin pages
import AdminDashboard from './admin/pages/Dashboard'
import AdminCourses from './admin/pages/Courses'
import AdminUsers from './admin/pages/Users'
import AdminOrders from './admin/pages/Orders'
import AdminCertificates from './admin/pages/Certificates'

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/theme-demo" element={<ThemeDemo />} />
      </Route>

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="course-player/:courseId" element={<CoursePlayer />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} /> {/* Add this line */}
        <Route path="courses" element={<AdminCourses />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="certificates" element={<AdminCertificates />} />
      </Route>
    </Routes>
  )
}

export default App