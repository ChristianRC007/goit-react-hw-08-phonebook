import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Contacts from './components/Contacts';
import AppBar from './components/AppBar';
import Login from './components/Login';
import HomePage from './components/HomePage/HomePage';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';

const App = ({ onGetCurrentUser }) => {
  useEffect(() => onGetCurrentUser());

  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
