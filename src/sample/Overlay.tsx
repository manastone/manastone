import { mdiHome, mdiHistory, mdiHeart } from '@mdi/js';
import { Btn, BottomNavigation, Spacer, Icon, AppBar, AppBarTitle, Overlay, Rectangle } from 'manakit';
import { Fragment, useState } from 'react';

import Sanbdox from '../components/codes/Sandbox';

export const RenderOverlayDefault = () => {
  const [variant, setVariant] = useState('default');
  const [open, setOpen] = useState(false);
  const [flat, setFlat] = useState(false);
  const [dense, setDense] = useState(false);

  return (
    <Fragment>
      <Sanbdox>
        <div style={{ minHeight: '300px' }} className="pa-14 d-flex align-center">
          <div className="flex-fill">
            <div>
              <Overlay value={open} handleClose={() => setOpen(false)} scrollStrategy="block">
                <Rectangle height={20}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum cupiditate accusantium, cumque cum
                  saepe commodi sapiente at dolor debitis, adipisci, exercitationem tempore nesciunt totam est
                  reprehenderit! Tempore quae tempora possimus?
                </Rectangle>
              </Overlay>
              <Btn color="warning" onClick={() => setOpen(true)}>
                Open Overlay
              </Btn>
            </div>
          </div>
        </div>
      </Sanbdox>
    </Fragment>
  );
};

export const OverlayProps = () => {
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
