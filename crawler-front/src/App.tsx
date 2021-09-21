import { HashRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './views/login'
import HomePage from './views/home'

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </HashRouter>
    </div>
  )
}
