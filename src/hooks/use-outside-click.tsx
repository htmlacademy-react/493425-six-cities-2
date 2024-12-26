import { useCallback, useEffect, useRef } from 'react';

export const useOutsideClick = (func: () => void) => {
  const ref = useRef(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
      func();
    }
  }, [func]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return ref;
};
