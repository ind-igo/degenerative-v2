import React from 'react';

export const Drawer = () => {
  return (
    <div className="wallet sheen">
      <img src="images/Ellipse%202.png" loading="lazy" alt="" className="avatar margin-right-2" />
      <div className="expand relative">
        <div className="text-xs">Metamask</div>
        <div className="text-color-4">0x1234...7777</div>
      </div>
      <div data-hover="" data-delay="0" className="margin-left-6 tablet-hide relative w-dropdown">
        <div className="icon-button w-dropdown-toggle">
          <img src="images/" loading="lazy" data-feather="chevron-down" alt="" className="icon opacity-100" />
        </div>
        <nav className="dropdown-list top-right box-shadow-medium radius-large w-dropdown-list">
          <a href="#" className="dropdown-link w-dropdown-link">
            Disconnect
          </a>
        </nav>
      </div>
      {/*
      <div className="margin-left-6 hide tablet-block relative w-dropdown">
        <div className="icon-button front w-dropdown-toggle">
          <img src="images/" loading="lazy" data-feather="menu" alt="" className="icon opacity-100" />
        </div>
        <nav
          data-w-id="52e8a3ba-4e2b-204c-75c1-4e57376fb3b8"
          style="display:none;-webkit-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
          className="menu background-color-1 border-1px blur sheen w-dropdown-list"
        >
          <div className="flex-column expand padding-right-3 tablet-padding-x-4 tablet-padding-y-8 min-height-full">
          </div>
        </nav>
      </div>*/}
      <div className="overlay blur radius-full"></div>
    </div>
  );
};
