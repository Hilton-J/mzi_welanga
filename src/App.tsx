import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
