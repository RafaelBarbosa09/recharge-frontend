import { useRecharges } from "../../hooks/RechargesContext";
import { Container, Content } from "./styles";

export function RechargesTable() {
  const { recharges } = useRecharges();

  return (
    <Container>
      <Content>
        <h2>Últimas Regargas</h2>
        <table>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Telefone</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {recharges.map(recharge => {
              return (
                <tr key={recharge.id}>

                  <td>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(recharge.amount)}
                  </td>

                  <td>{recharge.phone?.number}</td>

                  <td>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(recharge.created_at)
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}