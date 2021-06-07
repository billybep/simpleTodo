import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import NavigationBar from './components/NavigationBar'
import SignIn from './pages/SignInPage'
import Todo from './pages/TodoPage.jsx'
import { useSelector } from 'react-redux'

function App() {

  const currentUser = useSelector(state => state.currentUser)

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={ _ => Object.keys(currentUser).length !== 0 ? children : <Redirect to='/signin' /> }
      />
    )
  }

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/signin' component={SignIn} />

        <PrivateRoute path='/app'>
          <Todo />
        </PrivateRoute>

        <Route path='*' component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
