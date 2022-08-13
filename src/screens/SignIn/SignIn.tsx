import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './SignIn.styles';

interface SignInProps {
  children: ReactNode;
}

export function SignIn({ children }: SignInProps) {
  return (
    <Container>
      <Text>SignIn</Text>
      {children}
    </Container>
  );
}
