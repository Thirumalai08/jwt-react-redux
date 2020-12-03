
import { Link,Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { signout } from './actions/userActions';

function App() {
  const login = useSelector(state => state.userSignin)
  const {userInfo} = login
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(signout())
  }
  return (
    <div>
        {userInfo ? (
            <button
            onClick={logout}
            >Logout-{userInfo.data.name}</button>
            ) : (
                <Link to="/">Welcome Guest</Link>
            )}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
