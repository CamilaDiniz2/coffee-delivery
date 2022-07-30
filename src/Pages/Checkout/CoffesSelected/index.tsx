import {
  CoffeesSelectedContainer,
  CoffeesSelectedTotal,
  CoffesSelectedInfo,
  CoffesSelectedItem,
  RemoveItem,
  CoffeeAddOrRemove,
} from './styles'

import chocolateQuente from '../../../assets/coffees-list/chocolate-quente.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonAddOrMinus,
  ProductQuantity,
} from '../../Home/components/HomeProducts/styles'

export function CoffeesSelected() {
  return (
    <CoffeesSelectedContainer>
      <h1>Cafés Selecionados</h1>
      <CoffesSelectedInfo>
        <CoffesSelectedItem>
          <img src={chocolateQuente} />
          <div>
            <p>Chocolate Quente</p>
            <CoffeeAddOrRemove>
              <ProductQuantity>
                <ButtonAddOrMinus>
                  <Minus size={16} weight="bold" />
                </ButtonAddOrMinus>
                <span>0</span>
                <ButtonAddOrMinus>
                  <Plus size={16} weight="bold" />
                </ButtonAddOrMinus>
              </ProductQuantity>
              <RemoveItem>
                <Trash size={20} weight="light" />
                <span>remover</span>
              </RemoveItem>
            </CoffeeAddOrRemove>
          </div>
          <span>R$ 9.90</span>
        </CoffesSelectedItem>
        <CoffesSelectedItem>
          <img src={chocolateQuente} />
          <div>
            <p>Chocolate Quente</p>
            <CoffeeAddOrRemove>
              <ProductQuantity>
                <ButtonAddOrMinus>
                  <Minus size={16} weight="bold" />
                </ButtonAddOrMinus>
                <span>0</span>
                <ButtonAddOrMinus>
                  <Plus size={16} weight="bold" />
                </ButtonAddOrMinus>
              </ProductQuantity>
              <RemoveItem>
                <Trash size={20} weight="light" />
                <span>remover</span>
              </RemoveItem>
            </CoffeeAddOrRemove>
          </div>
          <span>R$ 9.90</span>
        </CoffesSelectedItem>
        <CoffeesSelectedTotal>
          <div>
            <span>Total de items</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3.50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
          <button>confirmar pedido</button>
        </CoffeesSelectedTotal>
      </CoffesSelectedInfo>
    </CoffeesSelectedContainer>
  )
}
