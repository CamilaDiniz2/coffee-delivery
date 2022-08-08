import {
  Container,
  CoffeeInfo,
  CoffeeQuantityAndRemove,
  ProductQuantity,
  ButtonAddOrSubtractItem,
  RemoveItem,
  TotalPrice,
} from './styles'

import { useContext } from 'react'
import { Plus, Minus, Trash } from 'phosphor-react'
import { CoffeesAddedContext } from '../../../../contexts/CoffeesAddedContext'
interface CoffeesSelectedinfoProps {
  id: string
  name: string
  price: number
  quantity: number
  imgScr: string
}

export function CoffeeSelectedItem({
  id,
  name,
  price,
  quantity,
  imgScr,
}: CoffeesSelectedinfoProps) {
  const {
    handleAddACoffeeInCheckoutpage,
    handleSubtractACoffeeInCheckoutpage,
    removeACoffeInCheckoutPage,
  } = useContext(CoffeesAddedContext)
  return (
    <Container>
      <img src={imgScr} />
      <CoffeeInfo>
        <strong>{name}</strong>
        <CoffeeQuantityAndRemove>
          <ProductQuantity>
            <ButtonAddOrSubtractItem
              disabled={quantity === 1}
              onClick={() => handleSubtractACoffeeInCheckoutpage(id)}
              type="button"
            >
              <Minus size={16} weight="bold" />
            </ButtonAddOrSubtractItem>
            <span>{quantity}</span>
            <ButtonAddOrSubtractItem
              onClick={() => handleAddACoffeeInCheckoutpage(id)}
              type="button"
            >
              <Plus size={16} weight="bold" />
            </ButtonAddOrSubtractItem>
          </ProductQuantity>
          <RemoveItem
            type="button"
            onClick={() => removeACoffeInCheckoutPage(id)}
          >
            <Trash size={16} color="#8047F8" />
            <span>remover</span>
          </RemoveItem>
        </CoffeeQuantityAndRemove>
      </CoffeeInfo>
      <TotalPrice>R$ {(price * quantity).toFixed(2)}</TotalPrice>
    </Container>
  )
}
