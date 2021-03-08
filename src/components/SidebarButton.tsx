// TODO icon + text with link prop
import React from 'react';

import Icon, { IconName } from './Icon';

interface SidebarButtonProps {
  icon?: IconName;
  href?: string;
  text?: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, href, text }) => {
  return (
    <a href={href} className="nav-link w-inline-block">
      {icon && <Icon name={icon} className="icon margin-right-3" />}
      <div>{text}</div>
    </a>
  );
};

export default SidebarButton;
