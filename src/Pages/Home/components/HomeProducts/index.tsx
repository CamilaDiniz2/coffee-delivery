import { useContext } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  HomeProductItem,
  HomeProductsList,
  HomeProductsSection,
  ProductItemFeatures,
  ProductPrice,
  ProductQuantity,
  ProductQuantityAndOrder,
  ButtonMinus,
  ButtonAddToAChart,
  ButtonAdd,
} from './styles'

import { CoffeesAddedContext } from '../../../../contexts/CoffeesAddedContext'

export function HomeProducts() {
  const {
    listOfCoffees,
    handleAddItemToAChart,
    handleAddOneCoffee,
    handleMinusOneCoffee,
  } = useContext(CoffeesAddedContext)

  return (
    <HomeProductsSection>
      <h2>Nossos produtos</h2>

      <HomeProductsList>
        {listOfCoffees.map((coffee) => {
          return (
            <HomeProductItem key={coffee.id}>
              <img src={coffee.imgSrc} />
              <ProductItemFeatures>
                {coffee.features.map((feature) => {
                  return <h5 key={feature}>{feature}</h5>
                })}
              </ProductItemFeatures>

              <strong>{coffee.name}</strong>
              <p>{coffee.description}</p>

              <ProductQuantityAndOrder>
                <ProductPrice>
                  R$
                  <span>{coffee.price.toFixed(2)}</span>
                </ProductPrice>
                <ProductQuantity>
                  <ButtonMinus
                    onClick={() => handleMinusOneCoffee(coffee.id)}
                    type="button"
                  >
                    <Minus size={16} weight="bold" />
                  </ButtonMinus>
                  <span>{coffee.quantity}</span>
                  <ButtonAdd
                    onClick={() => handleAddOneCoffee(coffee.id)}
                    type="button"
                  >
                    <Plus size={16} weight="bold" />
                  </ButtonAdd>
                </ProductQuantity>
                <ButtonAddToAChart
                  onClick={() => handleAddItemToAChart(coffee.id)}
                  type="button"
                >
                  <ShoppingCart size={20} weight="fill" />
                </ButtonAddToAChart>
              </ProductQuantityAndOrder>
            </HomeProductItem>
          )
        })}
      </HomeProductsList>
    </HomeProductsSection>
  )
}
