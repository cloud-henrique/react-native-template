import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

export interface Props {
  disabled?: boolean
  icon?: keyof typeof Icon.glyphMap
  password?: boolean
  validation?: boolean
}
