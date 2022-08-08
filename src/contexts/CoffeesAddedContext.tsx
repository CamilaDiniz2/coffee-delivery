import { createContext, ReactNode, useEffect, useState } from 'react'

import expressoTradicional from '../assets/coffees-list/expresso-tradicional.svg'
import expressoAmericano from '../assets/coffees-list/expresso-americano.svg'
import expressoCremoso from '../assets/coffees-list/expresso-cremoso.svg'
import expressoGelado from '../assets/coffees-list/expresso-gelado.svg'
import cafeComLeite from '../assets/coffees-list/cafe-com-leite.svg'
import latte from '../assets/coffees-list/latte.svg'
import capuccino from '../assets/coffees-list/capuccino.svg'
import macchiato from '../assets/coffees-list/macchiato.svg'
import mocaccino from '../assets/coffees-list/mocaccino.svg'
import chocolateQuente from '../assets/coffees-list/chocolate-quente.svg'
import cubano from '../assets/coffees-list/cubano.svg'
import havaiano from '../assets/coffees-list/havaiano.svg'
import arabe from '../assets/coffees-list/arabe.svg'
import irlandes from '../assets/coffees-list/irlandes.svg'

interface ProductsProps {
  id: string
  imgSrc: string
  name: string
  description: string
  features: string[]
  quantity: number
  price: number
  isAddToAChart: boolean
  totalPrice: number
}

interface CoffeesAddedContextType {
  coffeesAddedToAChart: ProductsProps[]
  listOfCoffees: ProductsProps[]
  totalItemsAdded: number
  totalPriceOfCoffees: number
  handleMinusOneCoffee: (id: string) => void
  handleAddOneCoffee: (id: string) => void
  handleAddItemToAChart: (id: string) => void
  handleAddACoffeeInCheckoutpage: (id: string) => void
  handleSubtractACoffeeInCheckoutpage: (id: string) => void
  removeACoffeInCheckoutPage: (id: string) => void
}

export const CoffeesAddedContext = createContext({} as CoffeesAddedContextType)

interface CoffesAddedContextProviderProps {
  children: ReactNode
}

