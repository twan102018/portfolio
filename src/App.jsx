import './App.css';
import React from 'react';
import { CursorProvider } from './hooks/CursorContext'; // Import the provider
import Header from './components/header';
import Hero from './components/hero';
import Carousel from './components/carousel';
import Horizontal from './components/horizontal';
import Timeline from './components/timeline';

function App() {
  return (
    <CursorProvider>
      <Header />
      <Hero />
      <Carousel />
      <Horizontal />
      {/* Other components can be added here */}
    </CursorProvider>
  );
}

export default App;