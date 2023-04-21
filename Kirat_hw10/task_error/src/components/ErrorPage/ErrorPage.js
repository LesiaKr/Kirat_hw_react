import React from 'react';
import ErrorBlock from '../ErrorBlock/ErrorBlock';

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        hasError: false 
    };
  }

  static getDerivedStateFromError() {
    return { 
        hasError: true 
    };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBlock />
    }
    return this.props.children;
  }
}

export default ErrorPage;