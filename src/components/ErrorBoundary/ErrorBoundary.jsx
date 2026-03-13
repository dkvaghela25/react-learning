
const ErrorFallback = ({ error }) => (
  <>
    <h2>Something went wrong.</h2>
    <h1>{error.message}</h1>
  </>
);

export default ErrorFallback;