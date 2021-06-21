import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Container from '../Container';

import './AppBar.scss';

function AppBar({ isAuthenticated }) {
  return (
    <Container>
      <div className="AppBar">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </Container>
  );
}

export default AppBar;
