import { mdiHome, mdiAccountCircle, mdiLock, mdiAccount } from '@mdi/js';
import { Btn, Toolbar, Spacer, ToolbarTitle, Icon } from 'manakit';
import { Fragment, useState } from 'react';

import Sanbdox from '../components/codes/Sandbox';

export const RenderToolbarDefault = () => {
  const [variant, setVariant] = useState('default');
  const [dense, setDense] = useState(false);
  return (
    <Fragment>
      <Sanbdox
        toolbar={
          <Fragment>
            <Btn text size="sm" active={variant === 'default'} onClick={() => setVariant('default')}>
              Default
            </Btn>
            <Btn text size="sm" active={variant === 'flat'} onClick={() => setVariant('flat')}>
              Flat
            </Btn>
            <Btn text size="sm" active={variant === 'outlined'} onClick={() => setVariant('outlined')}>
              Outlined
            </Btn>
            <Spacer />
            <Btn text size="sm" active={dense} onClick={() => setDense(dense ? false : true)}>
              Dense
            </Btn>
          </Fragment>
        }
      >
        <div style={{ minHeight: '300px' }} className="pa-14 d-flex align-center">
          <div className="flex-fill">
            <div>
              <Toolbar
                flat={variant === 'flat' ? true : false}
                outlined={variant === 'outlined' ? true : false}
                dense={dense}
              >
                <ToolbarTitle>Application</ToolbarTitle>
                <Spacer />
                <Btn icon text>
                  <Icon icon={mdiLock} />
                </Btn>
                <Btn icon text>
                  <Icon icon={mdiAccount} />
                </Btn>
              </Toolbar>
            </div>
          </div>
        </div>
      </Sanbdox>
    </Fragment>
  );
};

export const ToolbarProps = () => {
  const data = [
    { name: 'color', type: 'string', default: 'undefined' },
    { name: 'absolute', type: 'boolean', default: 'false' },
    { name: 'outlined', type: 'boolean', default: 'false' },
    { name: 'flat', type: 'boolean', default: 'false' },
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
