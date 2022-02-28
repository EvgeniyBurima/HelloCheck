interface Props {
  className?: string,
}

function SearchInput({
  className,
}: Props): JSX.Element {
  return (
    <label className={` transition-all ease-in-out delay-150 mx-2 ${className || ''}`} htmlFor="search">
      <input
        className="w-full py-2 border-b-2 border-blue-500 outline-none focus:border-gradient-default placeholder:p-4"
        placeholder="search..."
        type="text"
        name="search"
      />
    </label>
  );
}

export default SearchInput;
