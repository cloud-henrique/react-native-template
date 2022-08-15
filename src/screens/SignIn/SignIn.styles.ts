import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

import LogoImg from '@assets/images/logo.svg'

export const SignInContainer = styled.SafeAreaView`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
`

export const Content = styled(TouchableWithoutFeedback)`
  flex: 1;
  width: 100%;
`

export const FormContainer = styled.KeyboardAvoidingView`
  align-items: center;
  flex: 1;
  justify-content: center;
  width: 100%;
`

export const LogoContainer = styled.View`
  align-items: center;
`

export const Logo = styled(LogoImg)``

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.sizing[24]};
  margin: 32px 0 16px 0;
`

export const Label = styled.View`
  margin: 0 0 16px 0;
  width: 80%;
`

export const LabelText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: ${({ theme }) => theme.sizing[14]};
  margin: 8px 0;
`
