import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle, Lock, User, Mail, CreditCard, BellRing, Eye, EyeOff } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tabs navigation */}
          <div className="md:col-span-1">
            <div className="card">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md text-sm font-medium ${
                      activeTab === tab.id
                        ? 'bg-primary/20 text-primary'
                        : 'text-gray-300 hover:bg-foreground/80 hover:text-white'
                    }`}
                  >
                    <tab.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Tab content */}
          <div className="md:col-span-3">
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'security' && <SecuritySettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'billing' && <BillingSettings />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Profile Settings Component
const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    timezone: 'Eastern Time (UTC-05:00)'
  });
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful update
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };
  
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
      
      {isSuccess && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-md flex items-center gap-2 mb-6">
          <Check size={18} />
          <span>Your profile information has been updated successfully!</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>India</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-300 mb-1">
                Timezone
              </label>
              <select
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              >
                <option>Eastern Time (UTC-05:00)</option>
                <option>Central Time (UTC-06:00)</option>
                <option>Mountain Time (UTC-07:00)</option>
                <option>Pacific Time (UTC-08:00)</option>
                <option>GMT (UTC+00:00)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

// Security Settings Component
const SecuritySettings = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful update
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };
  
  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>
        
        {isSuccess && (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-md flex items-center gap-2 mb-6">
            <Check size={18} />
            <span>Your password has been updated successfully!</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Current Password
              </label>
              <div className="relative">
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showCurrentPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-400">
                Password must be at least 8 characters and include a number and special character
              </p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <button type="submit" className="btn btn-primary">
              Update Password
            </button>
          </div>
        </form>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Two-Factor Authentication</h2>
        <p className="text-gray-400 mb-6">
          Add an extra layer of security to your account by enabling two-factor authentication.
        </p>
        
        <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/30">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/20">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
              <p className="text-xs text-gray-400 mt-1">Not enabled</p>
            </div>
          </div>
          <button className="btn btn-primary text-sm">
            Enable
          </button>
        </div>
      </div>
    </div>
  );
};

// Notification Settings Component
const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailTrades: true,
    emailAlerts: true,
    emailNews: false,
    pushTrades: true,
    pushAlerts: true,
    pushNews: true
  });
  
  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
      <p className="text-gray-400 mb-6">
        Manage how and when you receive notifications from ALGOTrade.
      </p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
          <div className="space-y-4">
            <NotificationToggle
              id="emailTrades"
              label="Trade Executions"
              description="Receive emails when your strategies execute trades"
              isEnabled={notifications.emailTrades}
              onToggle={() => handleToggle('emailTrades')}
            />
            <NotificationToggle
              id="emailAlerts"
              label="System Alerts"
              description="Important alerts about your account and strategies"
              isEnabled={notifications.emailAlerts}
              onToggle={() => handleToggle('emailAlerts')}
            />
            <NotificationToggle
              id="emailNews"
              label="News & Updates"
              description="Platform updates, new features, and trading tips"
              isEnabled={notifications.emailNews}
              onToggle={() => handleToggle('emailNews')}
            />
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800">
          <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
          <div className="space-y-4">
            <NotificationToggle
              id="pushTrades"
              label="Trade Executions"
              description="Real-time notifications when trades are executed"
              isEnabled={notifications.pushTrades}
              onToggle={() => handleToggle('pushTrades')}
            />
            <NotificationToggle
              id="pushAlerts"
              label="System Alerts"
              description="Critical alerts requiring immediate attention"
              isEnabled={notifications.pushAlerts}
              onToggle={() => handleToggle('pushAlerts')}
            />
            <NotificationToggle
              id="pushNews"
              label="News & Updates"
              description="Platform updates and announcements"
              isEnabled={notifications.pushNews}
              onToggle={() => handleToggle('pushNews')}
            />
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800">
          <button className="btn btn-primary">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

// Notification Toggle Component
interface NotificationToggleProps {
  id: string;
  label: string;
  description: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const NotificationToggle = ({ id, label, description, isEnabled, onToggle }: NotificationToggleProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>
      <button
        id={id}
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          isEnabled ? 'bg-primary' : 'bg-gray-700'
        }`}
      >
        <span className="sr-only">Toggle {label}</span>
        <span
          className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
            isEnabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};

// Billing Settings Component
const BillingSettings = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Current Plan</h2>
        
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Professional Plan</h3>
              <p className="text-sm text-gray-400 mt-1">
                $49.99 / month • Renews on August 15, 2023
              </p>
            </div>
            <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
              Active
            </span>
          </div>
          <div className="mt-4 pt-4 border-t border-primary/20">
            <h4 className="text-sm font-medium mb-2">Plan Features:</h4>
            <ul className="space-y-1">
              <li className="text-sm text-gray-300 flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                Unlimited strategies
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                Multiple broker connections
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                Advanced analytics
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                Priority support
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-outline flex-1">
            Upgrade Plan
          </button>
          <button className="btn btn-outline flex-1 text-red-500 border-red-500/30 hover:bg-red-500/10">
            Cancel Subscription
          </button>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
        
        <div className="flex items-center p-4 bg-background rounded-lg border border-gray-700 mb-6">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-700">
            <CreditCard className="h-5 w-5 text-white" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium">Visa ending in 4242</h3>
            <p className="text-xs text-gray-400 mt-1">Expires 12/2025</p>
          </div>
          <div className="ml-auto">
            <button className="text-primary text-sm hover:text-primary/80">
              Edit
            </button>
          </div>
        </div>
        
        <button className="btn btn-outline">
          Add Payment Method
        </button>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Billing History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-left">
              <tr className="border-b border-gray-800">
                <th className="pb-3 font-medium text-gray-400 text-sm">Date</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Amount</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Status</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3">{item.date}</td>
                  <td className="py-3">{item.amount}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === 'Paid' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-primary text-sm hover:text-primary/80">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Tabs data
const tabs = [
  { id: 'profile', name: 'Profile', icon: User },
  { id: 'security', name: 'Security', icon: Lock },
  { id: 'notifications', name: 'Notifications', icon: BellRing },
  { id: 'billing', name: 'Billing & Plans', icon: CreditCard }
];

// Billing history data
const billingHistory = [
  {
    date: 'Jul 15, 2023',
    amount: '$49.99',
    status: 'Paid',
    invoice: '#INV-1234'
  },
  {
    date: 'Jun 15, 2023',
    amount: '$49.99',
    status: 'Paid',
    invoice: '#INV-1233'
  },
  {
    date: 'May 15, 2023',
    amount: '$49.99',
    status: 'Paid',
    invoice: '#INV-1232'
  },
  {
    date: 'Apr 15, 2023',
    amount: '$49.99',
    status: 'Paid',
    invoice: '#INV-1231'
  }
];

export default Settings;