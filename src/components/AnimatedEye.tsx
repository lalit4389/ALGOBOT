import { motion } from 'framer-motion';
import videoFile from '../assests/original-c6f867f003d0615678ac3f8cc96e3396.mp4';


const AnimatedEye = () => {
  return (
    <div className="relative algo-eye">
      {/* Animated Video */}
      
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-[300px] md:max-w-[400px] drop-shadow-[0_0_25px_rgba(8,232,222,0.3)]"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      

      {/* Orbiting Ring 1 */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Orbiting Ring 2 */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-highlight/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute top-1/2 right-0 translate-x-1/2 w-4 h-4 bg-highlight rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Glowing Core */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-radial from-highlight/40 to-transparent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default AnimatedEye;
