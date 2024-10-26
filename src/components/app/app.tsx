import Main from '../../pages/main/main';
import { Card } from '../place-card/place-card';

type AppProps = {
  cards: Card[];
}

function App({cards}: AppProps): JSX.Element {
  return (
    <Main cards={cards}></Main>
  );
}

export default App;
