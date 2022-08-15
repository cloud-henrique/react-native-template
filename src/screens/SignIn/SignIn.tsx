import { useTheme } from 'styled-components'
import { SignInContainer, Title, Logo } from './SignIn.styles'

export function SignIn() {
  const theme = useTheme()

  return (
    <SignInContainer>
      <Title>SignIn</Title>
      <Logo />
    </SignInContainer>
  )
}
