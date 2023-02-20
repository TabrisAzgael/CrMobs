import Expl from './components/expl';
import Navbar from './components/navbar';

const style = {
  fondo: {
    backgroundColor: '#01000f',
    height:'100vh',
    margin:'-8px',
    padding: '15px',
  },
}


function App() {
  return (
    <div className="App" style={style.fondo}>
      <Navbar />
      <Expl />
    </div>
  );
}

export default App;
