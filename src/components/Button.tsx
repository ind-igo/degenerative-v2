import React from 'react';

interface ButtonProps {
  text?: string;
  onPress?: () => any;
  color?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onPress, text } = props;

  return <button onClick={onPress}>{text}</button>;
};

export default Button;
