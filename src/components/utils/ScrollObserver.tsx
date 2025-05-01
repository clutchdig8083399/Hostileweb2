import React, { useEffect, useState, useRef, createContext, useContext } from 'react';

interface ScrollValue {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
}

// Create context with default values
const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
  scrollDirection: null,
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollObserver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, scrollDirection }}>
      {children}
    </ScrollContext.Provider>
  );
};