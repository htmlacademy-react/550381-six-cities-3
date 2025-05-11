import MainScreen from '../../pages/main-screen/main-screen';


type AppScreenProps = {
  citiesCardCount: number;
}


function App({citiesCardCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen citiesCardCount={citiesCardCount}/>
  );
}

export default App;
