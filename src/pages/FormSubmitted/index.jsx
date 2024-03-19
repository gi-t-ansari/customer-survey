import { Suspense, lazy } from "react";
import { CircularProgress } from "../../components";

const LazyFormSUbmitted = lazy(() => import("./FormSubmitted"));

export const FormSubmitted = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyFormSUbmitted {...props} />
  </Suspense>
);