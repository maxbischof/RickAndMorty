import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LocationPage from './components/pages/locations/LocationPage'
import EpisodesPage from './components/pages/episodes/EpisodesPage'
import CharactersPage from './components/pages/characters/CharactersPage'
import styled from 'styled-components'
import Game from './components/pages/game/GamePage'
import Layout from './components/Layout'

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Main>
          <Switch>
            <Route path="/locations">
              <LocationPage />
            </Route>
            <Route path="/characters">
              <CharactersPage />
            </Route>
            <Route path="/episodes">
              <EpisodesPage />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/">
              {/* See Layout.js */}
            </Route>
          </Switch>
        </Main>
      </Layout>
    </div>
  )
}

const Main = styled.main`
  padding-bottom: 70px;
  padding-top: 80px;
`