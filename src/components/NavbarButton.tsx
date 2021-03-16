// TODO icon + text with link prop
import React from 'react';
import { Link } from 'react-router-dom';

import Icon, { IconName } from './Icon';

interface NavbarButtonProps {
  icon?: IconName;
  to: string;
  text: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon, to, text }) => {
  return (
    <Link to={to} className="nav-link w-inline-block">
      {icon && <Icon name={icon} className="icon margin-right-3" />}
      <div>{text}</div>
    </Link>
  );
};

export default NavbarButton;
