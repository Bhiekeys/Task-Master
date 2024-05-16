import { useRoutes } from 'react-router';
import {
  About,
  CreateAccount,
  DownloadApp,
  Home,
  Login,
  PrivacyPolicy,
} from './pages/Landing';
const Router = () => {
  return useRoutes([
    {
      path: '/',
      errorElement: <h2>Error Ocurred</h2>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/downloadApp',
          element: <DownloadApp />,
        },
        {
          path: '/privacyPolicy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/createAccount',
          element: <CreateAccount />,
        },
      ],
    },
    {
      path: '*',
      element: <h2>Page Not Found</h2>,
      errorElement: <h2>Error Ocurred</h2>,
    },
  ]);
};
export default Router;
