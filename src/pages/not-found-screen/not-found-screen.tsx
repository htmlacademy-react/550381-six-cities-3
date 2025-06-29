import {Link} from 'react-router-dom';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className='container not-found-screen'>
      <h2 className='not-found-screen-title'>404 Not Found</h2>
      <Link className="place-card__name not-found-screen-link" to="/">Перейдите на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
