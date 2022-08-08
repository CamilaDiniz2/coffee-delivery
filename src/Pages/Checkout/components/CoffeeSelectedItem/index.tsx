import {
  Container,
  CoffeeInfo,
  CoffeeQuantityAndRemove,
  ProductQuantity,
  ButtonAddOrSubtractItem,
  RemoveItem,
} from './styles'

import { Plus, Minus, Trash } from 'phosphor-react'

interface CoffeesSelectedinfoProps {
  name: string
  price: number
  quantity: number
  imgScr: string
}

export function CoffeeSelectedItem({
  name,
  price,
  quantity,
  imgScr,
}: CoffeesSelectedinfoProps) {
  return (
    <Container>
      <img src={imgScr} />
      <CoffeeInfo>
        <strong>{name}</strong>
        <CoffeeQuantityAndRemove>
          <ProductQuantity>
            <ButtonAddOrSubtractItem>
              <Minus size={16} weight="bold" />
            </ButtonAddOrSubtractItem>
            <span>{quantity}</span>
            <ButtonAddOrSubtractItem>
              <Plus size={16} weight="bold" />
            </ButtonAddOrSubtractItem>
          </ProductQuantity>
          <RemoveItem>
            <Trash size={16} color="#8047F8" />
            <span>remover</span>
          </RemoveItem>
        </CoffeeQuantityAndRemove>
      </CoffeeInfo>
      <strong>R$ {price}0</strong>
    </Container>
  )
}
