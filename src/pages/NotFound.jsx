import { HouseIcon } from "@phosphor-icons/react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <span className="mb-4 rounded-full bg-white px-4 border border-gray-300 py-2 text-sm font-medium text-black">
        404 error
      </span>
      <h1 className="mb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-center text-gray-500">
        We're sorry, but the page you're looking for could not be found. It may
        have been moved, deleted, or never existed in the first place.
      </p>
      <div className="flex gap-3">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 font-semibold text-sm text-white shadow transition hover:bg-gray-800"
        >
          <HouseIcon size={20} weight="fill" />
          Go back home
        </a>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md text-sm bg-gray-100 px-5 py-[14px] font-semibold text-gray-900 transition hover:bg-gray-200"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default NotFound;
