import logo from './logo.svg';
import Navbar from '../src/Components/Navbar/Navbar'
import Card from './Components/Card';

import Admin from './Admin/Admin';


function App() {
  return (
    <div className='h-screen w-screen overflow-hidden' >
      <Navbar/>
      <Admin/>
    </div>
  );
}

export default App;
