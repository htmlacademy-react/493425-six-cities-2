import { useEffect, useRef } from 'react';

export const useOutsideClick = (func: () => void) => {
  const ref = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
      func();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return ref;
};
