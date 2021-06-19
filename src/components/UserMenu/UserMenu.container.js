import { connect } from 'react-redux';
import UserMenu from './UserMenu';
import { authSelectors } from '../../redux/auth';

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

export default connect(mapStateToProps)(UserMenu);
