import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import './AppBar.scss';

function AppBar({ isAuthenticated }) {
  return (
    <div className="AppBar">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

export default AppBar;
