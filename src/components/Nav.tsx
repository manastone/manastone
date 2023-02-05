import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="nav p-3 border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer">Manastone</h2>
      </Link>
      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">Bio</p>
      </Link>
      <Link href="/manakit" passHref>
        <p className="ms-5 pointer lead my-auto">ManaKit</p>
      </Link>

      <Link href="/community/branding" passHref>
        <p className="ms-5 pointer lead my-auto">Branding</p>
      </Link>

      <Link href="/community/about" passHref>
        <p className="ms-5 pointer lead my-auto">About</p>
      </Link>
    </nav>
  );
};
export default Nav;
