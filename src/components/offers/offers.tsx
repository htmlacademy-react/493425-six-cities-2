import { useRef } from "react";
import { Card } from "../../lib/types/types";
import PlaceCard from "../place-card/place-card";

type OffersProps = {
  cards: Card[];
}

function Offers({ cards }: OffersProps): React.JSX.Element {
  const activeCardId = useRef(NaN);

  function handleMouseEnter(card: Card) {
    activeCardId.current = card.id;
  }

  function handleMouseLeave(card: Card) {
    if (activeCardId.current === card.id) {
      activeCardId.current = NaN;
    }    
  }

  return (
    <>
      {cards.map((card: Card) => (
        <PlaceCard
          key={card.id}
          card={card}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </>
  );
}

export default Offers;
