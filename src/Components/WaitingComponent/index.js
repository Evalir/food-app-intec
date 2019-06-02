import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner';

const style = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const LoaderDiv = () => (
  <div style={style}>
    <Loader type="ThreeDots" color="palevioletred" height={80} width={80} />
  </div>
);
const WaitingComponent = Component => {
  return props => (
    <Suspense fallback={<LoaderDiv />}>
      <Component {...props} />
    </Suspense>
  );
};

export default WaitingComponent;
