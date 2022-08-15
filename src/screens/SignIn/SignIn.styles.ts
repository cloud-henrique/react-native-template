import styled from 'styled-components/native'

import LogoImg from '@assets/images/logo.svg'

export const SignInContainer = styled.View`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.sizing[24]};
`

export const FormContainer = styled.TouchableWithoutFeedback``

export const FormContent = styled.KeyboardAvoidingView``

export const LogoContainer = styled.View``

export const Logo = styled(LogoImg)`
  fill: #faf;
`

export const Label = styled.View``

export const LabelText = styled.Text``

export const Input = styled.TextInput``
