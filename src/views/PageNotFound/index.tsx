// import ClassComp from "../../components/classcomp";

function PageNotFound() {
  document.title = "Page not found - DisneyDex";

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-600 via-red-600 to-orange-600 py-10">
      <div className="flex justify-center mb-8 mt-4 h-[480px]">
        <img
          src="https://random-d.uk/api/v2/http/404"
          alt="Here's a duck, but this also 404"
        ></img>
      </div>
      <p className="text-3xl text-white">
        The page that you looking for does not exist.
      </p>
      <div className="flex justify-center">
        <a href="/">
          <div className="text-white text-xl mt-8 group duration-150">
            <p className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 duration-150">
              &lt;&lt;
            </p>
            <p className="group-hover:translate-x-4 duration-150">
              Return to Homepage
            </p>
          </div>
        </a>
      </div>
      {/* <ClassComp /> */}
    </div>
  );
}

export default PageNotFound;
