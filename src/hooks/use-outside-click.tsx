import { useEffect, useRef, useState } from 'react';

export function useOutsideClick(initialIsVisible: boolean) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  function handleClickOutside(event: MouseEvent) {
    if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}
