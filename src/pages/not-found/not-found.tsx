import { Helmet } from 'react-helmet-async';

function NotFound(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities: page not found</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <a href="/">Вернуться на главную</a>
    </>
  );
}

export default NotFound;
