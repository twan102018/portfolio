import './App.css';
import React from 'react';
import { CursorProvider } from './hooks/CursorContext'; // Import the provider
import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <CursorProvider>
      <Header />
      <Hero />
      {/* Other components can be added here */}
    </CursorProvider>
  );
}

export default App;