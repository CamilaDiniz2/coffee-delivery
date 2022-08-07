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
import { MethodOfPayment } from './components/MethodOfPayment'
import { CoffeeSelectedItem } from './components/CoffeeSelectedItem'
import { TotalItemsSelectedInfo } from './components/TotalItemsSelectedInfo'
import { Alert, AlertTitle } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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

interface CepFindApiProps {
  bairro: string
  cep: string
  localidade: string
  logradouro: string
  uf: string
}

const newFormCheckoutSchema = zod.object({
  cep: zod.string().length(8, 'CEP deve ter 8 caracteres'),
  number: zod.number().min(1, 'O número deve ser maior que 1'),
  complement: zod.string().optional(),
})

/* interface FormDataContextType {
  formData: FormDataProps 
} */

// const FormDataContext = createContext({} as FormDataContextType)

export function Checkout() {
  const { register, handleSubmit, setValue, setFocus } = useForm({
    resolver: zodResolver(newFormCheckoutSchema),
  })
  const [newMethodOfPayment, setNewMethodOfPayment] = useState('')
  const [cepNotFound, setCepNotFound] = useState<boolean>(false)
  const [methodOfPaymentNotInformed, setMethodOfPaymentNotInformed] =
    useState(false)

  const [errorMessage, setErrorMessage] = useState<string>('')
  const [numberFormatInvalid, setNumberFormatInvalid] = useState<boolean>(false)
  const [cepApiData, setCepApiData] = useState<CepFindApiProps>([])
  const [formData, setFormData] = useState<FormDataProps>([])

  function handleCEP(event: ChangeEvent<HTMLTextAreaElement>) {
    const newCEP = event.target.value.replace(/\D/g, '')
    if (newCEP.length !== 8) {
      setCepNotFound(true)
      setFocus('cep')
      setValue('street', '')
      setValue('neighborhood', '')
      setValue('city', '')
      setValue('uf', '')
      setErrorMessage('O CEP deve conter 8 dígitos.')
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
            setErrorMessage('O CEP não encontrado.')
            return
          }
          setCepNotFound(false)
          setValue('street', data.logradouro)
          setValue('neighborhood', data.bairro)
          setValue('city', data.localidade)
          setValue('uf', data.uf)
          setFocus('number')
          setCepApiData(data)
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
    }

    const data = {
      cep: form.cep,
      street: cepApiData.logradouro,
      neighborhood: cepApiData.bairro,
      city: cepApiData.localidade,
      uf: cepApiData.uf,
      number: form.number,
      complement: form.complement,
      methodOfPayment: newMethodOfPayment,
    }
    setFormData(data)
  }

  console.log(formData)

  function handleNumberInform(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value < 0) {
      setNumberFormatInvalid(true)
      setFocus('number')
    } else {
      setNumberFormatInvalid(false)
    }
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
                  <strong>{errorMessage} </strong>
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
                  onBlur={handleNumberInform}
                  required
                />

                <input
                  type="text"
                  id="complement"
                  placeholder="Complemento (opcional)"
                  {...register('complement')}
                />
              </FormNumberAndComplement>
              {numberFormatInvalid && (
                <Alert severity="error">
                  <AlertTitle>Número não válido</AlertTitle>
                  <strong>Você deve digitar um número maior que 0</strong>
                </Alert>
              )}
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
