import Link from 'next/link';

function LoginMobileMenu() {
  return (
    <li className="text-steel-500 transition duration-300">
      <Link href="/">
        <a>Contact</a>
      </Link>
    </li>
  );
}

export default LoginMobileMenu;
