import './App.css';
import React from 'react';
import { CursorProvider } from './hooks/CursorContext'; // Import the provider
import Header from './components/header';
import Hero from './components/hero';
import Horizontal from './components/horizontal';

function App() {
  return (
    <CursorProvider>
      <Header />
      <Hero />
      <Horizontal />
      {/* Other components can be added here */}
    </CursorProvider>
  );
}

export default App;