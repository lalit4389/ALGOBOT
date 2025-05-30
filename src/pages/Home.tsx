import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, LineChart, BrainCircuit, Zap } from 'lucide-react';

import AnimatedEye from '../components/AnimatedEye';
import BrokerLogos from '../components/BrokerLogos';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] hero-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advanced <span className="text-primary">Algorithmic</span> Trading Platform
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Connect your favorite brokers, deploy advanced trading algorithms, and automate your trading strategies through our powerful TradingView integration.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/api-connection" className="btn btn-outline">
                Connect API
              </Link>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center bg-foreground/50 text-xs rounded-full px-3 py-1 text-gray-300">
                <BarChart3 className="w-3 h-3 mr-1 text-primary" />
                Real-time Analytics
              </div>
              <div className="flex items-center bg-foreground/50 text-xs rounded-full px-3 py-1 text-gray-300">
                <LineChart className="w-3 h-3 mr-1 text-primary" />
                Multi-broker Support
              </div>
              <div className="flex items-center bg-foreground/50 text-xs rounded-full px-3 py-1 text-gray-300">
                <BrainCircuit className="w-3 h-3 mr-1 text-primary" />
                AI-powered Signals
              </div>
            </div>
          </motion.div>
          
          {/* Animated Eye Visualization */}
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedEye />
          </motion.div>
        </div>
      </section>
      
      {/* Broker Logos */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrokerLogos />
        </div>
      </section>
      
      {/* Features */}
      <section className="bg-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Powerful Trading <span className="text-primary">Features</span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our platform brings together everything you need for successful algorithmic trading
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="card glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/20 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your <span className="text-primary">Trading?</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of traders who have already automated their strategies and improved their results with our platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/register" className="btn btn-primary">
              Create Free Account
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Features data
const features = [
  {
    icon: TrendingUp,
    title: 'TradingView Integration',
    description: 'Seamlessly connect your TradingView strategies to execute trades automatically across multiple brokers.'
  },
  {
    icon: BarChart3,
    title: 'Multi-broker Support',
    description: 'Connect to popular brokers like Zerodha, Upstox, and more with our unified API system.'
  },
  {
    icon: LineChart,
    title: 'Backtest Strategies',
    description: 'Test your algorithms against historical data to validate performance before deploying live.'
  },
  {
    icon: Zap,
    title: 'Real-time Execution',
    description: 'Execute trades with millisecond precision based on your predefined algorithms and market conditions.'
  },
  {
    icon: BrainCircuit,
    title: 'AI-powered Analysis',
    description: 'Leverage machine learning to optimize your trading strategies and identify market opportunities.'
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Implement sophisticated risk controls to protect your capital and manage trade exposure.'
  }
];

export default Home;