import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const CardsContext = createContext({});

export function CardsProvider(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get('cards').then(response => {
      setCards(response.data);
    })
  }, []);

  async function createCard(cardParam) {
    const response = await api.post('/cards', cardParam)
    
    const card = response.data;

    setCards([...cards, card]);
  }

  return (
    <CardsContext.Provider value={{ cards, createCard }}>
      {props.children}
    </CardsContext.Provider>
  );
}

export function useCards() {
  return useContext(CardsContext);
}