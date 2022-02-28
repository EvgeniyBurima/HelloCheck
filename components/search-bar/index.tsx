// @ts-ignore
import { UilSearch } from '@iconscout/react-unicons';
import { useState } from 'react';
import Search from '../input/search';

function SearchBar() {
  const [expanded, setExpanded] = useState(false);
  const [searchString, setSearchString] = useState('');

  return (
    <div className="flex items-center w-full justify-end">
      <Search className={`${expanded ? 'w-0' : 'w-full'}`} />
      <UilSearch size={20} onClick={() => setExpanded(!expanded)} />
    </div>
  );
}

export default SearchBar;
