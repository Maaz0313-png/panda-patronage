import { HouseIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <span className="mb-4 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#1f1f1f]">
        404 error
      </span>
      <h1 className="tablet:text-4xl tablet:font-bold mb-2 text-center text-2xl text-gray-900">
        Page not found
      </h1>
      <p className="tablet:text-lg mb-8 max-w-md text-center text-base text-gray-500">
        We're sorry, but the page you're looking for could not be found. It may
        have been moved, deleted, or never existed in the first place.
      </p>
      <div className="tablet:flex-row tablet:w-auto flex w-full flex-col gap-3">
        <Link
          to="/"
          className="tablet:inline-flex flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-gray-800"
        >
          <HouseIcon size={20} weight="fill" />
          Go back home
        </Link>
        <Link
          to="/contact"
          className="tablet:inline-flex flex items-center justify-center gap-2 rounded-md bg-gray-100 px-5 py-[14px] text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
