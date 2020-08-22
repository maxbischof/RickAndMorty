import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import NavButton from './NavButton/NavButton'
import img from '../images/btn-episodes2.jpg'

export default function Navigation() {
  return (
    <NavStyled>
      <NavItem exact activeClassName="isActive" to="/">
        Home
      </NavItem>
      <NavItem activeClassName="isActive" to="/characters">
        Characters
      </NavItem>
      <NavItem activeClassName="isActive" to="/episodes">
        Episodes
      </NavItem>
      <NavItem activeClassName="isActive" to="/locations">
        Locations
      </NavItem>
      <NavItem activeClassName="isActive" to="/game">
        Dead or Alive
      </NavItem>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  position: fixed;
  z-index: 200;
  background-color: #121212;
  border-top: 0.5px solid #a0a0a0;
  width: 100vw;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
`

const NavItem = styled(NavLink)`
  color: white;
  font-size: 15px;
`
