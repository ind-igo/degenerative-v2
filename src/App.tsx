import React from 'react';
import ContextProviders from 'contexts';
import Pages from 'pages';

function App() {
  return (
    <ContextProviders>
      <Pages />
    </ContextProviders>
  );
}

export default App;
