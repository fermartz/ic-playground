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
    itemOne: path(ROOTS.app, "/item-one"),
    itemTwo: path(ROOTS.app, "/item-two"),
    itemThree: path(ROOTS.app, "/item-three"),
  },
};
