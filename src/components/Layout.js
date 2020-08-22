import React from 'react'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'
import NavigationStartPage from './NavigationStartPage'

export default function Layout({ children }) {
  const location = useLocation()
  const isStartPage = location.pathname === '/'

  return (
    <>
      {children}
      {isStartPage ? <NavigationStartPage /> : <Navigation />}
    </>
  )
}
