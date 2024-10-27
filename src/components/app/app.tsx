import Main from '../../pages/main/main';
import { Card } from '../place-card/place-card';

type AppProps = {
  cards: Card[];
}

function App({cards}: AppProps): React.JSX.Element {
  return (
    <Main cards={cards}></Main>
  );
}

export default App;
