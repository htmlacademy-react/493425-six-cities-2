import { Card } from '../../models';
import Main from '../../pages/main/main';

type AppProps = {
  cards: Card[];
}

function App({cards}: AppProps): React.JSX.Element {
  return (
    <Main cards={cards}></Main>
  );
}

export default App;
