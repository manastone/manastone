import { Container } from 'manakit';
import Link from 'next/link';
import { Fragment } from 'react';
import NavDoc from '../../components/NavDocumentation';
import Sidebar from '../../components/Sidebar';

/* eslint-disable react/no-unescaped-entities */
const ManaKit = () => {
  return (
    <Fragment>
      <NavDoc />
      <Container>
        <p className="display-4 text-center">ManaKit</p>
        <p className="text-center">Laurent Grimaldi's bio here</p>
        {/* <Sidebar /> */}
        <Link href={'/manakit/introduction/why-manakit'}>Why Manakit</Link>
      </Container>
    </Fragment>
  );
};
export default ManaKit;
