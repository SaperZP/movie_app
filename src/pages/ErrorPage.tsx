import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={"flex flex-col items-center justify-center gap-4"}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{`${error.statusText} ${error.status}`}</i>
        </p>
        <button
          className={"rounded border border-black bg-orange-500 p-2"}
          onClick={() => navigate("/")}
        >
          Go back to the home page
        </button>
      </div>
    );
  }

  return <p>{"Unknown Error"}</p>;
};

export default ErrorPage;