export function CoffesAddedContextProvider({
  children,
}: CoffesAddedContextProviderProps) {
  const [coffeesAddedToAChart, setCoffeesAddedToAChart] = useState<
    ProductsProps[]
  >([])

  const [listOfCoffees, setListOfCoffees] = useState<ProductsProps[]>([
    {
      id: 'expresso-tradicional',
      imgSrc: expressoTradicional,
      name: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      features: ['tradicional'],
      price: 5.5,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'expresso-americano',
      imgSrc: expressoAmericano,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      features: ['tradicional'],
      price: 4.5,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'expresso-cremoso',
      imgSrc: expressoCremoso,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      features: ['tradicional'],
      price: 7.0,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'expresso-gelado',
      imgSrc: expressoGelado,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      features: ['tradicional'],
      price: 8.9,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'cafe-com-leite',
      imgSrc: cafeComLeite,
      name: 'Cafe com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      features: ['tradicional', 'com leite'],
      price: 3.5,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'latte',
      imgSrc: latte,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      features: ['tradicional', 'com leite'],
      price: 6.9,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'capuccino',
      imgSrc: capuccino,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      features: ['tradicional', 'com leite'],
      price: 8.5,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'macchiato',
      imgSrc: macchiato,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      features: ['tradicional', 'com leite'],
      price: 9.5,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'mocaccino',
      imgSrc: mocaccino,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      features: ['tradicional', 'com leite'],
      price: 10.5,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'chocolate-quente',
      imgSrc: chocolateQuente,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      features: ['especial', 'com leite'],
      price: 12.9,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'cubano',
      imgSrc: cubano,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      features: ['especial', 'alcoólico', 'gelado'],
      price: 15,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'havaiano',
      imgSrc: havaiano,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      features: ['especial'],
      price: 11.9,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'arabe',
      imgSrc: arabe,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      features: ['especial'],
      price: 13.5,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
    {
      id: 'irlandes',
      imgSrc: irlandes,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      features: ['especial', 'alcoólico'],
      price: 19.9,
      quantity: 0,
      isAddToAChart: false,
      totalPrice: 0,
    },
  ])

  const [totalPriceOfCoffees, setTotalPriceOfCoffees] = useState<number>(0)
  const [totalItemsAdded, setTotalItemsAdded] = useState<number>(0)
  const [itemAddedChart, setItemAddedChart] = useState<number>(0)

  // Diminui em uma unidade o tipo de café
  function handleMinusOneCoffee(id: string) {
    const newListOfCoffeesMinusOne = listOfCoffees.map((coffee) => {
      if (coffee.id === id && coffee.quantity > 0) {
        return {
          ...coffee,
          quantity: coffee.quantity - 1,
          totalPrice: coffee.quantity * coffee.price,
        }
      } else {
        return coffee
      }
    })
    setListOfCoffees(newListOfCoffeesMinusOne)
  }

  // Aumenta em uma unidade o tipo de café
  function handleAddOneCoffee(id: string) {
    const newListOfCoffeesPlusOne = listOfCoffees.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity: coffee.quantity + 1,
          totalPrice: coffee.quantity * coffee.price,
        }
      } else {
        return coffee
      }
    })
    setListOfCoffees(newListOfCoffeesPlusOne)
  }

  function handleAddACoffeeInCheckoutpage(id: string) {
    const newListOfCoffees = coffeesAddedToAChart.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity: coffee.quantity + 1,
        }
      } else {
        return coffee
      }
    })
    setCoffeesAddedToAChart(newListOfCoffees)
  }

  console.log(coffeesAddedToAChart)

  function handleSubtractACoffeeInCheckoutpage(id: string) {
    const newListOfCoffees = coffeesAddedToAChart.map((coffee) => {
      if (coffee.id === id && coffee.quantity > 1) {
        return {
          ...coffee,
          quantity: coffee.quantity - 1,
        }
      } else {
        return coffee
      }
    })
    setCoffeesAddedToAChart(newListOfCoffees)
  }

  function removeACoffeInCheckoutPage(id: string) {
    const newListOfCoffees = coffeesAddedToAChart.filter(
      (coffee) => coffee.id !== id,
    )
    setCoffeesAddedToAChart(newListOfCoffees)
  }

  // adiciona item ao carrinho
  function handleAddItemToAChart(id: string) {
    setItemAddedChart(itemAddedChart + 1)
    const newListOfCoffeesAddToAChart = listOfCoffees.map((coffee) => {
      if (coffee.id === id && coffee.quantity > 0) {
        return {
          ...coffee,
          isAddToAChart: true,
          totalPrice: coffee.quantity * coffee.price,
        }
      } else {
        return coffee
      }
    })
    setListOfCoffees(newListOfCoffeesAddToAChart)
  }

  useEffect(() => {
    const newListOfCoffeesAddToAChart = listOfCoffees.filter(
      (coffee) => coffee.isAddToAChart === true && coffee.quantity > 0,
    )

    setCoffeesAddedToAChart(newListOfCoffeesAddToAChart)
  }, [itemAddedChart])

  useEffect(() => {
    const totalPriceOfCoffees = coffeesAddedToAChart.reduce((soma, atual) => {
      return soma + atual.price * atual.quantity
    }, 0)

    const totalItems = coffeesAddedToAChart.reduce((soma, atual) => {
      return soma + atual.quantity
    }, 0)

    setTotalPriceOfCoffees(totalPriceOfCoffees)
    setTotalItemsAdded(totalItems)
  }, [itemAddedChart, coffeesAddedToAChart])

  return (
    <CoffeesAddedContext.Provider
      value={{
        coffeesAddedToAChart,
        listOfCoffees,
        handleMinusOneCoffee,
        handleAddOneCoffee,
        handleAddItemToAChart,
        totalPriceOfCoffees,
        totalItemsAdded,
        handleAddACoffeeInCheckoutpage,
        handleSubtractACoffeeInCheckoutpage,
        removeACoffeInCheckoutPage,
      }}
    >
      {children}
    </CoffeesAddedContext.Provider>
  )
}
