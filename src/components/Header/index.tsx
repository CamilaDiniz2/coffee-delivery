import { useContext } from 'react'
import { HeaderContainer } from './styles'
import logoCoffeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPinLine, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CoffeesAddedContext } from '../../contexts/CoffeesAddedContext'

export function Header() {
  const { totalItemsAdded } = useContext(CoffeesAddedContext)
  return (
    <HeaderContainer>
      <NavLink to="/" title="Homepage">
        <img src={logoCoffeDelivery} />
      </NavLink>

      <nav>
        <NavLink to="/">
          <MapPinLine size={24} weight="fill" />
          <span>Localidade</span>
        </NavLink>
        <NavLink to="/checkout" title="Checkout page">
          <ShoppingCart size={24} weight="fill" />
          {totalItemsAdded !== 0 && <span>{totalItemsAdded}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
