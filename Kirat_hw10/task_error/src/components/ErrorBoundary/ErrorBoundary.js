import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        hasError: false 
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>
                <h1>Ooops!</h1>
                <h3>Something went wrong</h3>
                <button onClick={() => window.history.back()}>
                    Go to back
                </button>
            </div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;