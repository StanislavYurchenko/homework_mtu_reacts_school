import { Component } from 'react';

class ErrorHandler extends Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
    console.log('We catch the error!!!!!!!');
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <p>ERROR!!! Here can be some component instead this massage</p>
    ) : (
      children
    );
  }
}

export default ErrorHandler;
