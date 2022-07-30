import {
  SuccessDeliveryContainer,
  SuccessDeliveryInfo,
  SuccessIcons,
  SucessDeliveryContent,
} from './styles'
import successDeliveryImage from '../../assets/success-delivery.svg'
import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessDeliveryContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SucessDeliveryContent>
        <SuccessDeliveryInfo>
          <div>
            <SuccessIcons successIconsBackgroundColors="purpleDark">
              <MapPinLine size={16} weight="fill" />
            </SuccessIcons>
            <strong>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </strong>
          </div>
          <div>
            <SuccessIcons successIconsBackgroundColors="yellow">
              <Timer size={16} weight="fill" />
            </SuccessIcons>
            <strong>Previsão de entrega 20 min - 30 min</strong>
          </div>
          <div>
            <SuccessIcons successIconsBackgroundColors="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </SuccessIcons>
            <strong>Pagamento na entrega Cartão de Crédito</strong>
          </div>
        </SuccessDeliveryInfo>
        <img src={successDeliveryImage} />
      </SucessDeliveryContent>
    </SuccessDeliveryContainer>
  )
}
