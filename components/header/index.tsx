import { useState } from 'react';
import Link from 'next/link';
import CheckLogoText from '../../assets/icons/logotextblack.svg';
import MobileMenu from './mobile-menu';
import LoginGroup from './login/login-group';
import LoginMobileMenu from './login/login-mobile-menu';

function Header(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="row-auto h-14 flex items-center justify-between px-4 md:px-12 py-4 bg-white text-sm">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <CheckLogoText className="h-6 w-auto cursor-pointer" />
          </a>
        </Link>
        <nav>
          <LoginGroup openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
      </header>
      <MobileMenu show={openMenu} className="block md:hidden">
        <ul className="flex items-center space-x-4">
          <LoginMobileMenu />
        </ul>
      </MobileMenu>
    </>
  );
}

export default Header;
