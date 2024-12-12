import { useEffect, useRef, useState } from 'react';

export const useOutsideClick = (initialIsVisible: boolean) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}
