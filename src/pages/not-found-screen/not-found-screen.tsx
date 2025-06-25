import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <h2>404 Not Found</h2>
      <Link className="place-card__name" to="/">Перейдите на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
