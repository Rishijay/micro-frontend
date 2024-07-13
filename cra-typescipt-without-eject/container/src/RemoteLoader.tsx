import React, { useEffect, useState } from "react";

const RemoteLoader: React.FC<{
  url: string;
  scope: string;
  module: string;
}> = ({ url, scope, module }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const script = document.createElement("script");
        script.src = url;
        script.type = "text/javascript";
        script.async = true;

        script.onload = () => {
          (window as any)[scope].get(module).then((factory: any) => {
            const Module = factory().default;
            setComponent(() => Module);
          });
        };

        script.onerror = () => {
          setError("Failed to load remote module");
        };

        document.head.appendChild(script);
      } catch (err) {
        setError("Failed to load remote module");
      }
    };

    loadComponent();
  }, [url, scope, module]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component />;
};

export default RemoteLoader;
