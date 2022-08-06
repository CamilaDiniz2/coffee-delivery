import * as React from 'react'
import { ButtonPaymentType } from './styles'

import { CreditCard, Money, Bank } from 'phosphor-react'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  title: string
  type: 'cartao-credito' | 'cartao-debito' | 'dinheiro'
  isSelected: boolean
}

export function MethodOfPayment({ title, type, isSelected, ...rest }: Props) {
  return (
    <ButtonPaymentType type="button" isSelected={isSelected} {...rest}>
      {type === 'cartao-credito' && <CreditCard size={16} color="#8047F8" />}

      {type === 'cartao-debito' && <Money size={16} color="#8047F8" />}

      {type === 'dinheiro' && <Bank size={16} color="#8047F8" />}

      <span>{title}</span>
    </ButtonPaymentType>
  )
}
