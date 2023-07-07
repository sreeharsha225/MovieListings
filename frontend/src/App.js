import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Asap Condensed, sans-serif, monospace',
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing/>}/>
            <Route exact path='/movies' element={<Movies/>} />
            <Route exact path='/addmovie' element={<AddMovie/>} />
          </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
