// Memory Game - Exercise
import React, {createContext, useContext, useState, useMemo} from "react";
import {getInitialMemory, CARD_STATE, isPairCards, isMemoryFinished} from "../../lib/memory";

const MemoryContext = createContext();

export const useMemory = () => {
  const context = useContext(MemoryContext);

  if (!context) {
    throw new Error("useMemory must be used within a MemoryProvider");
  }

  return context;
}

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory());
  const [tryCount, setTryCount] = useState(0);

  const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);

  const onReturnCard = (returnedCard) => {

    if(returnedCard.state !== CARD_STATE.HIDE) {
      return;
    }

    const returnedCards = cards.filter(c => c.state === CARD_STATE.RETURNED);

    if(returnedCards.length === 2 || returnedCards.includes(returnedCard)) {
      return;
    }

    setCards(current => current.map(card => {
      if(returnedCard.id === card.id) {
        card.state = CARD_STATE.RETURNED
      }
      return card;
    }));

    console.log(returnedCards);
    if(returnedCards.length === 0) {
      return;
    }
    returnedCards.push(returnedCard);
    computeReturnedCards(returnedCards);
    
  };

  const computeReturnedCards = (returnedCards) => {
    const isPair = isPairCards(returnedCards[0], returnedCards[1]);
    
    setTimeout(() => {
      setTryCount(current => current + 1);
      setCards((current => {
        return current.map(card => {
          if (card.state === CARD_STATE.RETURNED && returnedCards.includes(card)){
            card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
          }
          return card; 
        });
      }));
    }, isPair ? 400 : 1000
    ); 
  }

  const reset = () => {
    setCards(getInitialMemory());
    setTryCount(0);
  }
  const values = {cards, tryCount, onReturnCard, reset, isFinish};

  return <MemoryContext.Provider value={values}>{children}</MemoryContext.Provider>;
};
