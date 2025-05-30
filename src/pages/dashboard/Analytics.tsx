import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, BarChart3, LineChart, Calendar, Download, HelpCircle } from 'lucide-react';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7d');

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-gray-400">Analyze your trading performance and metrics</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
            <button
              onClick={() => setDateRange('7d')}
              className={`px-3 py-1.5 text-sm ${
                dateRange === '7d' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-background/80'
              }`}
            >
              7D
            </button>
            <button
              onClick={() => setDateRange('30d')}
              className={`px-3 py-1.5 text-sm ${
                dateRange === '30d' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-background/80'
              }`}
            >
              30D
            </button>
            <button
              onClick={() => setDateRange('90d')}
              className={`px-3 py-1.5 text-sm ${
                dateRange === '90d' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-background/80'
              }`}
            >
              90D
            </button>
            <button
              onClick={() => setDateRange('1y')}
              className={`px-3 py-1.5 text-sm ${
                dateRange === '1y' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-background/80'
              }`}
            >
              1Y
            </button>
          </div>
          
          <button className="btn btn-outline flex items-center gap-1 text-sm py-1.5">
            <Calendar className="h-4 w-4" />
            Custom
          </button>
          
          <button className="btn btn-outline flex items-center gap-1 text-sm py-1.5">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </motion.div>
      
      {/* Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {analyticsStats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center">
                  <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                  {stat.tooltip && (
                    <button className="ml-1 text-gray-500 hover:text-gray-400">
                      <HelpCircle className="h-3 w-3" />
                    </button>
                  )}
                </div>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`flex items-center justify-center h-10 w-10 rounded-lg ${stat.iconBg} ${stat.iconColor}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <span className={stat.changeColor}>
                {stat.change}
              </span>
              <span className="text-gray-400 text-sm ml-1">vs previous period</span>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Performance Over Time</h2>
          <select className="bg-background border border-gray-700 rounded-md text-sm p-1">
            <option>All Strategies</option>
            <option>Moving Average Crossover</option>
            <option>RSI Divergence</option>
            <option>Bollinger Band Squeeze</option>
          </select>
        </div>
        <div className="h-80 w-full flex items-center justify-center bg-background/50 rounded-lg">
          <LineChart className="h-8 w-8 text-gray-600" />
          <span className="ml-2 text-gray-400">Performance Chart Visualization</span>
        </div>
      </motion.div>
      
      {/* Strategy Performance & Trade Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <h2 className="font-semibold mb-4">Strategy Performance</h2>
          <div className="h-64 w-full flex items-center justify-center bg-background/50 rounded-lg mb-4">
            <BarChart3 className="h-8 w-8 text-gray-600" />
            <span className="ml-2 text-gray-400">Strategy Comparison Chart</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Best Strategy</p>
              <p className="font-medium">RSI Divergence</p>
              <p className="text-green-500 text-sm">+18.3%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Worst Strategy</p>
              <p className="font-medium">Bollinger Band Squeeze</p>
              <p className="text-red-500 text-sm">-2.4%</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <h2 className="font-semibold mb-4">Trade Distribution</h2>
          <div className="h-64 w-full flex items-center justify-center bg-background/50 rounded-lg mb-4">
            <PieChart className="h-8 w-8 text-gray-600" />
            <span className="ml-2 text-gray-400">Trade Distribution Chart</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-400">Win/Loss Ratio</p>
              <p className="font-medium">2.14</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Avg Win</p>
              <p className="font-medium text-green-500">+1.84%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Avg Loss</p>
              <p className="font-medium text-red-500">-0.76%</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Trade Analysis Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="card mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Detailed Trade Analysis</h2>
          <div className="flex items-center gap-2">
            <select className="bg-background border border-gray-700 rounded-md text-sm p-1">
              <option>All Trades</option>
              <option>Winning Trades</option>
              <option>Losing Trades</option>
            </select>
            <button className="btn btn-outline text-sm py-1">View All</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-left">
              <tr className="border-b border-gray-800">
                <th className="pb-3 font-medium text-gray-400 text-sm">Strategy</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Symbol</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Type</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Entry Time</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Exit Time</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">P/L</th>
                <th className="pb-3 font-medium text-gray-400 text-sm">Duration</th>
              </tr>
            </thead>
            <tbody>
              {tradeAnalysis.map((trade, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3 text-sm">{trade.strategy}</td>
                  <td className="py-3 font-medium">{trade.symbol}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      trade.type === 'BUY' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      {trade.type}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-gray-300">{trade.entryTime}</td>
                  <td className="py-3 text-sm text-gray-300">{trade.exitTime}</td>
                  <td className={`py-3 ${
                    trade.pl.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {trade.pl}
                  </td>
                  <td className="py-3 text-sm text-gray-300">{trade.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

// Example data
const analyticsStats = [
  {
    title: 'Total P&L',
    value: '+$3,845.65',
    change: '+15.2%',
    changeColor: 'text-green-500',
    icon: LineChart,
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-500'
  },
  {
    title: 'Win Rate',
    value: '68.2%',
    change: '+3.8%',
    changeColor: 'text-green-500',
    tooltip: 'Percentage of trades that resulted in profit',
    icon: PieChart,
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary'
  },
  {
    title: 'Total Trades',
    value: '143',
    change: '+22 trades',
    changeColor: 'text-gray-400',
    icon: BarChart3,
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-500'
  },
  {
    title: 'Max Drawdown',
    value: '4.3%',
    change: '-1.2%',
    changeColor: 'text-green-500',
    tooltip: 'Maximum observed loss from a peak to a trough',
    icon: LineChart,
    iconBg: 'bg-red-500/20',
    iconColor: 'text-red-500'
  }
];

const tradeAnalysis = [
  {
    strategy: 'MA Crossover',
    symbol: 'AAPL',
    type: 'BUY',
    entryTime: '2023-07-24 10:45:22',
    exitTime: '2023-07-24 14:32:10',
    pl: '+3.8%',
    duration: '3h 47m'
  },
  {
    strategy: 'RSI Divergence',
    symbol: 'TSLA',
    type: 'SELL',
    entryTime: '2023-07-24 09:30:15',
    exitTime: '2023-07-24 15:45:30',
    pl: '+2.5%',
    duration: '6h 15m'
  },
  {
    strategy: 'MA Crossover',
    symbol: 'MSFT',
    type: 'BUY',
    entryTime: '2023-07-23 13:15:45',
    exitTime: '2023-07-23 15:30:22',
    pl: '-0.6%',
    duration: '2h 15m'
  },
  {
    strategy: 'Bollinger Squeeze',
    symbol: 'AMZN',
    type: 'BUY',
    entryTime: '2023-07-23 10:05:12',
    exitTime: '2023-07-23 14:22:30',
    pl: '+3.8%',
    duration: '4h 17m'
  },
  {
    strategy: 'RSI Divergence',
    symbol: 'META',
    type: 'SELL',
    entryTime: '2023-07-22 11:32:45',
    exitTime: '2023-07-22 16:15:10',
    pl: '+1.2%',
    duration: '4h 43m'
  }
];

export default Analytics;