import { useEffect } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css'
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import { basePath } from './router/routes';

// Component to handle host route changes
const HostRouteListener = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleHostRouteChange = (event: CustomEvent) => {
      const { basePath: eventBasePath, subPath } = event.detail;
      
      // Only respond to events for this remote app
      if (eventBasePath === basePath) {
        console.log('Remote App 1: Navigating to', subPath);
        navigate(subPath);
      }
    };

    window.addEventListener('host-route-change', handleHostRouteChange as EventListener);
    
    return () => {
      window.removeEventListener('host-route-change', handleHostRouteChange as EventListener);
    };
  }, [navigate]);

  return null; // This component doesn't render anything
};

function App() {

  return (
    <BrowserRouter basename={basePath}>
      <Header />
      <HostRouteListener />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
