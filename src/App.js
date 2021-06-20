import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Contacts from './components/Contacts';
import AppBar from './components/AppBar';
import Login from './components/Login';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, []);

  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PublicRoute
          path="/register"
          restricted
          component={Register}
          redirectTo="/contacts"
        />
        <PublicRoute
          path="/login"
          restricted
          component={Login}
          redirectTo="/contacts"
        />
        <PrivateRoute
          path="/contacts"
          component={Contacts}
          redirectTo="/login"
        />
      </Switch>
    </>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
