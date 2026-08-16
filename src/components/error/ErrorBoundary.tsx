import { Component, type ReactNode, type ErrorInfo } from 'react';
import axios from 'axios';
import ServiceUnavailablePage from '@/pages/error/ServiceUnavailablePage';

type Props = {
  children: ReactNode;
};

type State = {
  error: unknown | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: unknown): State {
    return { error };
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    const { error } = this.state;

    if (error !== null) {
      if (axios.isAxiosError(error) && error.response?.status === 503) {
        return <ServiceUnavailablePage />;
      }
      return <h2>Error refresh please</h2>;
    }

    return this.props.children;
  }
}
