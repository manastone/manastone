import Link from 'next/link';
import { Fragment } from 'react';
const Footer = () => {
  return (
    <Fragment>
      <ul>
        <span>Produit</span>
        <li>
          <Link href="/manakit" passHref>
            <p className="ms-5 pointer lead my-auto">ManaKit</p>
          </Link>
        </li>
      </ul>
      <ul>
        <span>Communauté</span>
        <li>
          <Link href="/community/about" passHref>
            <p className="ms-5 pointer lead my-auto">About</p>
          </Link>
        </li>
        <li>
          <Link href="/community/branding" passHref>
            <p className="ms-5 pointer lead my-auto">Branding</p>
          </Link>
        </li>
        <li>
          <Link href="/community/branding" passHref>
            <p className="ms-5 pointer lead my-auto">Discord</p>
          </Link>
        </li>
      </ul>
      <ul>
        <span>Footer</span>
        <li>
          <Link href="/roadmap" passHref>
            <p className="ms-5 pointer lead my-auto">Roadmap</p>
          </Link>
        </li>
        <li>
          <Link href="/community/branding" passHref>
            <p className="ms-5 pointer lead my-auto">Package</p>
          </Link>
        </li>
        <li>
          <Link href="/community/branding" passHref>
            <p className="ms-5 pointer lead my-auto">Status</p>
          </Link>
        </li>
      </ul>
      <ul>
        <span>Chartes</span>
        <li>
          <Link href="/legal/terms" passHref>
            <p className="ms-5 pointer lead my-auto">Terms</p>
          </Link>
        </li>
        <li>
          <Link href="/acknowledgements" passHref>
            <p className="ms-5 pointer lead my-auto">Remerciements</p>
          </Link>
        </li>
        <li>
          <Link href="/legal/cookies" passHref>
            <p className="ms-5 pointer lead my-auto">Cookies</p>
          </Link>
        </li>
        <li>
          <Link href="/legal/privacy" passHref>
            <p className="ms-5 pointer lead my-auto">Privacy</p>
          </Link>
        </li>
        <li>
          <Link href="/legal/licences" passHref>
            <p className="ms-5 pointer lead my-auto">Licences</p>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Footer;
