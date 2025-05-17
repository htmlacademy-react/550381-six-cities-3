import { PLACES_OPTIONS } from '../../const';

function PlacesOptions(): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {PLACES_OPTIONS.map((options) => (
        <li className="places__option places__option--active" tabIndex={0} key={options}>{options}</li>
      ))}
    </ul>
  );
}

export default PlacesOptions;
