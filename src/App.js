import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Dasher from './pages/Dasher'
import ProjectPos from './pages/ProjectPos'
import VxtTest from './pages/VxtTest'
import SmashBlock from './pages/SmashBlock'
import JobSpy from './pages/JobSpy'
import Pettokonpanion from './pages/Pettokonpanion'
import Blank from './pages/Blank'
import NftGo from './pages/NftGo'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nftgo" component={NftGo} />
        <Route exact path="/dasher" component={Dasher} />
        <Route exact path="/projectpos" component={ProjectPos} />
        <Route exact path="/vxttest" component={VxtTest} />
        <Route exact path="/smashblock" component={SmashBlock} />
        <Route exact path="/jobspy" component={JobSpy} />
        <Route exact path="/pettokonpanion" component={Pettokonpanion} />

        <Route component={Blank} />
      </Switch>
    </BrowserRouter>
  )
}
