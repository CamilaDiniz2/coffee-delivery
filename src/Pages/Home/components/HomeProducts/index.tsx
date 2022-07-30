import { useState } from 'react'
import {
  HomeProductItem,
  HomeProductsList,
  HomeProductsSection,
  ProductItemFeatures,
} from './styles'
import expressoTradicional from '../../../../assets/coffees-list/expresso-tradicional.svg'
import expressoAmericano from '../../../../assets/coffees-list/expresso-americano.svg'
import expressoCremoso from '../../../../assets/coffees-list/expresso-cremoso.svg'
import expressoGelado from '../../../../assets/coffees-list/expresso-gelado.svg'
import cafeComLeite from '../../../../assets/coffees-list/cafe-com-leite.svg'
import latte from '../../../../assets/coffees-list/latte.svg'
import capuccino from '../../../../assets/coffees-list/capuccino.svg'
import macchiato from '../../../../assets/coffees-list/macchiato.svg'
import mocaccino from '../../../../assets/coffees-list/mocaccino.svg'
import chocolateQuente from '../../../../assets/coffees-list/chocolate-quente.svg'
import cubano from '../../../../assets/coffees-list/cubano.svg'
import havaiano from '../../../../assets/coffees-list/havaiano.svg'
import arabe from '../../../../assets/coffees-list/arabe.svg'
import irlandes from '../../../../assets/coffees-list/irlandes.svg'
import { ButtonsAddMinusAndChart } from './ButtonsAddMinusAndChart'

export function HomeProducts() {
  const [listOfCoffees, setListOfCoffees] = useState([
    {
      id: 'expresso-tradicional',
      imgSrc: expressoTradicional,
      name: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      features: ['tradicional'],
      price: 5.5,
      quantity: 0,
    },
    {
      id: 'expresso-americano',
      imgSrc: expressoAmericano,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      features: ['tradicional'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'expresso-cremoso',
      imgSrc: expressoCremoso,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      features: ['tradicional'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'expresso-gelado',
      imgSrc: expressoGelado,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      features: ['tradicional'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'cafe-com-leite',
      imgSrc: cafeComLeite,
      name: 'Cafe com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      features: ['tradicional', 'com leite'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'latte',
      imgSrc: latte,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      features: ['tradicional', 'com leite'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'capuccino',
      imgSrc: capuccino,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      features: ['tradicional', 'com leite'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'macchiato',
      imgSrc: macchiato,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      features: ['tradicional', 'com leite'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'mocaccino',
      imgSrc: mocaccino,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      features: ['tradicional', 'com leite'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'chocolate-quente',
      imgSrc: chocolateQuente,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      features: ['especial', 'com leite'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'cubano',
      imgSrc: cubano,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      features: ['especial', 'alcoólico', 'gelado'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'havaiano',
      imgSrc: havaiano,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      features: ['especial'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'arabe',
      imgSrc: arabe,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      features: ['especial'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 'irlandes',
      imgSrc: irlandes,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      features: ['especial', 'alcoólico'],
      price: 9.9,
      quantity: 0,
    },
  ])

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

              <ButtonsAddMinusAndChart
                quantity={coffee.quantity}
                price={coffee.price}
              />
            </HomeProductItem>
          )
        })}
      </HomeProductsList>
    </HomeProductsSection>
  )
}
