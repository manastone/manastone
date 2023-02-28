import { Fragment } from 'react';
import { Icon, Spacer, SystemBar } from 'manakit';
import { mdiAlert } from '@mdi/js';

const BannerWebsite = () => {
  return (
    <Fragment>
      <SystemBar color="warning">
        <Spacer />
        <Icon icon={mdiAlert} />
        Site en cours de developpement
        <Spacer />
      </SystemBar>
    </Fragment>
  );
};
export default BannerWebsite;
