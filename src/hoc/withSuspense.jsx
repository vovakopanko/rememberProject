import React, { Suspense } from "react";

export const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback="Loading, wait ....">
      <Component {...props} />
    </Suspense>
  );
};
