import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    direction: {
      vertical: null,
      horizontal: null
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentX = window.scrollX;
      const currentY = window.scrollY;
      
      setScrollPosition(prev => ({
        x: currentX,
        y: currentY,
        lastX: prev.x,
        lastY: prev.y,
        direction: {
          vertical: currentY > prev.y ? 'down' : 
                   currentY < prev.y ? 'up' : prev.direction.vertical,
          horizontal: currentX > prev.x ? 'right' : 
                     currentX < prev.x ? 'left' : prev.direction.horizontal
        }
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;