import React from 'react';
import './error-indicator.css';
const ErrorIndicator = () => {
  return (
    <div className='error-idicator'>
      <span className='boom'>BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
