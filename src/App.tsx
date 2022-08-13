import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Routes } from './routes'

export function App() {
  return (
    <>
      <StatusBar backgroundColor='transparent' style='auto' translucent />
      <Routes />
    </>
  )
}
