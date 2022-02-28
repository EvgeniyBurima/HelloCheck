import Link from 'next/link';
import Button from '../../button/LinkButton';
import BurgerMenu from '../burger';

interface Props {
  openMenu: boolean,
  setOpenMenu: (val: boolean) => void,
}

function LoginGroup({ openMenu, setOpenMenu }: Props) {
  return (
    <ul className="flex items-center space-x-4 justify-end">
      <li className="text-steel-500 hidden md:block">
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
      <li className="text-blue-500">
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </li>
      <li className="hidden md:block">
        <div className="w-[1px] h-4 items-center bg-steel-100" />
      </li>
      <li>
        <Button text="sign up" color="blue" href="/signUp" />
      </li>
      <li className="block md:hidden">
        <BurgerMenu open={openMenu} setOpen={setOpenMenu} />
      </li>
    </ul>
  );
}

export default LoginGroup;
