import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const { height } = Dimensions.get('screen')

export default {
  sizing: {
    12: `${RFValue(12, height)}px`,
    14: `${RFValue(14, height)}px`,
    16: `${RFValue(16, height)}px`,
    18: `${RFValue(18, height)}px`,
    20: `${RFValue(20, height)}px`,
    24: `${RFValue(24, height)}px`,
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
