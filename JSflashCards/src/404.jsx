import { useRouteError, Link } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="w-full flex m-auto">

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl font-bold">Oops! 404 error</h1>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl">
          <i className=" text-red-900">{error.statusText || error.message}</i>
        </p>
        <div className="m-5 file:flex flex-col justify-center items-center w-fit">
       <Link to="/" className="bg-gray-200 border border-black rounded-md p-2 hover:bg-gray-100">Go Home</Link>
        </div>
      </div>

    </div>
  );

}