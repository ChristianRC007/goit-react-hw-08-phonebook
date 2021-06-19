import { connect } from 'react-redux';
import AppBar from './AppBar';
import { authSelectors } from '../../redux/auth';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
