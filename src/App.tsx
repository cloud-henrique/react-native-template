import React from 'react'

import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'

import { Routes } from './routes'

export function App() {
  const [loaded] = useFonts({
    'Roboto-100': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-300': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-700': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-900': require('./assets/fonts/Roboto-Black.ttf'),
  })

  if (!loaded) return null

  return (
    <>
      <StatusBar backgroundColor='transparent' style='auto' translucent />
      <Routes />
    </>
  )
}
