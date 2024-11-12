import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import styles from './not-found.module.css';
import { Routing } from '../../lib/types/routing';

function NotFound(): React.JSX.Element {
  return (
    <div className={styles.notFound}>
      <Helmet>
        <title>6 cities: page not found</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <Link to={Routing.Main} className={styles.link}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
