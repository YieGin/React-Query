import React from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Query from './Query';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Query />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
