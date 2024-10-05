import React, { useEffect, useRef } from 'react';

const SplineViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.0.64/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="spline-container">
      <spline-viewer 
        ref={viewerRef}
        url="https://prod.spline.design/660xP6nBWMAn9ObN/scene.splinecode"
      />
    </div>
  );
};

export default SplineViewer;