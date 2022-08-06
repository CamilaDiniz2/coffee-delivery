import { ChangeEvent, useState } from 'react'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CheckoutContainer,
  CoffeesSelected,
  CoffeesSelectedContainer,
  FormContainer,
  BaseBoxTitle,
  FormNumberAndComplement,
  PaymentMethod,
  FormContent,
  FormSelectCityAndState,
  FormaOfPaymentMethods,
} from './styles'
import { MethodOfPayment } from './MethodOfPayment'
import { CoffeeSelectedItem } from './CoffeeSelectedItem'
import { TotalItemsSelectedInfo } from './TotalItemsSelectedInfo'

export function Checkout() {
  const [methodOfPayment, setMethodOfPayment] = useState('')
  const { register, setValue, setFocus } = useForm()
  // const [formValues, setFormValues] = useState({})

  function handleSelectMehodOfPayment(
    type: 'cartao-credito' | 'cartao-debito' | 'dinheiro',
  ) {
    setMethodOfPayment(type)
  }

  function handleCEP(event: ChangeEvent<HTMLTextAreaElement>) {
    const newCEP = event.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${newCEP}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setValue('street', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('uf', data.uf)
        setFocus('number')
      })
      .catch((error) => {
        Alert.alert('CEP incorretp', error)
      })
  }

  return (
    <CheckoutContainer>
      <form action="">
        <div>
          <h1>Complete seu pedido</h1>
          <FormContainer>
            <BaseBoxTitle>
              <MapPinLine size={24} weight="light" color="#C47F17" />
              <div>
                <strong>Endereço de entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </BaseBoxTitle>
            <FormContent>
              <input
                type="text"
                id="cep"
                placeholder="CEP"
                {...register('cep')}
                onBlur={handleCEP}
              />
              <input
                type="text"
                id="street"
                placeholder="Rua"
                {...register('street')}
                disabled
                required
              />

              <FormSelectCityAndState>
                <input
                  type="text"
                  id="neighborhood"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                  disabled
                  required
                />

                <input
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  {...register('city')}
                  disabled
                  required
                />

                <input
                  type="text"
                  id="uf"
                  placeholder="UF"
                  {...register('uf')}
                  disabled
                  required
                />
              </FormSelectCityAndState>

              <FormNumberAndComplement>
                <input
                  type="number"
                  id="number"
                  placeholder="Numero"
                  {...register('number')}
                  required
                />
                <input
                  type="text"
                  id="complement"
                  placeholder="Complemento (opcional)"
                  {...register('complement')}
                />
              </FormNumberAndComplement>
            </FormContent>
          </FormContainer>
          <PaymentMethod>
            <BaseBoxTitle>
              <CurrencyDollar size={24} color="#8047F8" />
              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </BaseBoxTitle>
            <FormaOfPaymentMethods>
              <MethodOfPayment
                title="cartão de crédito"
                type="cartao-credito"
                onClick={() => handleSelectMehodOfPayment('cartao-credito')}
                isSelected={methodOfPayment === 'cartao-credito'}
              />
              <MethodOfPayment
                title="cartão de débito"
                type="cartao-debito"
                onClick={() => handleSelectMehodOfPayment('cartao-debito')}
                isSelected={methodOfPayment === 'cartao-debito'}
              />
              <MethodOfPayment
                title="dinheiro"
                type="dinheiro"
                onClick={() => handleSelectMehodOfPayment('dinheiro')}
                isSelected={methodOfPayment === 'dinheiro'}
              />
            </FormaOfPaymentMethods>
          </PaymentMethod>
        </div>

        <CoffeesSelected>
          <h1>Cafés selecionados</h1>
          <CoffeesSelectedContainer>
            <CoffeeSelectedItem />
            <CoffeeSelectedItem />
            <TotalItemsSelectedInfo />
            <button type="submit">confirmar pedido</button>
          </CoffeesSelectedContainer>
        </CoffeesSelected>
      </form>
    </CheckoutContainer>
  )
}
