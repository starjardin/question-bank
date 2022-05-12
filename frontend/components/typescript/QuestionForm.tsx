import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const QuestionForm = ({ question }: any) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleFormSubmit = async (data: any) => {
    await fetch("http://localhost:5000/typescript/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.push("/typescript");
  };

  return (
    <div>
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div className="flex">
              <div className="flex-grow">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Question Details
                </h3>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Question *
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
                      type="text"
                      required
                      placeholder="Enter a typescript question here..."
                      defaultValue={question?.question || "new question"}
                      {...register("question")}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Response *
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Type here the answer of your question"
                    defaultValue={question?.response || "new response"}
                    {...register("answer")}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <div className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"></div>
                <div className="mt-1 sm:mt-0 sm:col-span-2 ">
                  <div className="flex justify-between max-w-lg">
                    <button
                      type="submit"
                      className="w-1/2 mr-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center"
                    >
                      Save
                    </button>
                    <Link href="/typescript" passHref>
                      <button
                        type="button"
                        className="w-1/2 py-2 ml-4 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 items-center"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
