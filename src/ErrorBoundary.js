import React from "react";

import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    console.log("Error: ", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught and error", error, info);
    // could also call an error logging service here (e.g. Azure Monitor, Sentry, and TrackJS)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was and error with this listing. <Link to="/">Click here</Link>
          to go back to the home page.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
