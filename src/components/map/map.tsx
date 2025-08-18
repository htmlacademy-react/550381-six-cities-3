import clsx from 'clsx';

type MapProps = {
  type: 'main' | 'offer';
}

const classes = {
  main: 'cities__map',
  offer: 'offer__map'
};

function Map({type}: MapProps): JSX.Element {
  const currentClass = classes[type];
  return (
    <section className={clsx(`${currentClass} map`)}></section>
  );
}

export default Map;
