// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import About from "./pages/About";
// import UserProfile from "./pages/UserProfile";
// import ErrorPage from "./components/ErrorPage";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         errorElement: <ErrorPage />
//     },
//     {
//         path: "/About",
//         element: <About />,
//         errorElement: <ErrorPage />
//     },
//     {
//         path: "/Login",
//         element: <Login />,
//         errorElement: <ErrorPage />
//     },
//     // {
//     //     path: "/UserProfiles",
//     //     element: <UserProfile />
//     // },
//     {
//         path:"profile/:id",
//         element:<UserProfile/>,
//         errorElement:<ErrorPage/>
//     },
//     {
//         path:"*",
//         element:<ErrorPage/>,
//         errorElement:<ErrorPage/>
//     }

// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
