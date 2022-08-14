import { TextProps, TouchableOpacityProps } from 'react-native'

import styled from 'styled-components/native'

interface ContainerProps extends TouchableOpacityProps {
  disabled?: boolean
  flex?: boolean
  outline?: boolean
  type?: 'primary' | 'success' | 'warning' | 'danger'
}

interface MyTextProps extends TextProps {
  disabled?: boolean
  leftIcon?: any
  outline?: boolean
  rightIcon?: any
  type?: 'primary' | 'success' | 'warning' | 'danger'
  uppercase?: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  background-color: ${({ theme, disabled, outline, type = 'primary' }) =>
    outline ? 'transparent' : disabled ? theme.colors.disable : theme.colors[type]};
  border: ${({ theme, disabled, outline, type = 'primary' }) =>
    outline ? (disabled ? `1px solid ${theme.colors.disable}` : `1px solid ${theme.colors[type]}`) : 'none'};
  border-radius: 8px;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  padding: 0px 16px;
  width: ${({ flex }) => (flex ? '100%' : 'auto')};
`

export const Text = styled.Text<MyTextProps>`
  color: ${({ theme, disabled, outline, type = 'primary' }) =>
    disabled ? theme.colors.subtext : outline ? theme.colors[type] : theme.colors.white};
  font-family: ${({ theme }) => theme.fonts[500]};
  font-size: ${({ theme }) => theme.sizes[16]};
  margin-left: ${({ leftIcon }) => (!!leftIcon ? '4px' : '0px')};
  margin-right: ${({ rightIcon }) => (!!rightIcon ? '4px' : '0px')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`
