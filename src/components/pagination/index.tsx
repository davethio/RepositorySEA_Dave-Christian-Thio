import { useState, useEffect } from "react";
import { IPaginationProps } from "./pagination.interface";

function Pagination(props: IPaginationProps) {
  const [goToPage, setGoToPage] = useState(0);

  // const pageNumber = [];

  // let leftIndex = Math.max(props.currentPage - 5, 1);
  // let rightIndex = Math.min(props.currentPage + 5, props.totalPages);

  // //   if (leftIndex + 7 > props.totalPages && props.totalPages > 0) {
  // //     leftIndex = props.totalPages - 6;
  // //   }

  // for (let i = leftIndex; i <= rightIndex; i++) {
  //   pageNumber.push(i);
  // }  

  useEffect(() => {
    setGoToPage(props.currentPage);
  }, [props.currentPage])

  if (props.totalPages === 0) return <></>;

  return (
    <div className="flex flex-col gap-4">
      {/* <div className="text-white text-xl">
        Page <span className="font-bold">{props.currentPage}</span> of{" "}
        <span className="font-bold">{props.totalPages}</span>
      </div> */}
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px text-sm md:text-xl">
          <li>
            <button
              onClick={() => {
                setGoToPage(1);
                props.paginate(1);
              }}
              className="mx-1 flex px-1.5 py-2.5 leading-tight text-white disabled:text-opacity-20 rounded-lg enabled:hover:bg-gray-700 enabled:hover:bg-opacity-50 duration-150"
              disabled={props.currentPage <= 1 || props.disabled}
            >
              <span className="sr-only">First Page</span>
              <svg
                aria-hidden="true"
                className="-mr-4 md:-mr-3 w-3 h-3 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-3 h-3 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setGoToPage(props.currentPage - 1);
                props.paginate(props.currentPage - 1);
              }}
              className="mx-1 block px-2.5 py-2.5 leading-tight text-white disabled:text-opacity-20 rounded-lg enabled:hover:bg-gray-700 enabled:hover:bg-opacity-50  duration-150"
              disabled={props.currentPage <= 1 || props.disabled}
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-3 h-3 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {/* {pageNumber.map((pn) => {
            return pn === props.currentPage ? (
              <li>
                <button
                  aria-current="page"
                  className="z-10 px-3 py-2 leading-tight text-white rounded-lg bg-gray-700 bg-opacity-50"
                >
                  {pn}
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => props.paginate(pn)}
                  className="px-3 py-2 leading-tight text-white"
                >
                  {pn}
                </button>
              </li>
            );
          })} */}
          <li>
            <div className="flex items-center justify-center gap-4 mx-2">
              <div className="flex items-center gap-2">
                <p className="text-white md:text-lg">Page</p>
                <input
                  type="number"
                  min={1}
                  max={props.totalPages}
                  className="bg-gray-50 border w-14 md:w-20 h-10 border-gray-300 text-gray-900 md:text-lg rounded-lg disabled:bg-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none duration-150"
                  required
                  onChange={(e) => setGoToPage(parseInt(e.target.value))}
                  value={goToPage}
                  disabled={props.disabled}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') props.paginate(goToPage)
                  }}
                />
                <p className="text-white md:text-lg">of {props.totalPages}</p>
              </div>
              <button
                type="button"
                className="text-white h-10 bg-blue-700 disabled:bg-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-lg px-3 dark:bg-blue-600 enabled:dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-block duration-150"
                id="query"
                onClick={() => {
                  props.paginate(goToPage);
                }}
                value="Search"
                disabled={props.disabled}
              >
                Go
              </button>
            </div>
          </li>
          <li>
            <button
              onClick={() => {
                setGoToPage(props.currentPage + 1);
                props.paginate(props.currentPage + 1);
              }}
              className="mx-1 block px-2.5 py-2.5 leading-tight text-white disabled:text-opacity-20 rounded-lg enabled:hover:bg-gray-700 enabled:hover:bg-opacity-50  duration-150"
              disabled={props.currentPage >= props.totalPages || props.disabled}
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-3 h-3 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setGoToPage(props.totalPages);
                props.paginate(props.totalPages);
              }}
              className="mx-1 flex px-1.5 py-2.5 leading-tight text-white disabled:text-opacity-20 rounded-lg enabled:hover:bg-gray-700 enabled:hover:bg-opacity-50  duration-150"
              disabled={props.currentPage >= props.totalPages || props.disabled}
            >
              <span className="sr-only">Last Page</span>
              <svg
                aria-hidden="true"
                className="w-3 h-3 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-3 h-3 md:w-5 md:h-5 md:-ml-3 -ml-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      {/* <div className="flex items-center justify-center gap-2">
        <p className="text-white text-lg">Jump to page</p>
        <input
          type="number"
          min={1}
          max={props.totalPages}
          className="bg-gray-50 border w-16 h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none"
          required
          onChange={(e) => setGoToPage(parseInt(e.target.value))}
        />
        <button
          type="button"
          className="text-white h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-block"
          id="query"
          onClick={() => {
            props.paginate(goToPage);
          }}
          value="Search"
        >
          Go
        </button>
      </div> */}
    </div>
  );
}

export default Pagination;
