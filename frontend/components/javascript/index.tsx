import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import DeletePopup from "../popup/delete";
import { useState } from "react";

interface IQuestions {
  question: string;
  answer: string;
  likes?: number;
  comments?: number;
  owner?: string;
  _id: string;
}

export default function Javascript({ questions }: any) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [openDeletePopup, setOpenDeletePopup] = useState<any>(false);

  async function handleDelete(id: string) {
    await fetch(`http://localhost:5000/javascript/delete/${id}`);
  }
  function handleEdit(id: string) {}

  return (
    <div
      className={
        theme === "light"
          ? "text-xl font-semibold text-gray-900 px-4 sm:px-6 lg:px-8"
          : "text-xl font-semibold text-white bg-gray-900 px-4 sm:px-6 lg:px-8"
      }
    >
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1
            className={
              theme === "light"
                ? "text-xl font-semibold text-gray-900"
                : "text-xl font-semibold text-white bg-gray-900"
            }
          >
            Javascript questions
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Mostly asked javascript interview questions
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={() => router.push("javascript/create")}
          >
            Add questions
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Questions
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Response
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {questions?.map((q: IQuestions, idx: number) => (
                    <tr key={idx}>
                      <td
                        className={
                          theme === "light"
                            ? "px-4 sm:px-6 lg:px-8 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            : "text-white bg-gray-900 px-4 sm:px-6 lg:px-8 py-4 pl-4 pr-3 text-sm font-medium sm:pl-6"
                        }
                      >
                        {q.question}
                      </td>
                      <td
                        className={
                          theme === "light"
                            ? "px-4 sm:px-6 lg:px-8 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            : "text-white bg-gray-900 px-4 sm:px-6 lg:px-8 py-4 pl-4 pr-3 text-sm font-medium sm:pl-6"
                        }
                      >
                        {q.answer}
                      </td>
                      <td
                        className={
                          theme === "light"
                            ? "px-4 sm:px-6 lg:px-8 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            : "text-white bg-gray-900 px-4 sm:px-6 lg:px-8 py-4 pl-4 pr-3 text-sm font-medium sm:pl-6"
                        }
                      >
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                          <span
                            onClick={() => handleEdit(q._id)}
                            className="sr-only"
                          >
                            , {q.question}
                          </span>
                        </a>
                        {" | "}
                        <button
                          onClick={() => {
                            handleDelete(q._id);
                            setOpenDeletePopup(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openDeletePopup && (
        <DeletePopup id={"iam the id"} setOpen={setOpenDeletePopup} />
      )}
    </div>
  );
}
