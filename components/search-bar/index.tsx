// @ts-ignore
import { UilSearch } from '@iconscout/react-unicons';
import { useState } from 'react';
import Search from '../input/search';

function SearchBar() {
  const [expanded, setExpanded] = useState(false);
  const [searchString, setSearchString] = useState('');

  return (
    <div className="hidden md:flex items-center w-full justify-end">
      {
        expanded
          ? <Search handleClick={setExpanded} />
          : <UilSearch size={20} onClick={() => setExpanded(!expanded)} className="mr-2" />
      }
    </div>
  );
}

export default SearchBar;
