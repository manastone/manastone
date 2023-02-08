import { i18n } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';

import { useRouter } from 'next/router';

const Nav = () => {
  const { locale, locales, asPath } = useRouter();
  const [language, setLanguage] = useState('en');

  const handleClick = () => {
    console.log('handleClick');
    language == 'en' ? setLanguage('fr') : setLanguage('en');
    i18n?.changeLanguage(language);
  };

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
      {locales?.map((l, i) => {
        return (
          <span key={i}>
            <Link href={asPath} locale={l}>
              {l}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};
export default Nav;
