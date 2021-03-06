import React from 'react';

interface ButtonProps {
  onPress: () => any;
}

const Button: React.FC<ButtonProps> = () => {
  return <button>Click me!</button>;
};

export default Button;
