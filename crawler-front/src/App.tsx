import { HashRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './views/login'

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage}></Route>
        </Switch>
      </HashRouter>
    </div>
  )
}
