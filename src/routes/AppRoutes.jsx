import { PATH_APP } from "./paths";
import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

// ----------------------------------------------------------------------

const AppRoutes = {
  path: PATH_APP.root,
  layout: HomeLayout,
  routes: [
    // APP
    // ----------------------------------------------------------------------
    {
      exact: true,
      path: PATH_APP.app.assistant,
      component: lazy(() => import("../views/AssistantView")),
    },
    {
      exact: true,
      path: PATH_APP.app.blog,
      component: lazy(() => import("../views/BlogView")),
    },
    {
      exact: true,
      path: PATH_APP.app.blogPost,
      component: lazy(() => import("../views/BlogView/post")),
    },
    {
      exact: true,
      path: PATH_APP.app.calculator,
      component: lazy(() => import("../views/CalculatorView")),
    },
    {
      exact: true,
      path: PATH_APP.app.counter,
      component: lazy(() => import("../views/CounterView")),
    },
    {
      exact: true,
      path: PATH_APP.app.greeting,
      component: lazy(() => import("../views/GreetingView")),
    },
    {
      exact: true,
      path: PATH_APP.app.helloWorld,
      component: lazy(() => import("../views/HelloWorldView")),
    },
    {
      exact: true,
      path: PATH_APP.app.phonebook,
      component: lazy(() => import("../views/PhonebookView")),
    },
    {
      exact: true,
      path: PATH_APP.app.itemOne,
      component: lazy(() => import("../views/ItemOneView")),
    },
    {
      exact: true,
      path: PATH_APP.app.itemTwo,
      component: lazy(() => import("../views/ItemTwoView")),
    },
    {
      exact: true,
      path: PATH_APP.app.itemThree,
      component: lazy(() => import("../views/ItemThreeView")),
    },

    // ----------------------------------------------------------------------
    {
      component: () => <Redirect to="/404" />,
    },
  ],
};

export default AppRoutes;
