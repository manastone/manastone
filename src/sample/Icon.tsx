import { mdiHome, mdiAccountCircle, mdiLock } from '@mdi/js';
import { Btn, Icon, Spacer } from 'manakit';
import { Fragment, useState } from 'react';

import Sanbdox from '../components/codes/Sandbox';

export const RenderIconDefault = () => {
  const [iconRender, setIconRender] = useState(mdiHome);
  const [size, setSize] = useState('md');

  return (
    <Fragment>
      <Sanbdox
        toolbar={
          <Fragment>
            <Btn text size="sm" active={iconRender === mdiHome} onClick={() => setIconRender(mdiHome)}>
              mdiHome
            </Btn>
            <Btn
              text
              size="sm"
              active={iconRender === mdiAccountCircle}
              onClick={() => setIconRender(mdiAccountCircle)}
            >
              mdiAccountCircle
            </Btn>
            <Btn text size="sm" active={iconRender === mdiLock} onClick={() => setIconRender(mdiLock)}>
              mdiLock
            </Btn>
            <Spacer />
            <Btn text size="sm" active={size === 'xs'} onClick={() => setSize('xs')}>
              xs
            </Btn>
            <Btn text size="sm" active={size === 'sm'} onClick={() => setSize('sm')}>
              sm
            </Btn>
            <Btn text size="sm" active={size === 'md'} onClick={() => setSize('md')}>
              md
            </Btn>
            <Btn text size="sm" active={size === 'lg'} onClick={() => setSize('lg')}>
              lg
            </Btn>
            <Btn text size="sm" active={size === 'xl'} onClick={() => setSize('xl')}>
              xl
            </Btn>
          </Fragment>
        }
      >
        <div style={{ minHeight: '300px' }} className="pa-14 d-flex align-center">
          <div className="flex-fill">
            <div className="text-center">
              <Icon
                icon={iconRender}
                xSmall={size === 'xs'}
                small={size === 'sm'}
                large={size === 'lg'}
                xLarge={size === 'xl'}
              />
            </div>
          </div>
        </div>
      </Sanbdox>
    </Fragment>
  );
};

export const IconProps = () => {
  const data = [
    { name: 'color', type: 'string', default: 'undefined' },
    { name: 'start', type: 'boolean', default: 'false' },
    { name: 'end', type: 'boolean', default: 'false' },
    { name: 'icon', type: 'any', default: 'undefined' },
    { name: 'xSmall', type: 'boolean', default: 'false' },
    { name: 'Small', type: 'boolean', default: 'false' },
    { name: 'Large', type: 'boolean', default: 'false' },
    { name: 'xLarge', type: 'boolean', default: 'false' },
    { name: 'dark', type: 'boolean', default: 'false' },
    { name: 'light', type: 'boolean', default: 'false' },
  ];

  return (
    <Fragment>
      <div>
        <div>
          <div>Name</div>
          <div>Type</div>
          <div>Default</div>
        </div>
        <div>
          {data.map((el) => (
            <div key={el.name}>
              <div>{el.name}</div>
              <div>{el.type}</div>
              <div>{el.default}</div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
