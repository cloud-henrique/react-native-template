import { Button } from '@components/Button'
import { HomeContainer, Title } from './Home.styles'

export function Home() {
  return (
    <HomeContainer>
      <Title>Button Variants</Title>
      <Button text='Primary' type='primary' />
      <Button text='Success' type='success' />
      <Button text='Danger' type='danger' />
      <Button text='Warning' type='warning' />
      <Button text='Flex' type='primary' flex />
      <Button text='Disabled' type='primary' disabled />
      <Button text='Outline Primary' type='primary' outline />
      <Button text='Left Icon' type='danger' leftIcon='chevron-left' />
      <Button text='Right Icon' type='warning' rightIcon='chevron-right' />
      <Button text='Both Icons' leftIcon='home' rightIcon='home' type='primary' />
      <Button text='outline disabled' outline disabled type='success' />
      <Button text='uppercase' uppercase />

      <Button
        text='Success both icons uppercase outline'
        type='success'
        leftIcon='account-cog-outline'
        rightIcon='account-cog-outline'
        uppercase
        outline
      />
    </HomeContainer>
  )
}
