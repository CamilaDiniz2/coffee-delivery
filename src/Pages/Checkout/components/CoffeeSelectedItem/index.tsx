import { Container, CoffeeInfo } from './styles'

import chocolateQuente from '../../../../assets/coffees-list/chocolate-quente.svg'

export function CoffeeSelectedItem() {
  return (
    <Container>
      <img src={chocolateQuente} />
      <CoffeeInfo>
        <span>Chocolate quente</span>
      </CoffeeInfo>
      <strong>R$ 9.90</strong>
    </Container>
  )
}
