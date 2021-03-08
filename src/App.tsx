import React from 'react';
import ContextProviders from '@/contexts';
import Pages from '@/pages';
import Sidebar from '@/components/Sidebar';
import './degenerative.css';

const App: React.FC = () => {
  return (
    <ContextProviders>
      <Sidebar />
      <Pages />
    </ContextProviders>
  );
};

export default App;
