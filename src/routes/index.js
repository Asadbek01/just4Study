import { useRoutes } from 'react-router-dom';
import { Feed } from '../Components';
import { publicRoutes } from './public';


export const AppRoutes = () => {

  const mainUrl = [{ path: '/', element: <Feed /> }];

  const routes = useRoutes([...publicRoutes, ...mainUrl]);

  return <>{routes}</>;
};