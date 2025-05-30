import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Filter, 
  Search, 
  Copy, 
  Trash2, 
  PauseCircle, 
  PlayCircle, 
  Settings, 
  BarChart3,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const Strategies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Filter strategies based on search term and filter
  const filteredStrategies = strategies.filter(strategy => {
    const matchesSearch = strategy.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || strategy.status.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold">Trading Strategies</h1>
          <p className="text-gray-400">Manage and monitor your algorithmic trading strategies</p>
        </div>
        
        <button className="btn btn-primary inline-flex items-center gap-2 self-start">
          <Plus className="h-4 w-4" />
          New Strategy
        </button>
      </motion.div>
      
      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <div className="relative flex-grow">
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search strategies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-background border border-gray-700 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          >
            <option value="all">All Strategies</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </motion.div>
      
      {/* Strategies List */}
      <div className="space-y-6">
        {filteredStrategies.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col items-center justify-center py-12"
          >
            <BarChart3 className="h-12 w-12 text-gray-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">No strategies found</h3>
            <p className="text-gray-400 text-center max-w-md mb-6">
              {searchTerm 
                ? `No strategies match "${searchTerm}". Try a different search term.` 
                : "You don't have any strategies yet. Create your first strategy to get started."}
            </p>
            <button className="btn btn-primary inline-flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Strategy
            </button>
          </motion.div>
        ) : (
          filteredStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{strategy.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      strategy.status === 'Active' 
                        ? 'bg-green-500/10 text-green-500' 
                        : strategy.status === 'Paused'
                          ? 'bg-yellow-500/10 text-yellow-500'
                          : 'bg-gray-500/10 text-gray-400'
                    }`}>
                      {strategy.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-1">{strategy.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-400">Broker</p>
                      <p className="text-sm font-medium">{strategy.broker}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Timeframe</p>
                      <p className="text-sm font-medium">{strategy.timeframe}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Win Rate</p>
                      <p className="text-sm font-medium">{strategy.stats.winRate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">P&L</p>
                      <p className={`text-sm font-medium flex items-center ${
                        strategy.stats.pnl.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {strategy.stats.pnl}
                        {strategy.stats.pnl.startsWith('+') 
                          ? <TrendingUp className="h-3 w-3 ml-1" />
                          : <TrendingDown className="h-3 w-3 ml-1" />
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-center">
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-foreground/80 rounded-lg" title="Duplicate">
                    <Copy className="h-5 w-5" />
                  </button>
                  
                  {strategy.status === 'Active' ? (
                    <button className="p-2 text-gray-400 hover:text-yellow-500 hover:bg-foreground/80 rounded-lg" title="Pause">
                      <PauseCircle className="h-5 w-5" />
                    </button>
                  ) : (
                    <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-foreground/80 rounded-lg" title="Activate">
                      <PlayCircle className="h-5 w-5" />
                    </button>
                  )}
                  
                  <button className="p-2 text-gray-400 hover:text-primary hover:bg-foreground/80 rounded-lg" title="Settings">
                    <Settings className="h-5 w-5" />
                  </button>
                  
                  <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-foreground/80 rounded-lg" title="Delete">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Strategy performance chart - placeholder */}
              {strategy.status !== 'Draft' && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium">Performance</h4>
                    <select className="bg-background border border-gray-700 rounded-md text-xs p-1">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>All time</option>
                    </select>
                  </div>
                  <div className="h-20 w-full bg-background/50 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-xs text-gray-400">Performance chart</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

// Example data
const strategies = [
  {
    id: 1,
    name: 'Moving Average Crossover',
    status: 'Active',
    description: 'Classic strategy using 50 and 200 EMA crossovers for trend following with additional RSI filter',
    broker: 'Zerodha',
    timeframe: '1h',
    stats: {
      winRate: '64.5%',
      pnl: '+12.8%'
    }
  },
  {
    id: 2,
    name: 'RSI Divergence',
    status: 'Active',
    description: 'Identifies potential reversals using RSI divergence patterns and support/resistance levels',
    broker: 'Upstox',
    timeframe: '4h',
    stats: {
      winRate: '72.1%',
      pnl: '+18.3%'
    }
  },
  {
    id: 3,
    name: 'Bollinger Band Squeeze',
    status: 'Paused',
    description: 'Volatility-based strategy for breakout trades using Bollinger Band contraction',
    broker: 'Angel One',
    timeframe: '15m',
    stats: {
      winRate: '58.3%',
      pnl: '-2.4%'
    }
  },
  {
    id: 4,
    name: 'VWAP Reversion',
    status: 'Draft',
    description: 'Mean reversion strategy based on deviations from Volume Weighted Average Price',
    broker: 'Not connected',
    timeframe: '5m',
    stats: {
      winRate: 'N/A',
      pnl: 'N/A'
    }
  }
];

export default Strategies;