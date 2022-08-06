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
import { Box, Alert, AlertTitle } from '@mui/material'

interface MethodOfPaymentTypes {
  methodOfPaymentTypes: 'cartao-credito' | 'carta-debito' | 'dinheiro'
}

interface FormDataProps {
  cep: number
  street: string
  neighborhood: string
  city: string
  uf: string
  number: number
  complement?: string
}

export function Checkout() {
  const [newMethodOfPayment, setNewMethodOfPayment] = useState('')

  const { register, handleSubmit, setValue, setFocus } = useForm()
  // const [formValues, setFormValues] = useState({})
  const [cepNotFound, setCepNotFound] = useState<boolean>(false)
  const [methodOfPaymentNotInformed, setMethodOfPaymentNotInformed] =
    useState(false)

  function handleCEP(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log('aqui')
    const newCEP = event.target.value.replace(/\D/g, '')
    if (newCEP.length !== 8) {
      setCepNotFound(true)
      setFocus('cep')
      setValue('street', '')
      setValue('neighborhood', '')
      setValue('city', '')
      setValue('uf', '')
    } else {
      fetch(`https://viacep.com.br/ws/${newCEP}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.cep === undefined) {
            setCepNotFound(true)
            setFocus('cep')
            setValue('street', '')
            setValue('neighborhood', '')
            setValue('city', '')
            setValue('uf', '')
            return
          }
          console.log(data)
          setCepNotFound(false)
          setValue('street', data.logradouro)
          setValue('neighborhood', data.bairro)
          setValue('city', data.localidade)
          setValue('uf', data.uf)
          setFocus('number')
        })
    }
  }

  function handleSelectMehodOfPayment(type: MethodOfPaymentTypes) {
    setNewMethodOfPayment(type)
    setMethodOfPaymentNotInformed(false)
  }

  function handleInformCompletAddress(form: FormDataProps) {
    if (newMethodOfPayment === '') {
      setMethodOfPaymentNotInformed(true)
      return
    }

    const data = {
      cep: form.cep,
      street: form.street,
      neighborhood: form.neighborhood,
      city: form.city,
      uf: form.uf,
      number: form.number,
      complement: form.complement,
      methodOfPayment: newMethodOfPayment,
    }
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleInformCompletAddress)} action="">
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

              {cepNotFound && (
                <Alert severity="error">
                  <AlertTitle>CEP não encontrado</AlertTitle>
                  <strong>Por favor digite um CEP válido</strong>
                </Alert>
              )}
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
                  {...register('number', { valueAsNumber: true })}
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
                value="cartao-credito"
                onClick={() => handleSelectMehodOfPayment('cartao-credito')}
                isSelected={newMethodOfPayment === 'cartao-credito'}
              />
              <MethodOfPayment
                title="cartão de débito"
                type="cartao-debito"
                onClick={() => handleSelectMehodOfPayment('cartao-debito')}
                isSelected={newMethodOfPayment === 'cartao-debito'}
              />
              <MethodOfPayment
                title="dinheiro"
                type="dinheiro"
                onClick={() => handleSelectMehodOfPayment('dinheiro')}
                isSelected={newMethodOfPayment === 'dinheiro'}
              />
            </FormaOfPaymentMethods>

            {methodOfPaymentNotInformed === true && (
              <Alert severity="error">
                <AlertTitle>Forma de pagamento nao selcionada</AlertTitle>
                <strong>Selecione a forma de pagamento para comtinuar</strong>
              </Alert>
            )}
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
