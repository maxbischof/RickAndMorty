import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'
import NavigationStartPage from './NavigationStartPage'
import Header from './Header'
import capitalizeFirstLetter from './utils/Capitalize'

export default function Layout({ children }) {
  const location = useLocation().pathname
  const isStartPage = location === '/'

  const [headerHeadline, setHeaderHeadline] = useState('Rick and Morty')

  useEffect(() => {
    let headline = capitalizeFirstLetter(location.substring(1))
    isStartPage && (headline = 'Rick and Morty')
    setHeaderHeadline(headline)
  }, [location, isStartPage])

  return (
    <>
      <Header text={headerHeadline} />
      {children}
      {isStartPage ? <NavigationStartPage /> : <Navigation />}
    </>
  )
}
