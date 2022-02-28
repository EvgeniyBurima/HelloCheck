import Link from 'next/link';
import Button from '../../button/Button';
import SearchBar from '../../search-bar';
import BurgerMenu from '../burger';

interface Props {
  openMenu: boolean,
  setOpenMenu: (val: boolean) => void,
}

function LoginGroup({ openMenu, setOpenMenu }: Props) {
  return (
    <div className="flex w-full space-x-2 justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/clients">
          <a className="text-steel-500">Clients</a>
        </Link>
        <Link href="/jobs">
          <a className="text-steel-500">Jobs</a>
        </Link>
        <Link href="/office">
          <a className="text-steel-500">Office</a>
        </Link>
      </div>
      <SearchBar />
      <div className="flex items-center space-x-2 flex-nowrap justify-end">

        <div className=" hidden md:block w-[1px] h-4 items-center bg-steel-100" />

        <Button icon="chevron" text="add new" color="blue" />
        <Button icon="chevron" text="account" color="white" />
        <BurgerMenu open={openMenu} setOpen={setOpenMenu} className="block md:hidden" />
      </div>

    </div>
  );
}

export default LoginGroup;
