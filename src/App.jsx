import React from "react";
import { Router } from "react-router-dom";
import routes, { renderRoutes } from "./routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return <Router history={history}>{renderRoutes(routes)}</Router>;
}

export default App;
