import { ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { ButtonProps } from './types'
import { Container, Text } from './Button.styles'

export function Button({
  disabled,
  flex,
  isLoading,
  leftIcon,
  outline,
  rightIcon,
  text,
  type = 'primary',
  uppercase,
  onPress,
}: ButtonProps) {
  const theme = useTheme()

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size='small' color={theme.colors.background} />
      </Container>
    )
  }

  return (
    <Container disabled={disabled} flex={flex} outline={outline} type={type} onPress={onPress} activeOpacity={0.7}>
      {leftIcon && (
        <Icon
          name={leftIcon}
          size={24}
          color={disabled ? theme.colors.subtext : outline ? theme.colors[type] : theme.colors.white}
        />
      )}

      <Text
        type={type}
        disabled={disabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        uppercase={uppercase}
        outline={outline}
      >
        {text}
      </Text>

      {rightIcon && (
        <Icon
          name={rightIcon}
          size={24}
          color={disabled ? theme.colors.subtext : outline ? theme.colors[type] : theme.colors.white}
        />
      )}
    </Container>
  )
}
