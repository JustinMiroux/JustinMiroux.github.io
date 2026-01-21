import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import './styles/main.css'

import Home from './screens/Home.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );

}

export default App
