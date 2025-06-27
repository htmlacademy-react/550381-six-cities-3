import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

const getLauoutState = (pathname: AppRoute) => {
  let mainClassName = '',
    linkClassName = '',
    shouldRenderUser = true;

  if (pathname === AppRoute.Main) {
    mainClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    mainClassName = ' page--gray page--login';
    shouldRenderUser = false;
  }

  return {mainClassName, linkClassName, shouldRenderUser};
};

function Layout() {
  const {pathname} = useLocation();
  const {mainClassName, linkClassName, shouldRenderUser} = getLauoutState(pathname as AppRoute);

  return (
    <div className={ `page${mainClassName}` }>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className={ `header__logo-link${linkClassName}` } href='#'>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            {
              shouldRenderUser ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              ) : null
            }
          </div>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}

export default Layout;
