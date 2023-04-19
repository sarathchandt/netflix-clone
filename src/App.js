
import './App.css';
import Row from './Components/rows/row.js';
import Navbar from './Components/navbar/navbar.js';
import Banner from './Components/banner/banner.js';
import {originals, action, horror, romantic, comedy} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row url={originals} title="Netflix Originals"  />
      <Row url={action} title='Action' isAction />
      <Row url={horror} title='Horror' isAction />
      <Row url={romantic} title='Romantic' isAction />
      <Row url={comedy} title='Comedy Time' isAction />

    </div>
  );
}

export default App;
