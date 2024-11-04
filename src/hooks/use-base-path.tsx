import { useLocation, useParams } from 'react-router-dom';

/** Возвращает адрес роута без параметров */
export function useBasePath(): string {
  const location = useLocation();
  const params = useParams<Record<string, string>>();
  const basePath = Object.values(params)
    .reduce(
      (path = '', param = '') => path?.replace(`/${ param}`, ''),
      location.pathname
    );

  return basePath || '';
}
