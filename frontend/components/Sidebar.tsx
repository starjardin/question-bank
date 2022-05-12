/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { classNames } from "../lib/utils";
import { HomeIcon, CogIcon } from "@heroicons/react/outline";

const buildNavigation = (route: string) => {
  const navigation = [
    { name: "Dashboard", icon: HomeIcon, current: true, href: "/" },
    { name: "Typescript", icon: HomeIcon, current: true, href: "/typescript" },
    { name: "Javascript", icon: HomeIcon, current: true, href: "/javascript" },
    { name: "Movies", icon: HomeIcon, current: true, href: "/movies" },
    {
      name: "Settings",
      icon: CogIcon,
      current: false,
      children: [
        { name: "Whitelist", href: "/settings/whitelist" },
        { name: "API Keys", href: "/apiKeys/apiKeys" },
      ],
    },
  ];

  return navigation.map((item) => {
    if (!item.children) {
      return item;
    }

    item.current = item.children.map((c) => c.href).includes(route);

    return item;
  });
};

export default function SideBar() {
  const router = useRouter();
  const navigation = buildNavigation(router.route);

  return (
    <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200 bg-blue-darker">
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="w-auto h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnI2mV82d4tz0XIxi4FcLU8TpPQ2-6GMMTg&usqp=CAU"
          alt="Eskwelabs"
        />
      </div>
      <div className="flex flex-col flex-grow mt-5">
        <nav
          className="flex-1 px-2 space-y-1 bg-blue-darker"
          aria-label="Sidebar"
        >
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center w-full py-2 pl-2 text-sm font-medium text-gray-600 rounded-md bg-blue-darker hover:bg-gray-50 hover:text-blue-900 group"
                >
                  <item.icon
                    className={classNames(
                      item.current ? "text-gray-600" : "text-gray-400",
                      "mr-3 flex-shrink-0 h-6 w-6 group-hover:text-gray-900"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure
                as="div"
                key={item.name}
                className="space-y-1"
                defaultOpen={item.current}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? "bg-blue-600 text-gray-500"
                          : "bg-blue-darker text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-50"
                            : "group-hover:text-gray-900",
                          "flex-shrink-0 w-6 h-6 mr-3 text-gray-400 "
                        )}
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? "text-gray-400 rotate-90" : "text-gray-300",
                          "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1 border-l border-blue-500">
                      {item.children.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center w-full pr-2 text-sm font-medium rounded-none hover:text-gray-500 hover:bg-gray-50 group pl-11 text-gray-500"
                        >
                          <span className="py-2">{subItem.name}</span>
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
