// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS = {
  app: "/app",
};

export const PATH_HOME = {
  dashboard: ROOTS.app,
};

export const PATH_APP = {
  root: ROOTS.app,

  app: {
    assistant: path(ROOTS.app, "/assistant"),
    blog: path(ROOTS.app, "/blog"),
    blogPost: path(ROOTS.app, "/blog/post/:id"),
    calculator: path(ROOTS.app, "/calculator"),
    counter: path(ROOTS.app, "/counter"),
    greeting: path(ROOTS.app, "/greeting"),
    helloWorld: path(ROOTS.app, "/hello-world"),
    phonebook: path(ROOTS.app, "/phonebook"),
    itemOne: path(ROOTS.app, "/item-one"),
    itemTwo: path(ROOTS.app, "/item-two"),
    itemThree: path(ROOTS.app, "/item-three"),
  },
};
