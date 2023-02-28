import { mdiHome } from '@mdi/js';
import { Btn, Icon, Spacer } from 'manakit';
import { Fragment, useState } from 'react';

import Sanbdox from '../components/codes/Sandbox';

export const RenderBtnDefault = () => {
  const [isStacked, setIsStacked] = useState(false);
  const [prependIcon, setPrependIcon] = useState(false);
  const [appendIcon, setAppendIcon] = useState(false);
  const [flat, setFlat] = useState(false);
  const [text, setText] = useState(false);
  const [outlined, setOutlined] = useState(false);

  return (
    <Fragment>
      <Sanbdox
        toolbar={
          <Fragment>
            <Btn text size="sm" active={isStacked} onClick={() => setIsStacked(isStacked ? false : true)}>
              Stacked
            </Btn>
            <Btn text size="sm" active={prependIcon} onClick={() => setPrependIcon(prependIcon ? false : true)}>
              Prepend Icon
            </Btn>
            <Btn text size="sm" active={appendIcon} onClick={() => setAppendIcon(appendIcon ? false : true)}>
              Append Icon
            </Btn>
            <Spacer />
            <Btn text size="sm" active={flat} onClick={() => setFlat(flat ? false : true)}>
              Flat
            </Btn>
            <Btn text size="sm" active={text} onClick={() => setText(text ? false : true)}>
              Text
            </Btn>
            <Btn text size="sm" active={outlined} onClick={() => setOutlined(outlined ? false : true)}>
              Outlined
            </Btn>
          </Fragment>
        }
      >
        <div style={{ minHeight: '300px' }} className="pa-14 d-flex align-center">
          <div className="flex-fill">
            <div className="text-center">
              <Btn
                stacked={isStacked}
                prependIcon={prependIcon ? <Icon icon={mdiHome} /> : undefined}
                appendIcon={appendIcon ? <Icon icon={mdiHome} /> : undefined}
                flat={flat}
                text={text}
                outlined={outlined}
                color="primary"
                className={'white--text'}
              >
                Button
              </Btn>
            </div>
          </div>
        </div>
      </Sanbdox>
    </Fragment>
  );
};

export const BtnProps = () => {
  const data = [
    { name: 'active', type: 'boolean', default: 'false' },
    { name: 'block', type: 'boolean', default: 'false' },
    { name: 'color', type: 'string', default: 'undefined' },
    { name: 'elevation', type: 'string | number', default: 'undefined' },
    { name: 'flat', type: 'boolean', default: 'false' },
    { name: 'href', type: 'string', default: 'undefined' },
    { name: 'target', type: 'string', default: 'undefined' },
    { name: 'icon', type: 'boolean', default: 'false' },
    { name: 'loading', type: 'string | boolean', default: 'false' },
    { name: 'width', type: 'string | number', default: 'undefined' },
    { name: 'height', type: 'string | number', default: 'undefined' },
    { name: 'minWidth', type: 'string | number', default: 'undefined' },
    { name: 'maxWidth', type: 'string | number', default: 'undefined' },
    { name: 'minHeight', type: 'string | number', default: 'undefined' },
    { name: 'maxHeight', type: 'string | number', default: 'undefined' },
    { name: 'position', type: 'string', default: 'undefined' },
    { name: 'elevation', type: '"static" | "relative" | "fixed" | "absolute"| "sticky"', default: 'undefined' },
    { name: 'prependIcon', type: 'any', default: 'undefined' },
    { name: 'appendIcon', type: 'any', default: 'undefined' },
    { name: 'rounded', type: 'boolean | string | number', default: 'false' },
    { name: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl"', default: 'md' },
    { name: 'stacked', type: 'boolean', default: 'false' },
    { name: 'dark', type: 'boolean', default: 'false' },
    { name: 'light', type: 'boolean', default: 'false' },
    { name: 'value', type: 'any', default: 'undefined' },
    { name: 'outlined', type: 'boolean', default: 'false' },
    { name: 'text', type: 'boolean', default: 'false' },
    { name: 'disabled', type: 'boolean', default: 'false' },
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
