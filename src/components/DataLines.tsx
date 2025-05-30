import { useEffect, useState } from 'react';

const DataLines = () => {
  const [lines, setLines] = useState<Array<{id: number, delay: number}>>([]);
  
  useEffect(() => {
    // Create 3 data lines with different starting delays
    const newLines = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5000, // Random delay between 0-5s
    }));
    
    setLines(newLines);
    
    // Recreate lines every 15 seconds for variation
    const interval = setInterval(() => {
      const refreshedLines = Array.from({ length: 3 }, (_, i) => ({
        id: i + Date.now(), // Ensure unique IDs
        delay: Math.random() * 5000,
      }));
      
      setLines(refreshedLines);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lines.map((line) => (
        <div
          key={line.id}
          className="data-line absolute w-full opacity-20"
          style={{
            top: `-1px`,
            animationDelay: `${line.delay}ms`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DataLines;