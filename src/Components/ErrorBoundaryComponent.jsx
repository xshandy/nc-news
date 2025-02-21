import { useNavigate } from "react-router-dom";

function ErrorBoundaryComponent({ error, resetErrorBoundary }) {
  const navigate = useNavigate();

  return (
    <div>
      <p>Something went wrong. Redirecting to home...</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
      <p>Or</p>
      <button onClick={() => navigate(-2)}>Go back</button>
    </div>
  );
}

export default ErrorBoundaryComponent;
