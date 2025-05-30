import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import ApiConnection from './pages/ApiConnection';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DataLines from './components/DataLines';

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check if user is on dashboard or other protected routes
  const isProtectedRoute = location.pathname.startsWith('/dashboard');
  
  // Simulate authentication check (replace with actual auth logic)
  useEffect(() => {
    const checkAuth = () => {
      // This would normally check a token in localStorage or similar
      const fakeAuthToken = localStorage.getItem('authToken');
      setIsAuthenticated(!!fakeAuthToken);
    };
    
    checkAuth();
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <DataLines />
      
      {/* Navbar - Not shown on protected routes as Dashboard has its own */}
      {!isProtectedRoute && <Navbar />}
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route 
              path="/dashboard/*" 
              element={
                isAuthenticated ? 
                <Dashboard /> : 
                <Login setIsAuthenticated={setIsAuthenticated} />
              } 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api-connection" element={<ApiConnection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      {/* Footer - Not shown on protected routes as Dashboard has its own */}
      {!isProtectedRoute && <Footer />}
    </div>
  );
}

export default App;