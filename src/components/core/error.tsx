// import { useQueryErrorResetBoundary } from "@tanstack/react-query";
// import { ErrorBoundary } from "react-error-boundary";
// import { Button } from "../ui/button";

// const ErrorPage: React.FC = () => {
//   const { reset } = useQueryErrorResetBoundary();
//   return (
//     <ErrorBoundary
//       onReset={reset}
//       fallbackRender={({ resetErrorBoundary }) => (
//         <div>
//           There was an error!
//           <Button onClick={() => resetErrorBoundary()}>Try again</Button>
//         </div>
//       )}
//     >
//       <Page />
//     </ErrorBoundary>
//   );
// };
