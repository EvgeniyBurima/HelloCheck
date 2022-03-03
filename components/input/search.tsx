// @ts-ignore
import { UilSearch } from '@iconscout/react-unicons';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  handleClick: Dispatch<SetStateAction<boolean>>,
  className?: string,
}

function SearchInput({
  handleClick,
  className = '',
}: Props): JSX.Element {
  return (
    <label className={`mr-2 relative flex justify-end items-center w-full ${className}`} htmlFor="search">
      <input
        className="animate-expand py-2 rounded border-2 outline-none focus:border-gradient-default py-2 px-4 shadow-button max-w-[400px]"
        placeholder="Search"
        type="search"
        name="search"
      />
      <UilSearch size={20} className="absolute right-2" onClick={() => handleClick(false)} />
    </label>
  );
}

export default SearchInput;
