import { Button } from '@components/Button'
import { useState } from 'react'
import { Keyboard, Platform } from 'react-native'
import { SignInContainer, Logo, Content, FormContainer, Label, LabelText, Input } from './SignIn.styles'

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
            <Input value={email} placeholder='E-mail' onChangeText={setEmail} />
          </Label>
          <Label>
            <LabelText>Password</LabelText>
            <Input value={password} placeholder='Password' onChangeText={setPassword} secureTextEntry />
          </Label>
          <Button text='Sign in' rightIcon='login' />
        </FormContainer>
      </Content>
    </SignInContainer>
  )
}
