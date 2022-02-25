interface Props {
  open: boolean,
  setOpen: (val: boolean) => void,
}

function BurgerMenu({ open, setOpen }: Props): JSX.Element {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl mx-auto">
        <nav x-data="{ open: false }">
          <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onClick={() => setOpen(!open)} type="button">
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true" className={`${open ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`} />
              <span aria-hidden="true" className={`${open ? 'opacity-0' : ''} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`} />
              <span aria-hidden="true" className={`${open ? '-rotate-45' : 'translate-y-1.5'} block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`} />
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
