import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const { height } = Dimensions.get('screen')

export default {
  colors: {
    background: '#f3f2f8',

    primary: '#0052cc',
    primary_light: '#0065ff',
    primary_dark: '#0747a6',

    success: '#00875a',
    success_light: '#36b37e',
    success_dark: '#006644',

    warning: '#ff991f',
    warning_light: '#ffc400',
    warning_dark: '#d27200',

    danger: '#de350b',
    danger_light: '#ff5630',
    danger_dark: '#bf2600',

    text: '#383b43',
    subtext: '#8d919e',

    white: '#ffffff',
    black: '#000000',
    disable: '#c5cada',
  },
  sizes: {
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
