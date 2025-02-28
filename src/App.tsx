import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Home/>
    </div>,
  },
  {
    path: "/profile",
    element: <div>
      <Profile/>
    </div>,
  },
  {
    path:"/login",
    element:
    <div>
      <Login/>
    </div>
  },
  {
    path:"/register",
    element:
    <div>
      <Register/>
    </div>
  },
]);

const App = () => {
  return (
    <div>
   

      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
};

export default App;
