import { Container } from './styles'

export function TotalItemsSelectedInfo() {
  return (
    <Container>
      <div>
        <span>Total de itens</span>
        <p>R$ 29,70</p>
      </div>
      <div>
        <span>Entrega</span>
        <p>R$ 3,50</p>
      </div>
      <div>
        <strong>Total</strong>
        <strong>R$ 33,20</strong>
      </div>
    </Container>
  )
}
