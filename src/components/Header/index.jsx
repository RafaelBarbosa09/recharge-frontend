import { Container, Content } from "./styles";

export function Header(props) {
  return (
    <Container>
      <Content>
        <h1>Recharge App</h1>
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova Recarga
        </button>
      </Content>
    </Container>
  )
}