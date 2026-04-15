import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import Cart from './components/Cart/Cart';
import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <ProductListingPage />
        },
        {
        path: '/cart',
        element: <Cart />
    },
      ]
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App;
