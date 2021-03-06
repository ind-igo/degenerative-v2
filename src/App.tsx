import React from 'react';
import ContextProviders from '@/contexts';
import Pages from '@/pages';

const App: React.FC = () => {
  return (
    <ContextProviders>
      <Pages />
    </ContextProviders>
  );
};

export default App;
