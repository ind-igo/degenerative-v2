import React from 'react';
import { Search } from 'react-feather';

// TODO Add function onEnter
const SearchForm: React.FC = () => {
  return (
    <div className="margin-left-8 margin-top-6 tablet-margin-0 w-form">
      <form id="email-form" name="email-form">
        <div className="relative">
          <input type="text" className="form-input has-icon w-input" maxLength={256} name="Synth-2" placeholder="Search synths" id="Synth-2" required />
          <Search className="absolute-top-left icon margin-3" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
