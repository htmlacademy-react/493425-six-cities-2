import { Link } from 'react-router-dom';
import { Routing } from '../../lib/types/types';

function Footer(): React.JSX.Element {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={Routing.Main}>
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={64}
          height={33}
        />
      </Link>
    </footer>
  );
}

export default Footer;
