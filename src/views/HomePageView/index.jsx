import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  TerminalIcon,
  HandIcon,
  PlusIcon,
  CalculatorIcon,
  BookOpenIcon,
} from "@heroicons/react/solid";

const Items = [
  {
    page: "hello-world",
    icon: <TerminalIcon className="h-8 w-8 mr-6 text-white" />,
  },
  {
    page: "greeting",
    icon: <HandIcon className="h-8 w-8 mr-6 text-white" />,
  },
  {
    page: "counter",
    icon: <PlusIcon className="h-8 w-8 mr-6 text-white" />,
  },
  {
    page: "calculator",
    icon: <CalculatorIcon className="h-8 w-8 mr-6 text-white" />,
  },
  {
    page: "phonebook",
    icon: <BookOpenIcon className="h-8 w-8 mr-6 text-white" />,
  },
  {
    page: "assistant",
    icon: <BookOpenIcon className="h-8 w-8 mr-6 text-white" />,
  },
];

function HomePageView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {Items.map((i, x) => {
        return (
          <RouterLink to={`/app/${i.page}`} key={x}>
            <div className="py-8 px-8 rounded-md text-white text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 ">
              <div className="inline-flex items-center">
                {i.icon}
                {i.page}
              </div>
            </div>
          </RouterLink>
        );
      })}
    </div>
  );
}

export default HomePageView;
