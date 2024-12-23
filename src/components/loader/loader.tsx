import { MoonLoader } from 'react-spinners';
import styles from './loader.module.css';

type LoaderProps = {
  loading?: boolean;
};

function Loader({ loading = true }: LoaderProps) {
  return <MoonLoader loading={loading} className={styles.spinner} />;
}

export default Loader;
