import Link from 'next/link';

import { useRouter } from 'next/router';
import { BottomNavigation, Btn, Icon } from 'manakit';
import { mdiDomain, mdiHome, mdiOneUp, mdiSourceBranch } from '@mdi/js';

const BottomNav = () => {
  return (
    <BottomNavigation fixed grow>
      <Link href="/" passHref>
        <Btn prependIcon={<Icon icon={mdiHome} />} text stacked>
          Home
        </Btn>
      </Link>
      <Link href="/manakit" passHref>
        <Btn prependIcon={<Icon icon={mdiSourceBranch} />} text stacked>
          ManaKit
        </Btn>
      </Link>
      <Link href="/community/branding" passHref>
        <Btn prependIcon={<Icon icon={mdiOneUp} />} text stacked>
          Branding
        </Btn>
      </Link>
      <Link href="/community/about" passHref>
        <Btn prependIcon={<Icon icon={mdiDomain} />} text stacked>
          About
        </Btn>
      </Link>
    </BottomNavigation>
  );
};
export default BottomNav;
