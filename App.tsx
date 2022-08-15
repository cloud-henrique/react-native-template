import React from 'react'
import { useColorScheme } from 'react-native'

import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import { Routes } from './src/routes'
import themes from './src/themes'

export function App() {
  const deviceTheme = useColorScheme() || 'dark'

  const theme = themes[deviceTheme]

  const statusBarColor = deviceTheme === 'dark' ? 'light' : 'dark'

  const [loaded] = useFonts({
    'Roboto-100': require('./src/assets/fonts/Roboto-Thin.ttf'),
    'Roboto-300': require('./src/assets/fonts/Roboto-Light.ttf'),
    'Roboto-400': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-700': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-900': require('./src/assets/fonts/Roboto-Black.ttf'),
  })

  if (!loaded) return null

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar backgroundColor='transparent' style={statusBarColor} translucent />
        <Routes />
      </>
    </ThemeProvider>
  )
}
