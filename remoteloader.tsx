// RemoteLoader.tsx
import React, { Suspense, lazy, useState, useEffect } from 'react';

// This function loads the remote module dynamically
const loadRemoteModule = (scope: string, module: string) => {
  return new Promise<any>((resolve, reject) => {
    const remoteUrlWithVersion = `http://localhost:3001/remoteEntry.js`; // URL for your remote app

    const script = document.createElement('script');
    script.src = remoteUrlWithVersion;

    script.onload = () => {
      const container = (window as any)[scope]; // e.g., window.module1
      container.init(__webpack_share_scopes__.default); // Initialize shared scope
      container.get(module).then((factory: any) => {
        const Module = factory();
        resolve(Module);
      });
    };

    script.onerror = (err) => {
      console.error('Unable to load remote module', err);
      reject('Error loading remote module');
    };

    document.head.appendChild(script);
  });
};

// Component to dynamically load the remote component/module
const RemoteLoader = ({ scope, module }: { scope: string; module: string }) => {
  const [RemoteComponent, setRemoteComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    loadRemoteModule(scope, module)
      .then((RemoteModule: any) => {
        setRemoteComponent(() => RemoteModule.default);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [scope, module]);

  if (!RemoteComponent) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading remote component...</div>}>
      <RemoteComponent />
    </Suspense>
  );
};

export default RemoteLoader;
