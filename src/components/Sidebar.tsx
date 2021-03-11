import React from 'react';

import SearchForm from './SearchForm';
import SidebarButton from './SidebarButton';
import Icon from './Icon';

const Sidebar = () => {
  const Navigation = () => {
    return (
      <div className="expand tablet-hide">
        <div className="flex-column expand padding-right-3 tablet-padding-x-4 tablet-padding-y-8 min-height-full">
          <SearchForm />
          <SidebarButton text="Explore Synths" icon="Globe" href="#" />
          <SidebarButton text="Portfolio" icon="User" href="#" />
          <div className="nav-divider margin-y-5" />
          <h6 className="margin-left-8 padding-left-3 tablet-padding-left-0 tablet-margin-left-3">Learn</h6>
          <SidebarButton text="Tutorial" icon="FileText" href="#" />
          <SidebarButton text="Docs" icon="Book" href="#" />
          <SidebarButton text="FAQs" icon="HelpCircle" href="#" />
          <SidebarButton text="Support" icon="LifeBuoy" href="#" />
          <div className="expand"></div>
          <div className="nav-divider margin-y-5"></div>
          <SidebarButton text="YAM" icon="ExternalLink" href="#" />
          <SidebarButton text="UMA" icon="ExternalLink" href="#" />
          <div className="margin-left-8 padding-3 tablet-margin-left-0">
            <div className="w-layout-grid flex-row">
              <a href="#" className="margin-right-0 w-inline-block">
                <Icon name="Twitter" className="icon in-button" />
              </a>
              <a href="#" className="margin-right-0 w-inline-block">
                <img src="src/assets/discord.png" loading="lazy" alt="Discord logo" className="icon discord in-button" />
              </a>
              <a href="#" className="margin-right-0 w-inline-block">
                <Icon name="Mail" className="icon in-button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="fixed-left padding-y-8 flex-column">
        <a
          href="#"
          className="margin-left-6 flex-row-middle padding-left-3 padding-right-3 tablet-absolute-top tablet-min-width-viewport-full tablet-margin-0 tablet-padding-4 w-inline-block"
        >
          <img src="src/assets/zombie_head_large.png" loading="lazy" alt="A cute degen zombie head as the logo" className="degen margin-right-2" />
          <h5 className="margin-0 margin-right-2 expand">Degenerative</h5>
          <div className="pill">v 2.0</div>
        </a>
        <Navigation />
        <div className="wallet sheen">
          <img src="src/assets/ellipse.png" loading="lazy" alt="" className="avatar margin-right-2" />
          <div className="expand relative">
            <div className="text-xs">Metamask</div>
            <div className="text-color-4">0x1234...7777</div>
          </div>
          <div className="margin-left-6 tablet-hide relative w-dropdown">
            <div className="icon-button w-dropdown-toggle">
              <Icon name="ChevronDown" className="icon opacity-100" />
            </div>
            <nav className="dropdown-list top-right box-shadow-medium radius-large w-dropdown-list">
              <a href="#" className="dropdown-link w-dropdown-link">
                Disconnect
              </a>
            </nav>
          </div>
        </div>
        <div className="margin-left-6 hide tablet-block relative w-dropdown">
          <div className="icon-button front w-dropdown-toggle">
            <img src="images/" loading="lazy" data-feather="menu" alt="" className="icon opacity-100" />
          </div>
          <div className="menu background-color-1 border-1px blur sheen w-dropdown-list">
            <Navigation />
          </div>
        </div>
        <div className="overlay blur radius-full"></div>
      </div>
    </div>
  );
};

// TODO error when this is on nav element
// style="display:none;-webkit-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
export default Sidebar;
