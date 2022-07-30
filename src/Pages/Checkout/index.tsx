import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CheckoutContainer,
  CoffeesSelectedContainer,
  FormContainer,
  BaseBoxTitle,
  PaymentMethod,
  FormContent,
} from './styles'

export function Checkout() {
  const { register, handleSubmit } = useForm()
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
              />
              <input
                type="text"
                id="rua"
                placeholder="Rua"
                {...register('rua')}
              />
              <div>
                <input
                  type="number"
                  id="numero"
                  placeholder="Numero"
                  {...register('numero')}
                />
                <input
                  type="text"
                  id="complemento"
                  placeholder="Complemento (opcional)"
                  {...register('complemento')}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="bairro"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <input
                  type="text"
                  id="cidade"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <input
                  type="text"
                  id="uf"
                  placeholder="UF"
                  {...register('uf')}
                />
              </div>
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
            <div></div>
          </PaymentMethod>
        </div>

        <div>
          <h1>Cafés selecionados</h1>
          <CoffeesSelectedContainer></CoffeesSelectedContainer>
        </div>
      </form>
    </CheckoutContainer>
  )
}
