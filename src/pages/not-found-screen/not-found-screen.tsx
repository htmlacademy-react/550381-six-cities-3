import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link className="place-card__name" to="/">Перейдите на главную страницу</Link>
    </>
  );
}

export default NotFoundScreen;
