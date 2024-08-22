import React from "react";

interface IErrorBoundryState {
  hasError: boolean;
}
interface IErrorBoundryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<IErrorBoundryProps, IErrorBoundryState> {
  constructor(props: IErrorBoundryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.log('Error in component did Catch', error);
    console.log('any info', info);
  }
  render() {
    console.log(this.state.hasError);
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;