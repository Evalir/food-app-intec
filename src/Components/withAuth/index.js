import React from 'react';
import Auth from '../../Utils/Auth';

// Auth HOC
const withAuth = Component =>
  class extends React.Component {
    state = {
      loaded: false,
    };
    componentDidMount() {
      if (!Auth.isLoggedIn()) {
        this.props.history.replace('/login');
      } else {
        this.setState({ loaded: true });
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };

export default withAuth;
