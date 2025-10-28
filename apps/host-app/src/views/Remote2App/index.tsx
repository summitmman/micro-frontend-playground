import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { bootstrap as AngularApp } from 'remoteapp2/Component';
import AngularContainer from './AngularContainer';

const Remote2App = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the sub-path after /remote-2
    const subPath = location.pathname.replace('/remote-2', '') || '/';
    
    // Dispatch a custom event that the Angular app can listen to
    window.dispatchEvent(new CustomEvent('host-route-change', {
      detail: { 
        basePath: '/remote-2',
        subPath: subPath,
        fullPath: location.pathname 
      }
    }));
  }, [location.pathname]);

  return (
    <div>
      <h2>Remote App 2</h2>
      <AngularContainer component={AngularApp} />
    </div>
  );
}

export default Remote2App;