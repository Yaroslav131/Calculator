import React, { Component } from 'react';
import { Text } from 'react-native';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { ErrorContainer } from './styles';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
      error: null,
    });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorContainer>
          <Text>Oops, Something went wrong.</Text>
          <Text> Try again later :)</Text>
          <Text>
            Error:
            {error && error.toString()}
          </Text>
        </ErrorContainer>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
