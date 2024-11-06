import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    return this.state.hasError ?
        (<div>
          <h2>Something Went Wrong</h2>
          <section>
            <h2>Details Below</h2>
            <p>{this.state.error && String(this.state.error)}</p>
            <details>
              <summary>Click here for more details</summary>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          </section>
        </div>)
      
    : (this.props.children);
  }
}

export default ErrorBoundary;
