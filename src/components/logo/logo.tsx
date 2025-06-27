import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(pathname: AppRoute) :JSX.Element {
  if (pathname === AppRoute.Main) {
    return (
      <a className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </a>
    );
  }

  return (
    <Link className="header__logo-link" to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );

}

export default Logo;
