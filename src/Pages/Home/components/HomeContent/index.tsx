import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import homeImage from '../../../../assets/home-image.svg'
import {
  HomeIcons,
  HomeSection,
  HomeSectionContent,
  HomeSectionContentItems,
} from './styles'

export function HomeContent() {
  return (
    <HomeSection>
      <HomeSectionContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <HomeSectionContentItems>
          <div>
            <HomeIcons homeIconsBackgroundColors="yellowDark">
              <ShoppingCart size={16} weight="fill" />
            </HomeIcons>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <HomeIcons homeIconsBackgroundColors="yellow">
              <Package size={16} weight="fill" />
            </HomeIcons>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <HomeIcons homeIconsBackgroundColors="gray">
              <Timer size={16} weight="fill" />
            </HomeIcons>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <HomeIcons homeIconsBackgroundColors="purpleDark">
              <Coffee size={16} weight="fill" />
            </HomeIcons>
            <span>O café chega fresquinho até você</span>
          </div>
        </HomeSectionContentItems>
      </HomeSectionContent>

      <img src={homeImage} />
    </HomeSection>
  )
}
