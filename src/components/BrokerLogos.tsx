import { motion } from 'framer-motion';

const brokers = [
  {
    id: 1,
    name: 'Zerodha',
    logo: 'https://zerodha.com/static/images/logo.svg',
    link: 'https://zerodha.com'
  },
  {
    id: 2,
    name: 'Upstox',
    logo: 'https://storage.googleapis.com/ares-banner-images/upstox.svg',
    link: 'https://upstox.com'
  },
  {
    id: 3,
    name: 'Angel One',
    logo: 'https://storage.googleapis.com/ares-banner-images/angel-one.svg',
    link: 'https://angelone.in'
  }
];

const BrokerLogos = () => {
  return (
    <div className="py-8">
      <h2 className="text-center text-lg font-medium text-gray-300 mb-8">
        Supported Trading Platforms
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {brokers.map((broker, index) => (
          <motion.a
            key={broker.id}
            href={broker.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-4 rounded-lg bg-foreground/50 border border-gray-800 h-16 w-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={broker.logo} 
              alt={broker.name} 
              className="max-h-8 max-w-28 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default BrokerLogos;