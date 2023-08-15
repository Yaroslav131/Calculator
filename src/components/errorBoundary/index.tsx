import { Component, ErrorInfo } from 'react';
import { Text } from 'react-native';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { ErrorContainer } from './styles';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render(error = this.state.error) {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <Text>Opss,Something went wrong.</Text>
          <Text> Try again later)))</Text>
          <Text>
            Error:
            {error && error.toString()}
          </Text>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
