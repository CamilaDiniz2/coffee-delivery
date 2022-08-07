import {
  ButtonAdd,
  ButtonMinus,
  ProductQuantity,
  ButtonAddToAChart,
  ProductQuantityAndOrder,
  ProductPrice,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface coffeePriceAndQuantityProps {
  price: number
  quantity: number
  addCoffee: () => void
}

export function ButtonsAddMinusAndChart({
  price,
  quantity,
  addCoffee,
}: coffeePriceAndQuantityProps) {
  return (
    <ProductQuantityAndOrder>
      <ProductPrice>
        R$
        <span>{price}0</span>
      </ProductPrice>
      <ProductQuantity>
        <ButtonMinus onClick={addCoffee}>
          <Minus size={16} weight="bold" />
        </ButtonMinus>
        <span>{quantity}</span>
        <ButtonAdd>
          <Plus size={16} weight="bold" />
        </ButtonAdd>
      </ProductQuantity>
      <ButtonAddToAChart>
        <ShoppingCart size={20} weight="fill" />
      </ButtonAddToAChart>
    </ProductQuantityAndOrder>
  )
}
