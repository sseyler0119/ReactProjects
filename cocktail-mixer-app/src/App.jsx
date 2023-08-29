import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
