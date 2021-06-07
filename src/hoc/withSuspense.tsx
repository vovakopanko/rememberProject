import React, { Suspense } from "react";

export const withSuspense = (Component:any) => {
  return (props:any) => (
    <Suspense fallback="Loading, wait ....">
      <Component {...props} />
    </Suspense>
  );
};
