import axios from "axios";
import { useState, useEffect } from "react";

import CharCard from "../../components/charcard";
import Pagination from "../../components/pagination";
import Spinner from "../../components/spinner";
import ErrorAlert from "../../components/erroralert";

import noimage from "../../images/noimage.png";

function Home() {
  const [pageTitle, setPageTitle] = useState("Home");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [chars, setChars] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [pageSize, setPageSize] = useState(50);

  useEffect(() => {
    const fetchChars = async () => {
      setIsLoading(true);
      await axios
        .get("https://seleksi-sea-2023.vercel.app/api/movies")
        .then((res) => {
          if (res) {
            setChars(res.data);
            setError(false);
          } else {
            setNoResult(true);
            setTotalPages(0);
          }
        })
        .catch((err) => {
          setTotalPages(0);
          setIsLoading(false);
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchChars();
  }, [page, query, pageSize]);

  console.log(chars);

  useEffect(() => {
    document.title = pageTitle + " - DisneyDex";
  }, [pageTitle]);

  const enterSearch = () => {
    setChars([]);

    if (queryInput === "") {
      setPageTitle("Home");
      setQuery("");
      return;
    }

    setPageTitle("Results for " + queryInput);
    setTotalPages(0);
    setPage(1);
    setQuery(queryInput);
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber > totalPages) return;

    window.scrollTo(0, 0);

    if (pageNumber < 1) {
      setPage(1);
      return;
    }

    setPage(pageNumber);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 via-30% to-pink-500 py-10">
      <div className="grid mb-12 gap-3">
        <p className="font-semibold text-2xl lg:text-4xl text-white">
          Welcome to Sea Cinema!
        </p>
        <p className="lg:text-xl text-white">
        Introducing SEA Cinema, a rising star in the movie theater industry known for
its affordable ticket prices and wide range of movie genres.
        </p>
      </div>
      <div
        className={
          "flex gap-4 lg:justify-between items-center lg:items-start flex-col lg:flex-row px-4 " +
          (((chars.length <= 0 && query === "") || error) && "hidden")
        }
      >
        <div className="flex items-center gap-3">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 text-sm md:text-base border w-80 lg:w-96 border-gray-300 disabled:bg-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 duration-150"
            placeholder="Search for a movie..."
            onChange={(e) => {
              setQueryInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") enterSearch();
            }}
            value={queryInput}
            disabled={isLoading || error}
          />
          <button
            type="button"
            className="text-white bg-blue-700 disabled:bg-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 enabled:dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-block"
            id="query"
            onClick={() => enterSearch()}
            value="Search"
            disabled={isLoading || error}
          >
            Search
          </button>
        </div>
        <div
          className={
            "flex items-center gap-2 text-white " + (noResult && "hidden")
          }
        >
          <p>View</p>
          <select
            className="bg-gray-50 border border-gray-300 disabled:bg-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 duration-150"
            onChange={(e) => {
              setPage(1);
              setTotalPages(0);
              setChars([]);
              setPageSize(parseInt(e.target.value));
            }}
            disabled={isLoading || error || noResult}
          >
            <option value="50" selected>
              50
            </option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="750">750</option>
            <option value="1000">1000</option>
            <option value="2500">2500</option>
            <option value="5000">5000</option>
          </select>
          <p>items per page</p>
        </div>
      </div>
      {query !== "" && (
        <div className="text-white flex justify-center items-center gap-2 mt-4">
          <p className="md:text-xl">
            Showing results for <span className="font-bold">{query}</span>.{" "}
          </p>
          <button
            className="bg-rose-500 bg-opacity-50 rounded-lg p-1"
            onClick={() => {
              setPage(1);
              setTotalPages(0);
              setPageTitle("Home");
              setNoResult(false);
              setChars([]);
              setQueryInput("");
              setQuery("");
            }}
          >
            <svg
              aria-hidden="true"
              className="w-3 h-3 md:w-5 md:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <div className="w-full my-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div className="flex justify-center">
            <ErrorAlert
              title={"An error occured."}
              desc={"Please try again in a few minutes."}
            />
          </div>
        ) : noResult ? (
          <div className="flex justify-center">
            <ErrorAlert
              title={"Character not found."}
              desc={"The character that you're looking for does not exist."}
            />
          </div>
        ) : (
          <div className="grid grid-cols-fill-16 sm:grid-cols-fill-24 xl:grid-cols-fill-64 justify-center gap-1.5 xl:gap-3">
            {chars.map((ch) => {
              return (
                <CharCard
                  id={ch.id}
                  name={ch.title}
                  image={ch.poster_url ? ch.poster_url : noimage}
                />
              );
            })}
          </div>
        )}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        paginate={paginate}
        disabled={isLoading || error || noResult || totalPages === 1}
      />
    </div>
  );
}

export default Home;
