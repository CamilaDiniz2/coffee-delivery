import { useContext } from 'react'
import { Container } from './styles'
import { CoffeesAddedContext } from '../../../../contexts/CoffeesAddedContext'

export function TotalItemsSelectedInfo() {
  const { totalPriceOfCoffees } = useContext(CoffeesAddedContext)

  return (
    <Container>
      <div>
        <span>Total de itens</span>
        <p>R$ {totalPriceOfCoffees.toFixed(2)}</p>
      </div>
      <div>
        <span>Entrega</span>
        <p>R$ 3,50</p>
      </div>
      <div>
        <strong>Total</strong>
        <strong>R$ {(totalPriceOfCoffees + 3.5).toFixed(2)}</strong>
      </div>
    </Container>
  )
}
