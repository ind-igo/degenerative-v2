import React from 'react';

const SideDisplay: React.FC = ({ children }) => {
  return (
    <div>
      <div className="expand flex-column">{children}</div>
    </div>
  );
};

export default SideDisplay;
