import React, { Fragment } from 'react';
import { mdiAlert } from '@mdi/js';
import { Icon, Spacer, SystemBar } from 'manakit';

export function MessageBar() {
  return (
    <Fragment>
      <SystemBar color="warning" app>
        <Spacer /> <Icon className={'mr-2'}>{mdiAlert}</Icon> Site en cours de développement <Spacer />
      </SystemBar>
    </Fragment>
  );
}
