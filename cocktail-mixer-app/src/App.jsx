import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, SinglePageError } from './pages/index';
import { loader as landingLoader} from './pages/Landing';
import { loader as cocktailLoader } from './pages/Cocktail';
import { action as newsletterAction} from './pages/Newsletter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 *60/5
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        loader: cocktailLoader(queryClient),
        errorElement: <SinglePageError />
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};
export default App;
