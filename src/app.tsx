import MainScreen from './pages/main-screen/main-screen';


type AppScreenProps = {
  offerCardCount: number;
}


function App({offerCardCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offerCardCount={offerCardCount}/>
  );
}

export default App;
