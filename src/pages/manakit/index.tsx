import Link from 'next/link';
import Sidebar from '../../components/Sidebar';

/* eslint-disable react/no-unescaped-entities */
const ManaKit = () => {
  return (
    <div className="mt-3">
      <p className="display-4 text-center">ManaKit</p>
      <p className="text-center">Laurent Grimaldi's bio here</p>
      <Sidebar />
      <Link href={'/manakit/introduction/why-manakit'}>Why Manakit</Link>
    </div>
  );
};
export default ManaKit;
