import React from 'react'
import './styles/main.scss'
import { Link, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { MyPlaylists } from './pages/MyPlaylists'
import { Playlist } from './pages/Playlist'
import { MyCharts } from './pages/MyCharts'
import { CreateAPlaylist } from './pages/CreateAPlaylist'
import { LoginButton } from './LoginButton'
import { SpotifyAuthCallback } from './SpotifyCallBack'

export function App() {
  return (
    <main>
      <Header />

      <LoginButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlists" component={MyPlaylists} />
        <Route exact path="/playlist/:id" component={Playlist} />
        <Route exact path="/charts" component={MyCharts} />
        <Route exact path="/create" component={CreateAPlaylist} />
        <Route exact path="/callback" component={SpotifyAuthCallback}>
          <SpotifyAuthCallback />
        </Route>
      </Switch>
    </main>
  )
}
export default App
