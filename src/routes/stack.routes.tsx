import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { SignIn } from '@screens/SignIn'

import { theme } from '@styles/theme'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={Home} />
      <Screen name='SignIn' component={SignIn} />
    </Navigator>
  )
}
