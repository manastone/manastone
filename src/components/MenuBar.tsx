import { mdiRocketLaunchOutline, mdiShoppingOutline } from '@mdi/js';
import { AppBar, AppBarTitle, Btn, Icon, Spacer } from 'manakit';
import Link from 'next/link';
import { Fragment } from 'react';

const MenuBar = () => {
  return (
    <Fragment>
      <AppBar fixed height={72} width={'97%'} className={'mt-4'} style={{ marginLeft: '1.5%' }} rounded="lg" app>
        <Link href="/" passHref>
          <AppBarTitle>Manastone</AppBarTitle>
        </Link>
        <Link href="/manakit" passHref>
          <Btn text>ManaKit</Btn>
        </Link>

        <Spacer />
        <Link href="/community/about" passHref>
          <Btn text>A propos de nous</Btn>
        </Link>

        <Btn appendIcon={<Icon icon={mdiShoppingOutline} />} text>
          Boutique
        </Btn>
        <Btn prependIcon={<Icon icon={mdiShoppingOutline} />} text>
          Acceder à ManaHub Web
        </Btn>
      </AppBar>
    </Fragment>
  );
};
export default MenuBar;
