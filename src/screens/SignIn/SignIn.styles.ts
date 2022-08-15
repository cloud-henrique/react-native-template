import { TextInput, TouchableWithoutFeedback } from 'react-native'
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

export const LogoContainer = styled.View``

export const Logo = styled(LogoImg)``

export const Label = styled.View`
  margin: 0 0 16px 0;
  width: 80%;
`

export const LabelText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin: 8px 0;
`

export const Input = styled(TextInput).attrs({
  placeholderTextColor: '#8d919e',
})`
  background: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  height: 56px;
  padding: 8px;
  width: 100%;
`
