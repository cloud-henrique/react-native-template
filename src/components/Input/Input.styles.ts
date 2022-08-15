import { TextInputProps, ViewProps } from 'react-native'

import styled from 'styled-components/native'

interface ContainerProps extends ViewProps {
  disabled?: boolean
}

interface InputProps extends TextInputProps {
  disabled?: boolean
  icon?: boolean
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.text : theme.colors.white)};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme, disabled }) => (disabled ? theme.colors.disable : theme.colors.primary)};
  flex-direction: row;
  height: 56px;
  padding: 8px;
`

export const TextInput = styled.TextInput<InputProps>`
  color: ${({ theme, disabled }) => (disabled ? theme.colors.disable : theme.colors.black)};
  flex: 1;
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: ${({ theme }) => theme.sizing[14]};
  font-size: ${({ theme }) => theme.sizing[16]};
  height: 100%;
  padding-left: ${({ icon }) => (icon ? '4px' : '0px')};
`
