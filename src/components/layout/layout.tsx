import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getLauoutState } from '../../utils';
import Logo from '../logo/logo';

function Layout() {
  const {pathname} = useLocation();
  const {mainClassName, shouldRenderUser, shouldRenderFooter} = getLauoutState(pathname as AppRoute);

  return (
    <div className={ `page${mainClassName}` }>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo pathname={pathname}/>
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
      {
        shouldRenderFooter ? (
          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
            </a>
          </footer>
        ) : null
      }
    </div>
  );
}

export default Layout;
