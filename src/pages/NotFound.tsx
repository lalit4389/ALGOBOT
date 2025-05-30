import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, HelpCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
          <p className="text-gray-400 mt-2">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link to="/" className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2">
            <HelpCircle className="h-4 w-4" />
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;