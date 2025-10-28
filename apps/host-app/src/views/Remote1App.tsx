import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppNew from 'remoteapp1/App';

const Remote1App = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the sub-path after /remote1
    const subPath = location.pathname.replace('/remote1', '') || '/';
    
    // Dispatch a custom event that the remote app can listen to
    window.dispatchEvent(new CustomEvent('host-route-change', {
      detail: { 
        basePath: '/remote1',
        subPath: subPath,
        fullPath: location.pathname 
      }
    }));
  }, [location.pathname]);

  return (
    <div>
      <h2>Remote App 1</h2>
      <AppNew />
    </div>
  );
}

export default Remote1App;
