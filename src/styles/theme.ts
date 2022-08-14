import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const { height } = Dimensions.get('screen')

export const theme = {
  colors: {
    background: '#18191A',
    text: '#E4E6EB',
    primary: '#2D89FF',
  },
  sizes: {
    12: `${RFValue(12, height)}`,
    14: `${RFValue(14, height)}`,
    16: `${RFValue(16, height)}`,
    18: `${RFValue(18, height)}`,
    20: `${RFValue(20, height)}`,
    24: `${RFValue(24, height)}`,
  },
  fonts: {
    100: 'Roboto-100',
    300: 'Roboto-300',
    400: 'Roboto-400',
    500: 'Roboto-500',
    700: 'Roboto-700',
    900: 'Roboto-900',
  },
}
