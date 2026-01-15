import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            backgroundColor: '#0c0a09', 
            color: '#f87171',
            padding: '2rem',
            fontFamily: 'monospace'
        }}>
          <h1 style={{fontSize: '2rem', marginBottom: '1rem'}}>Critical System Failure</h1>
          <div style={{backgroundColor: '#1c1917', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #7f1d1d', maxWidth: '800px', width: '100%', overflow: 'auto'}}>
            <p style={{fontWeight: 'bold', marginBottom: '1rem'}}>{this.state.error?.message}</p>
            <pre style={{fontSize: '0.8rem', opacity: 0.7}}>{this.state.error?.stack}</pre>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            style={{marginTop: '2rem', padding: '0.75rem 1.5rem', backgroundColor: '#d97706', color: 'black', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', fontWeight: 'bold'}}
          >
            Reboot System
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);