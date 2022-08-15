import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

export interface Props {
  disabled?: boolean
  icon?: keyof typeof Icon.glyphMap
  // icon?: string | any
  password?: boolean
  validation?: boolean
}
