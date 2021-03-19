import React from 'react';
import { Search } from 'react-feather';

type SearchProps = {
  className: string;
};

// TODO Add function onEnter
const SearchForm: React.FC<SearchProps> = ({ className }) => {
  return (
    <div className={className}>
      <form id="email-form" name="email-form">
        <div className="relative">
          <input
            type="text"
            className="form-input margin-0 has-icon w-input"
            maxLength={256}
            name="Synth-2"
            placeholder="Search synths"
            id="Synth-2"
            required
          />
          <Search className="absolute-top-left icon margin-3" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
