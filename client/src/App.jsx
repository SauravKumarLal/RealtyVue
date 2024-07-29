import HomePage from "./pages/homePage/homePage";
import Layout from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from "./pages/singlePage/singlePage";
import ProfilePage from "./pages/profilePage/profilePage";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
  ]);
  return (
 
    <RouterProvider router={router}/>
  );
}

export default App;
