import Expl from './components/expl';
import Navbar from './components/navbar';

const Style = {
  fondo: {
    backgroundColor: '#01000f',
    height:'100vh',
    margin:'-8px',
    display: 'flex',
    flexDirection: 'column',
  },
}


function App() {
  return (
    <div className="App" style={Style.fondo}>
      <Navbar />
      <Expl />
    </div>
  );
}

export default App;
