import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import './App.css';
import RowPost from './Components/RowPost/RowPost';
import { actions , horror } from './urls';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <br/>
      <RowPost url={horror} title='Netflix Originals' />
      <RowPost url={actions} title='Action' isSmall />
    </div>
  );
}

export default App;
