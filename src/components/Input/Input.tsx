import React, { useRef, useState } from 'react'
import { TextInputProps } from 'react-native'

import { useTheme } from 'styled-components'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { Props } from './types'

import { Container, TextInput } from './Input.styles'

export function Input({ disabled, icon, password = false, validation, ...rest }: Props & TextInputProps) {
  const inputRef = useRef<any>(null)

  const [showPassword, isShowPassword] = useState(false)

  const theme = useTheme()

  function togglePasswordIcon() {
    if (!disabled) {
      isShowPassword(!showPassword)
      inputRef.current.focus()
    }
  }

  function onPressIcon() {
    if (!disabled) {
      inputRef.current.focus()
    }
  }

  return (
    <Container disabled={disabled}>
      {(icon || password) && (
        <Icon
          name={password ? 'lock' : icon}
          size={24}
          color={disabled ? theme.colors.disable : theme.colors.primary}
          onPress={onPressIcon}
        />
      )}

      <TextInput
        disabled={disabled}
        editable={!disabled}
        icon={icon}
        ref={inputRef}
        secureTextEntry={password && !showPassword}
        underlineColorAndroid='transparent'
        placeholderTextColor={theme.colors.subtext}
        selectionColor={theme.colors.black}
        {...rest}
      />

      {password && (
        <Icon
          name={showPassword ? 'eye' : 'eye-off'}
          size={24}
          color={disabled ? theme.colors.disable : theme.colors.primary}
          onPress={togglePasswordIcon}
        />
      )}
    </Container>
  )
}
