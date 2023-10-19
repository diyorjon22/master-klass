import './App.css';
import { Routes, Route,} from 'react-router-dom'
// import {Main, About,} from './pages'
import Main from './pages/main/main';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
