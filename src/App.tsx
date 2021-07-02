import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import './App.css';
import Home from './sections/home/index';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home />
    </div>
    </QueryClientProvider>
  );
}

export default App;
