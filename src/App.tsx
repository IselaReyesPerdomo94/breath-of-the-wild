import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import './App.css';
import Creatures from './sections/Creatures';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Creatures />
    </div>
    </QueryClientProvider>
  );
}

export default App;
