import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LayOut from "./components/LayOut/LayOut";
import routes from "./routes";
function App() {
  const router = createBrowserRouter([
    {
      element: <LayOut />,
      errorElement: <h1>error</h1>,
      children: routes
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
