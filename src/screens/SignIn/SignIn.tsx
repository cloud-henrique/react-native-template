import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useState } from 'react'
import { Keyboard, Platform } from 'react-native'
import { SignInContainer, Logo, Content, FormContainer, Label, LabelText } from './SignIn.styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SignInContainer>
      <Content onPress={Keyboard.dismiss}>
        <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Logo />
          <Label>
            <LabelText>E-mail</LabelText>
            <Input value={email} placeholder='E-mail' onChangeText={setEmail} icon='email' />
          </Label>
          <Label>
            <LabelText>Password</LabelText>
            <Input value={password} placeholder='Password' onChangeText={setPassword} password />
          </Label>
          <Button text='Sign in' rightIcon='login' />
        </FormContainer>
      </Content>
    </SignInContainer>
  )
}
