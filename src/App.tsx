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
    <div>Icons made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">itim2101</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </QueryClientProvider>
  );
}

export default App;
