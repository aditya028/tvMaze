import "./App.css";
import Main from "./components/main";
import MovieDetail from "./components/movieDetail";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./components/form";

function App() {
  const [data, setData] = useState([]);
  const endPoint = "https://api.tvmaze.com/search/shows?q=all";

  useEffect(() => {
    fetch(endPoint)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main data={data} />,
    },
    {
      path: "/:id",
      element: <MovieDetail movies={data} />,
    },
    {
      path: "/form/:id",
      element: <Form movies={data} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
