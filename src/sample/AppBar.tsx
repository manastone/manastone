import { mdiHome, mdiHistory, mdiHeart } from '@mdi/js';
import { Btn, BottomNavigation, Spacer, Icon, AppBar, AppBarTitle } from 'manakit';
import { Fragment, useState } from 'react';

import Sanbdox from '../components/codes/Sandbox';

export const RenderAppBarDefault = () => {
  const [variant, setVariant] = useState('default');
  const [rounded, setRounded] = useState(false);
  const [flat, setFlat] = useState(false);
  const [dense, setDense] = useState(false);

  return (
    <Fragment>
      <Sanbdox
        toolbar={
          <Fragment>
            <Btn text size="sm" active={variant === 'default'} onClick={() => setVariant('default')}>
              Default
            </Btn>
            <Btn text size="sm" active={rounded} onClick={() => setRounded(rounded ? false : true)}>
              Rounded
            </Btn>
            <Btn text size="sm" active={flat} onClick={() => setFlat(flat ? false : true)}>
              Flat
            </Btn>
            <Btn text size="sm" active={dense} onClick={() => setDense(dense ? false : true)}>
              Dense
            </Btn>
          </Fragment>
        }
      >
        <div style={{ minHeight: '300px' }} className="pa-14 d-flex align-center">
          <div className="flex-fill">
            <div>
              <AppBar rounded={rounded} flat={flat} dense={dense}>
                <AppBarTitle>Title</AppBarTitle>
                <Spacer />
                <Btn text>Button</Btn>
                <Btn text>Button</Btn>
                <Btn text>Button</Btn>
              </AppBar>
            </div>
          </div>
        </div>
      </Sanbdox>
    </Fragment>
  );
};

export const AppBarProps = () => {
  const data = [
    { name: 'color', type: 'string', default: 'undefined' },
    { name: 'fixed', type: 'boolean', default: 'false' },
    { name: 'absolute', type: 'boolean', default: 'false' },
    { name: 'app', type: 'boolean', default: 'false' },
    { name: 'flat', type: 'boolean', default: 'false' },
    { name: 'outlined', type: 'boolean', default: 'false' },
    { name: 'floating', type: 'boolean', default: 'false' },
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
