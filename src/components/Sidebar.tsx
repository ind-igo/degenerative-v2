import React from 'react';

import SearchForm from './SearchForm';
import SidebarButton from './SidebarButton';
import Icon from './Icon';

const Sidebar = () => {
  return (
    <div className="fixed-left padding-y-8 flex-column">
      <a
        href="#"
        className="margin-left-6 flex-row-middle padding-left-3 padding-right-3 tablet-absolute-top tablet-min-width-viewport-full tablet-margin-0 tablet-padding-4 w-inline-block"
      >
        <img src="src/assets/zombie_head_small.png" loading="lazy" alt="A cute degen zombie head as the logo" className="degen margin-right-2" />
        <h5 className="margin-0 margin-right-2 expand">Degenerative</h5>
        <div className="pill">v 2.0</div>
      </a>
      <div className="expand tablet-hide">
        <div className="flex-column expand padding-right-3 tablet-padding-x-4 tablet-padding-y-8 min-height-full">
          <SearchForm />
          <SidebarButton text="Explore Synths" icon="Globe" href="#" />
          <SidebarButton text="Portfolio" icon="User" href="#" />
          <div className="nav-divider margin-y-5" />
          <h6 className="margin-left-8 padding-left-3 tablet-padding-left-0 tablet-margin-left-3">Learn</h6>
          <SidebarButton text="Tutorial" icon="FileText" href="#" />
          <SidebarButton text="Docs" icon="FileText" href="#" />
          <SidebarButton text="FAQs" icon="Book" href="#" />
          <SidebarButton text="Support" icon="HelpCircle" href="#" />
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
    </div>
  );
  {
    /*
        <div className="wallet sheen">
        <img src="images/Ellipse%202.png" loading="lazy" alt="" className="avatar margin-right-2"/>
        <div className="expand relative">
        <div className="text-xs">Metamask</div>
        <div className="text-color-4">0x1234...7777</div>
        </div>
        <div data-hover="" data-delay="0" className="margin-left-6 tablet-hide relative w-dropdown">
        <div className="icon-button w-dropdown-toggle">
        <img src="images/" loading="lazy" data-feather="chevron-down" alt="" className="icon opacity-100"/>
        </div>
        <nav className="dropdown-list top-right box-shadow-medium radius-large w-dropdown-list">
        <a href="#" className="dropdown-link w-dropdown-link">Disconnect</a>
        </nav>
        </div>
        <div data-hover="" data-delay="0" data-w-id="52e8a3ba-4e2b-204c-75c1-4e57376fb3b5" className="margin-left-6 hide tablet-block relative w-dropdown">
        <div className="icon-button front w-dropdown-toggle">
        <img src="images/" loading="lazy" data-feather="menu" alt="" className="icon opacity-100"/>
        </div>

        <nav data-w-id="52e8a3ba-4e2b-204c-75c1-4e57376fb3b8" style="display:none;-webkit-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 64px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" className="menu background-color-1 border-1px blur sheen w-dropdown-list">
        <div className="flex-column expand padding-right-3 tablet-padding-x-4 tablet-padding-y-8 min-height-full">
        <div className="margin-left-8 margin-top-6 tablet-margin-0 w-form">
        <form id="email-form" name="email-form" data-name="Email Form">
        <div className="relative">
          <input type="tel" className="form-input has-icon w-input" maxlength="256" name="Synth-2" data-name="Synth 2" placeholder="Search synths" id="Synth-2" required=""/>
          <img src="images/" loading="lazy" data-feather="search" alt="" className="absolute-top-left icon margin-3"/>
        </div>
        </form>
        <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div>
        </div>
        <a href="#" className="nav-link w-inline-block">
        <img src="images/" loading="lazy" data-feather="globe" alt="" className="icon margin-right-3"/>
        <div>Explore Synths</div>
        </a>
        <a href="#" className="nav-link w-inline-block">
        <img src="images/" loading="lazy" data-feather="user" alt="" className="icon margin-right-3"/>
        <div>Portfolio</div>
        </a>
        <div className="nav-divider margin-y-5">
        </div>
        <h6 className="margin-left-8 padding-left-3 tablet-padding-left-0 tablet-margin-left-3">Learn</h6>
        <a href="#" className="nav-link w-inline-block">
        <img src="images/" loading="lazy" data-feather="file-text" alt="" className="icon margin-right-3"/>
        <div>Tutorial</div>
        </a>
        <a href="#" className="nav-link w-inline-block">
        <img src="images/" loading="lazy" data-feather="book" alt="" className="icon margin-right-3"/>
        <div>Docs</div>
        </a>
        <a href="#" className="nav-link w-inline-block">
        <img src="images/" loading="lazy" data-feather="help-circle" alt="" className="icon margin-right-3"/>
        <div>FAQs</div>
        </a>
        <a href="#" className="nav-link w-inline-block">
        <img src="images/" loading="lazy" data-feather="life-buoy" alt="" className="icon margin-right-3"/>
        <div>Support</div>
        </a>
        <div className="expand"></div>
        <div className="nav-divider margin-y-5"></div>
        <a href="#" className="nav-link w-inline-block">
          <img src="images/" loading="lazy" data-feather="external-link" alt="" className="icon margin-right-3"/>
          <div>
          UMA</div></a>
          <a href="#" className="nav-link w-inline-block">
          <img src="images/" loading="lazy" data-feather="external-link" alt="" className="icon margin-right-3"/>
          <div>YAM</div></a>
          <div className="margin-left-8 padding-3 tablet-margin-left-0">
          <div className="w-layout-grid flex-row">
          <a href="#" className="margin-right-0 w-inline-block">
          <img src="images/" loading="lazy" data-feather="twitter" alt="" className="icon in-button"/>
          </a>
          <a href="#" className="margin-right-0 w-inline-block">
          <img src="images/discord%202.png" loading="lazy" alt="Discord logo" className="icon discord in-button"/></a>
          <a href="#" className="margin-right-0 w-inline-block">
          <img src="images/" loading="lazy" data-feather="mail" alt="" className="icon in-button"/></a>
          </div>
          </div>
          </div>
          </nav>
          </div>
          <div className="overlay blur radius-full"></div>
          </div>
*/
  }
  //)
};

export default Sidebar;
