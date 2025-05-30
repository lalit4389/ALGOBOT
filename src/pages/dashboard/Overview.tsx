import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart3, LineChart, DollarSign, ArrowUpRight } from 'lucide-react';

const Overview = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back, John! Here's what's happening with your trading algorithms.</p>
      </motion.div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`flex items-center justify-center h-10 w-10 rounded-lg ${stat.trend === 'up' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                {stat.trend === 'up' ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
              </div>
            </div>
            <div className="flex items-center mt-2">
              <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                {stat.change}
              </span>
              <span className="text-gray-400 text-sm ml-1">vs last week</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Performance Overview</h2>
            <select className="bg-background border border-gray-700 rounded-md text-sm p-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 w-full flex items-center justify-center bg-background/50 rounded-lg">
            <LineChart className="h-8 w-8 text-gray-600" />
            <span className="ml-2 text-gray-400">Chart Visualization</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Strategy Allocation</h2>
            <select className="bg-background border border-gray-700 rounded-md text-sm p-1">
              <option>By Performance</option>
              <option>By Capital</option>
            </select>
          </div>
          <div className="h-64 w-full flex items-center justify-center bg-background/50 rounded-lg">
            <BarChart3 className="h-8 w-8 text-gray-600" />
            <span className="ml-2 text-gray-400">Chart Visualization</span>
          </div>
        </motion.div>
      </div>
      
      {/* Recent Trades */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="card mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Recent Trades</h2>
          <button className="text-primary text-sm hover:text-primary/80">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-left">
              <tr className="border-b border-gray-800">
                <th className="pb-3 font-medium text-gray-400 text-sm">Symbol</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Type</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Entry Price</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Exit Price</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">P/L</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTrades.map((trade, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3">{trade.symbol}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      trade.type === 'BUY' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      {trade.type}
                    </span>
                  </td>
                  <td className="py-3">{trade.entryPrice}</td>
                  <td className="py-3">{trade.exitPrice}</td>
                  <td className={`py-3 ${
                    trade.pl.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {trade.pl}
                  </td>
                  <td className="py-3 text-gray-400">{trade.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      
      {/* Active Strategies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Active Strategies</h2>
          <button className="text-primary text-sm hover:text-primary/80">Manage Strategies</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeStrategies.map((strategy, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{strategy.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  strategy.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {strategy.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1 mb-4">{strategy.description}</p>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <div>
                  <p className="text-gray-400">Broker</p>
                  <p className="font-medium">{strategy.broker}</p>
                </div>
                <div>
                  <p className="text-gray-400">Timeframe</p>
                  <p className="font-medium">{strategy.timeframe}</p>
                </div>
                <div>
                  <p className="text-gray-400">Win Rate</p>
                  <p className="font-medium">{strategy.winRate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="flex-1 btn btn-outline text-xs py-1.5">Edit</button>
                <button className="flex-1 btn btn-primary text-xs py-1.5">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Example data
const stats = [
  {
    title: 'Total P&L',
    value: '$2,845.65',
    trend: 'up',
    change: '+12.5%'
  },
  {
    title: 'Win Rate',
    value: '68.2%',
    trend: 'up',
    change: '+3.8%'
  },
  {
    title: 'Active Strategies',
    value: '4',
    trend: 'up',
    change: '+1'
  },
  {
    title: 'Drawdown',
    value: '4.3%',
    trend: 'down',
    change: '-1.2%'
  }
];

const recentTrades = [
  {
    symbol: 'AAPL',
    type: 'BUY',
    entryPrice: '$182.34',
    exitPrice: '$189.65',
    pl: '+3.8%',
    date: 'Today, 10:45 AM'
  },
  {
    symbol: 'TSLA',
    type: 'SELL',
    entryPrice: '$245.12',
    exitPrice: '$238.90',
    pl: '+2.5%',
    date: 'Today, 9:30 AM'
  },
  {
    symbol: 'MSFT',
    type: 'BUY',
    entryPrice: '$350.20',
    exitPrice: '$348.15',
    pl: '-0.6%',
    date: 'Yesterday, 3:45 PM'
  },
  {
    symbol: 'AMZN',
    type: 'BUY',
    entryPrice: '$178.45',
    exitPrice: '$185.20',
    pl: '+3.8%',
    date: 'Yesterday, 2:30 PM'
  }
];

const activeStrategies = [
  {
    name: 'Moving Average Crossover',
    status: 'Active',
    description: 'Classic strategy using 50 and 200 EMA crossovers for trend following',
    broker: 'Zerodha',
    timeframe: '1h',
    winRate: '64.5%'
  },
  {
    name: 'RSI Divergence',
    status: 'Active',
    description: 'Identifies potential reversals using RSI divergence patterns',
    broker: 'Upstox',
    timeframe: '4h',
    winRate: '72.1%'
  },
  {
    name: 'Bollinger Band Squeeze',
    status: 'Paused',
    description: 'Volatility-based strategy for breakout trades',
    broker: 'Angel One',
    timeframe: '15m',
    winRate: '58.3%'
  }
];

export default Overview;