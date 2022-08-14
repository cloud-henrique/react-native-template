import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

type ButtonTypes = 'primary' | 'success' | 'warning' | 'danger'

export interface ButtonProps {
  disabled?: boolean
  flex?: boolean
  isLoading?: boolean
  leftIcon?: keyof typeof Icon.glyphMap
  outline?: boolean
  rightIcon?: keyof typeof Icon.glyphMap
  text: string
  type?: ButtonTypes
  uppercase?: boolean
  onPress?: () => void
}
