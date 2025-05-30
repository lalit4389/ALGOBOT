import { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  LayoutDashboard,
  LineChart,
  Settings,
  Bell,
  ChevronDown,
  LogOut,
  PieChart,
  BarChart3,
  Zap,
  Users,
  HelpCircle
} from 'lucide-react';

// Dashboard subpages (could be moved to separate files in a real app)
import Overview from './dashboard/Overview';
import Strategies from './dashboard/Strategies';
import Analytics from './dashboard/Analytics';
import DashboardSettings from './dashboard/Settings';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem('authToken');
    // Redirect to login
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-foreground border-r border-gray-800 fixed h-full z-30 hidden md:block">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold tracking-tight">ALGO<span className="text-primary">Trade</span></span>
          </Link>
        </div>
        
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {sidebarLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={`/dashboard${link.path}`}
                  className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === `/dashboard${link.path}` || 
                    (link.path === '' && location.pathname === '/dashboard')
                      ? 'bg-primary/20 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-primary/10'
                  }`}
                >
                  <link.icon className="h-5 w-5 mr-3" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 pt-6 border-t border-gray-800 px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-primary/10 transition-colors"
                  >
                    <link.icon className="h-5 w-5 mr-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-primary/10 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Log Out
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Top Bar */}
        <header className="h-16 bg-foreground border-b border-gray-800 flex items-center justify-between px-4 md:px-6 sticky top-0 z-20">
          {/* Mobile sidebar toggle */}
          <button className="md:hidden text-gray-400 hover:text-white p-2">
            <LayoutDashboard className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="text-gray-400 hover:text-white p-2 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full"></span>
            </button>
            
            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm text-gray-300 rounded-full focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-medium">
                  JD
                </div>
                <span className="ml-2 hidden md:block">John Doe</span>
                <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
              </button>
              
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-foreground border border-gray-700 focus:outline-none">
                  <div className="py-1">
                    <Link
                      to="/dashboard/settings"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary/10"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        handleLogout();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-primary/10"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-4 md:p-6">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<DashboardSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

// Sidebar links data
const sidebarLinks = [
  { path: '', label: 'Overview', icon: LayoutDashboard },
  { path: '/strategies', label: 'Strategies', icon: LineChart },
  { path: '/analytics', label: 'Analytics', icon: PieChart },
  { path: '/settings', label: 'Settings', icon: Settings }
];

const resourceLinks = [
  { path: '#', label: 'Documentation', icon: HelpCircle },
  { path: '#', label: 'Community', icon: Users }
];

export default Dashboard;