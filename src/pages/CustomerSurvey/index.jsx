import { Suspense, lazy } from "react";
import { CircularProgress } from "../../components";

const LazyCustomerSurvey = lazy(() => import("./CustomerSurvey"));

export const CustomerSurvey = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyCustomerSurvey {...props} />
  </Suspense>
);