import { ButtonArea, CardsContainer, CardsContent, Container, Content } from "./styles";
import Cards from 'react-credit-cards';
import { useCards } from "../../hooks/CardsContext";


export function CardsArea(props) {
  const { cards } = useCards();

  return (
    <Container>
      <Content>
        <ButtonArea>
          <button type="button" onClick={props.onOpenNewCardModal}>
            Incluir Cartão
          </button>

          <button type="button" onClick={props.onOpenNewPhoneModal}>
            Incluir Número
          </button>
        </ButtonArea>

        <h2>{cards.length === 0 ? '' : 'Cartões Cadastrados'}</h2>

        <CardsContainer>

          {cards.map(card => (
            <CardsContent key={card.id}>
              <Cards
                cvc={card.code}
                expiry={card.date}
                name={card.name}
                number={card.number}
              />
            </CardsContent>
          ))}
        </CardsContainer>
      </Content>
    </Container>
  );
}