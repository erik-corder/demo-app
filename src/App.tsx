import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

const App: React.FC = () => {
  /* Iterate through Routes */
  const routeRender = (
    <Routes>
      {routes.map(
        ({ path, layout: Layout, component: Component, title }: any, key) => {
          /* Render Route component */
          return (
            <Route
              path={path}
              key={key}
              element={
                <Layout title={title}>
                  <Component />
                </Layout>
              }
            />
          );
        }
      )}
    </Routes>
  );

  return <BrowserRouter>{routeRender}</BrowserRouter>;
};

export default App;
