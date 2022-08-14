import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { SignIn } from '@screens/SignIn'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='SignIn' component={SignIn} />
    </Navigator>
  )
}
