import React, { Suspense } from 'react';

const WaitingComponent = Component => {
  return props => (
    <Suspense fallback={<div>loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default WaitingComponent;
