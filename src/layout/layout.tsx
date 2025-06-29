import { Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { AppRoute } from '../const';
import { getLayoutState } from '../utils';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Layout() {
  const {pathname} = useLocation();
  const {mainClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute);

  return (
    <div className={clsx('page', mainClassName)}>
      <Header shouldRenderUser={shouldRenderUser}/>
      <Outlet/>
      {
        shouldRenderFooter && <Footer/>
      }
    </div>
  );
}

export default Layout;
