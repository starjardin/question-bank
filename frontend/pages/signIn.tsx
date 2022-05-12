/* eslint-disable @next/next/no-img-element */
// import Header from '@components/Header';
import { CtxOrReq } from "next-auth/client/_utils";
import { signIn, getProviders, getCsrfToken } from "next-auth/react";

export default function SignIn({ providers, csrfToken }: any) {
  return (
    <div className="flex-col flex justify-center h-screen">
      <main>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="py-4 text-3xl">Elite</h2>
          <h1 className="sr-only">Page title</h1>
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Main page
            </h2>
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <div className="min-h-full flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                  <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                      <img
                        className="h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                      </h2>
                    </div>

                    <div className="mt-8">
                      <div className="mt-6">
                        <form
                          action="/api/auth/signin/email"
                          method="POST"
                          className="space-y-6"
                        >
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              <input
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                              />
                            </label>
                            <div className="mt-1">
                              <input
                                id="email"
                                name="csrfToken"
                                type="hidden"
                                defaultValue={csrfToken}
                              />
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Use your email
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <input
                        name="csrfToken"
                        type="hidden"
                        defaultValue={csrfToken}
                      />
                      <label className="inline-flex justify-center py-2 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Username
                      </label>
                      <input
                        placeholder="Username"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        name="username"
                        type="text"
                      />
                      <label className="inline-flex justify-center py-2 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <div className="my-4">
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div>
                      {Object.values(providers).map((provider: any) => {
                        if (provider.name === "Email") {
                          return;
                        }
                        return (
                          <div key={provider.name} className="m-4">
                            <button
                              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                              onClick={() => signIn(provider.id)}
                            >
                              Sign in with {provider.name}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: CtxOrReq | undefined) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: { providers, csrfToken },
  };
}
