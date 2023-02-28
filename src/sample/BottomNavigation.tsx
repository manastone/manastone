import { mdiHome, mdiHistory, mdiHeart } from '@mdi/js';
import { Btn, BottomNavigation, Spacer, Icon } from 'manakit';
import { Fragment, useState } from 'react';

import Sanbdox from '../components/codes/Sandbox';

export const RenderBottomNavigationDefault = () => {
  const [activated, setActivated] = useState('home');
  const [variant, setVariant] = useState('default');
  return (
    <Fragment>
      <Sanbdox
        toolbar={
          <Fragment>
            <Btn text size="sm" active={variant === 'default'} onClick={() => setVariant('default')}>
              Default
            </Btn>
            <Btn text size="sm" active={variant === 'grow'} onClick={() => setVariant('grow')}>
              Grow
            </Btn>
            <Btn text size="sm" active={variant === 'shift'} onClick={() => setVariant('shift')}>
              Shift
            </Btn>
          </Fragment>
        }
      >
        <div style={{ minHeight: '300px' }} className="pa-14 d-flex align-center">
          <div className="flex-fill">
            <div style={{ maxWidth: 377, margin: '0 auto' }}>
              <BottomNavigation shift={variant === 'shift'} grow={variant === 'grow'}>
                <Btn
                  active={activated === 'home'}
                  prependIcon={<Icon icon={mdiHome} />}
                  text
                  stacked
                  onClick={() => setActivated('home')}
                >
                  home
                </Btn>
                <Btn
                  active={activated === 'recent'}
                  prependIcon={<Icon icon={mdiHistory} />}
                  text
                  stacked
                  onClick={() => setActivated('recent')}
                >
                  recent
                </Btn>
                <Btn
                  active={activated === 'favoris'}
                  prependIcon={<Icon icon={mdiHeart} />}
                  text
                  stacked
                  onClick={() => setActivated('favoris')}
                >
                  favoris
                </Btn>
              </BottomNavigation>
            </div>
          </div>
        </div>
      </Sanbdox>
    </Fragment>
  );
};

export const BottomNavigationProps = () => {
  const data = [
    { name: 'color', type: 'string', default: 'undefined' },
    { name: 'fixed', type: 'boolean', default: 'false' },
    { name: 'absolute', type: 'boolean', default: 'false' },
    { name: 'app', type: 'boolean', default: 'false' },
    { name: 'flat', type: 'boolean', default: 'false' },
    { name: 'shift', type: 'boolean', default: 'false' },
    { name: 'grow', type: 'boolean', default: 'false' },
    { name: 'elevation', type: 'string | number', default: 'undefined' },
    { name: 'rounded', type: 'string | number | boolean', default: 'false' },
    { name: 'width', type: 'string | number', default: 'undefined' },
    { name: 'height', type: 'string | number', default: 'undefined' },
    { name: 'minWidth', type: 'string | number', default: 'undefined' },
    { name: 'maxWidth', type: 'string | number', default: 'undefined' },
    { name: 'minHeight', type: 'string | number', default: 'undefined' },
    { name: 'maxHeight', type: 'string | number', default: 'undefined' },
    { name: 'dense', type: 'boolean', default: 'false' },
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
