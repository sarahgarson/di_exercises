import React, { Component } from "react";

//1. In a new Javascript file, create an ErrorBoundary Class Component:
// Create a state with a property named hasError, set by default to false.
// Use a componentDidCatch() method to set the value of the hasError property.

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  };

  render() {
    if (this.state.hasError) { 
      return <h1>An error has ocurred</h1>;
    }

    return this.props.children;
  };
};


export default ErrorBoundary;