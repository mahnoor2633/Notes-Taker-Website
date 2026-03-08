import React from 'react';
import {Routes, Route} from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';


const App = () => {
  return (
    <div data-theme="valentine" className='[background:radial-gradient(125%_125%_at_50%_10%,#FFF_60%,#00FF9D40_100%)]'>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
  )
}

export default App;