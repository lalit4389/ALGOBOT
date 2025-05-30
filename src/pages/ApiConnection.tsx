import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, AlertCircle, Check, Info } from 'lucide-react';

import BrokerLogos from '../components/BrokerLogos';

const ApiConnection = () => {
  const [activeTab, setActiveTab] = useState('tradingview');
  const [formData, setFormData] = useState({
    apiKey: '',
    secretKey: '',
    broker: 'zerodha'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);
    setIsLoading(true);
    
    // Simulate API connection
    setTimeout(() => {
      if (formData.apiKey && formData.secretKey) {
        setIsSuccess(true);
      } else {
        setError('Please enter both API Key and Secret Key');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            API <span className="text-primary">Connection</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            Connect your trading accounts to our platform for automated algorithmic trading. We support various brokers and TradingView integration.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="flex -mb-px space-x-8">
              <button
                onClick={() => setActiveTab('tradingview')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'tradingview'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                TradingView
              </button>
              <button
                onClick={() => setActiveTab('direct')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'direct'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Direct Broker Connection
              </button>
            </nav>
          </div>
        </div>
        
        {/* TradingView Connection */}
        {activeTab === 'tradingview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Connect with TradingView</h2>
              <p className="text-gray-400 mb-4">
                Link your TradingView account to execute strategies automatically through our platform.
              </p>
              
              <ol className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary font-medium text-sm">
                    1
                  </div>
                  <p className="text-gray-300">
                    Create a webhook in your TradingView strategy alerts
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary font-medium text-sm">
                    2
                  </div>
                  <p className="text-gray-300">
                    Use the webhook URL from your ALGOTrade dashboard
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary font-medium text-sm">
                    3
                  </div>
                  <p className="text-gray-300">
                    Configure the payload format according to our documentation
                  </p>
                </li>
              </ol>
              
              <div className="bg-background p-4 rounded-md mb-6">
                <div className="flex items-start mb-2">
                  <Info size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    Your webhook URL (available after registration):
                  </span>
                </div>
                <code className="block bg-foreground/50 p-2 rounded text-sm text-gray-300 font-mono overflow-x-auto">
                  https://api.algotrade.com/webhook/tv/YOUR_USER_ID
                </code>
              </div>
              
              <a
                href="https://www.tradingview.com/chart/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                <span>Open TradingView</span>
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Documentation & Tutorials</h2>
              <p className="text-gray-400 mb-6">
                Learn how to set up and use TradingView webhooks with our platform.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="block p-4 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors duration-200"
                >
                  <h3 className="font-medium mb-1">Creating Pine Script Alerts</h3>
                  <p className="text-sm text-gray-400">Learn how to create strategy alerts in Pine Script</p>
                </a>
                
                <a 
                  href="#" 
                  className="block p-4 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors duration-200"
                >
                  <h3 className="font-medium mb-1">Webhook Setup Guide</h3>
                  <p className="text-sm text-gray-400">Step-by-step guide to configure webhooks correctly</p>
                </a>
                
                <a 
                  href="#" 
                  className="block p-4 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors duration-200"
                >
                  <h3 className="font-medium mb-1">Payload Format Reference</h3>
                  <p className="text-sm text-gray-400">Reference for the required JSON payload structure</p>
                </a>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Direct Broker Connection */}
        {activeTab === 'direct' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Connect Your Broker</h2>
              <p className="text-gray-400 mb-6">
                Securely connect your broker account using API keys to enable automated trading.
              </p>
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-md flex items-center gap-2 mb-6">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}
              
              {isSuccess && (
                <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-md flex items-center gap-2 mb-6">
                  <Check size={18} />
                  <span>Connection successful! Your broker account is now linked.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="broker" className="block text-sm font-medium text-gray-300 mb-1">
                    Select Broker
                  </label>
                  <select
                    id="broker"
                    name="broker"
                    value={formData.broker}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  >
                    <option value="zerodha">Zerodha</option>
                    <option value="upstox">Upstox</option>
                    <option value="angelone">Angel One</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-1">
                    API Key
                  </label>
                  <input
                    id="apiKey"
                    name="apiKey"
                    type="text"
                    required
                    value={formData.apiKey}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Enter your API key"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="secretKey" className="block text-sm font-medium text-gray-300 mb-1">
                    Secret Key
                  </label>
                  <input
                    id="secretKey"
                    name="secretKey"
                    type="password"
                    required
                    value={formData.secretKey}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Enter your secret key"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full btn btn-primary ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Connecting...' : 'Connect Broker'}
                </button>
              </form>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">How to Get API Keys</h2>
              <p className="text-gray-400 mb-6">
                Follow these steps to generate API keys from your broker's platform.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <img 
                      src="https://zerodha.com/static/images/logo.svg" 
                      alt="Zerodha" 
                      className="h-5 mr-2"
                    />
                    Zerodha
                  </h3>
                  <ol className="space-y-2 text-sm text-gray-300">
                    <li>1. Log in to your Zerodha Kite account</li>
                    <li>2. Go to Settings → API keys</li>
                    <li>3. Generate a new API key and note the API key and secret</li>
                    <li>4. Set appropriate permissions for algorithmic trading</li>
                  </ol>
                  <a 
                    href="https://kite.zerodha.com/settings/api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm mt-2 inline-block"
                  >
                    Visit Zerodha API Settings →
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <img 
                      src="https://storage.googleapis.com/ares-banner-images/upstox.svg" 
                      alt="Upstox" 
                      className="h-5 mr-2"
                    />
                    Upstox
                  </h3>
                  <ol className="space-y-2 text-sm text-gray-300">
                    <li>1. Log in to your Upstox Developer account</li>
                    <li>2. Navigate to Apps → Create a new app</li>
                    <li>3. Fill in the required details and create the app</li>
                    <li>4. Retrieve your API key and secret from the app dashboard</li>
                  </ol>
                  <a 
                    href="https://developer.upstox.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm mt-2 inline-block"
                  >
                    Visit Upstox Developer Portal →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Supported Brokers */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Supported Brokers</h2>
          <BrokerLogos />
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Need help connecting your trading account?
          </p>
          <Link to="/contact" className="btn btn-outline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApiConnection;