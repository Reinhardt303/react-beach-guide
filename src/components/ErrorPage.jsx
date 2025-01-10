import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <main>
        <h1>Oh Shoots, why'd you have to go and do that?</h1>
      </main>
    </>
  );
}

export default ErrorPage;