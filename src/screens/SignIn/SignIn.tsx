import { useState } from 'react'
import { Keyboard, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { SignInContainer, Logo, Content, FormContainer, Label, LabelText, Title, LogoContainer } from './SignIn.styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  function handleOpenHomeScreen() {
    navigation.navigate('Home')
  }

  return (
    <SignInContainer>
      <Content onPress={Keyboard.dismiss}>
        <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <LogoContainer>
            <Logo />
            <Title>React Native Boilerplate</Title>
          </LogoContainer>
          <Label>
            <LabelText>E-mail</LabelText>
            <Input value={email} placeholder='E-mail' onChangeText={setEmail} icon='email' />
          </Label>
          <Label>
            <LabelText>Password</LabelText>
            <Input value={password} placeholder='Password' onChangeText={setPassword} password />
          </Label>
          <Button text='Sign in' rightIcon='login' onPress={handleOpenHomeScreen} />
        </FormContainer>
      </Content>
    </SignInContainer>
  )
}
