import {Outlet, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipes from './pages/SavedRecipes';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/create",
        element: <CreateRecipe />,
      },
      {
        path: "/saved",
        element: <SavedRecipes />,
      },
    ],
  },
]);

export default appRouter;