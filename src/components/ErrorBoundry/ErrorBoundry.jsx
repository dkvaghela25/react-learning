import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage : error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error:", error);
    console.log("Error Message:",error.message);
  }

  render() {
    if (this.state.hasError) {
      return <>
        <h2>Something went wrong.</h2>
        <h1>{this.state.errorMessage}</h1>
      </>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;