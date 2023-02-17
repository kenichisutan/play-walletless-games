import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Games from "./components/Games";
import Game from "./components/Game";
import Genres from "./components/Genres";
import Manage from "./components/Manage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {
                path: "/games",
                element: <Games />
            },
            {
                path: "/games/:id",
                element: <Game />
            },
            {
                path: "/genres",
                element: <Genres />
            },
            {
                path: "/admin/game/0",
                element: <Games />
            },
            {
                path: "/manage",
                element: <Manage />
            },
            {
                path: "/graphql",
                element: <Games />
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);