import Home from "./Page/Home/Home";
import Play from "./Page/Play/Play";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element:(<Home/>)
  },
  {
    path: "/play/:id",
    element: (<Play/>)
  },
]);
  return (
    <div className="App">
<RouterProvider router={router} />
    </div>
  );
}

export default App;
