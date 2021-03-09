import React from 'react';

const Page: React.FC = ({ children }) => {
  return (
    <div>
      <div className="flex-column fixed-right">{children}</div>
    </div>
  );
};

export default Page;
